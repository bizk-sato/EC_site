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


FactoryBot.define do
  factory :product do
    name { 'MyString' }
    price { 1 }
    desription { 'MyText' }
    stock { 1 }
    references { '' }
  end
end
