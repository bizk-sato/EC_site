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

require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'scope' do
    describe '.by_name' do
      subject { Product.by_name(search_value).size }

      before do
        create(:product, name: product_name, category: category)
      end

      let(:category) { create(:category, name: category_name) }
      let(:product_name) { 'マルチビタミン&ミネラル' }
      let(:category_name) { 'サプリ' }

      context '商品名と部分一致' do
        let(:search_value) { 'ビタミン' }
        it { is_expected.to eq(1) }
      end

      context '商品名と完全一致' do
        let(:search_value) { 'マルチビタミン&ミネラル' }
        it { is_expected.to eq(1) }
      end

      context 'カテゴリ名と部分一致' do
        let(:search_value) { 'サ' }
        it { is_expected.to eq(1) }
      end

      context 'カテゴリ名と完全一致' do
        let(:search_value) { 'サプリ' }
        it { is_expected.to eq(1) }
      end

      context '商品名、カテゴリ名と不1一致' do
        let(:search_value) { 'のび太' }
        it { is_expected.to eq(0) }
      end
    end
  end
end
