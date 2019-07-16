# frozen_string_literal: true

class TopController < ApplicationController
  def index
    @products = Product.all
    @categories = Category.limit(2)
  end
end
