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

FactoryBot.define do
  factory :review do
    product_id { nil }
    user_id { "MyString" }
    references { "MyString" }
    stars { "" }
    comment { "MyText" }
  end
end
