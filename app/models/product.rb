# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string
#  price       :integer
#  stock       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#

class Product < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :category
  has_one_attached :image

  before_destroy :destroy_image

  # 商品名と部分一致、商品のカテゴリと部分一致
  scope :by_name, ->(value) do
    joins(:category)
      .where('products.name LIKE ? OR categories.name LIKE ?', "%#{value}%", "%#{value}%")
  end

  def image_url
    image.attached? ? rails_blob_path(image, host: :localhost) : nil
  end

  # imageのurlを載せるためにoverride
  def attributes
    attr = super
    attr[:image] = image_url
    attr[:category] = category&.name
    attr
  end

  private

  def destroy_image
    image.purge
  end
end
