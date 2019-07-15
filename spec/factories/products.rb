# frozen_string_literal: true

FactoryBot.define do
  factory :product do
    name { 'MyString' }
    price { 1 }
    desription { 'MyText' }
    stock { 1 }
    references { '' }
  end
end
