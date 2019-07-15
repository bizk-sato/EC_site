# frozen_string_literal: true

category = Category.create!(name: 'Suppliment')
3.times do |n|
  Product.create!(
    name: "ハトムギ#{n}",
    price: 100 * n + 1_000,
    description: 'すごい栄養素',
    stock: n + 1,
    category: category
  )
end
