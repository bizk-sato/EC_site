# frozen_string_literal: true

if Category.first.blank?
  category = Category.create!(name: 'Suppliment')
  3.times do |n|
    product = Product.create!(
      name: "ハトムギ#{n}",
      price: 100 * n + 1_000,
      description: 'すごい栄養素',
      stock: n + 1,
      category: category
    )

    Review.create!(
      stars: n,
      product: product,
      comment: 'this is a nice product.I would bui it again in the future.'
    )
  end
end
