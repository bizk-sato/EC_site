# frozen_string_literal: true

class TopController < ApplicationController
  before_action :find_categories, only: %i[index search]

  def index
    # TODO: ページネーションを実装
    @products = Product.all
  end

  def search
    @search_word = params[:search]
    redirect_to action: :index unless @search_word.present?

    @products = Product.by_name(params[:search])
    render action: :index
  end

  private

  def find_categories
    @categories = Category.limit(2)
  end
end
