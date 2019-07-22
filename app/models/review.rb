# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  comment    :text             not null
#  stars      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint
#
# Indexes
#
#  index_reviews_on_product_id  (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#

class Review < ApplicationRecord
  belongs_to :product
end
