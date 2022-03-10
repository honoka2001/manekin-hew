Rails.application.routes.draw do
  resources :posts

  resources :users, only: %i[index show update] do
    resource :address
  end

  resources :items, only: %i[index create destroy]

  resources :manekins
  resources :purchases
  resources :statistics

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/login', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
end
