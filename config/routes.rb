# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :admin do
    resources :categories
    resources :products

    root to: 'categories#index'
  end

  root 'top#index'
  post '/search', to: 'top#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
