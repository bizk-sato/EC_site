class ProductsController < ApplicationController
  def show
    @product = Product.find(params[:id])
    @stars = @product.stars
  end
end
