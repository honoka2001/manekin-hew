Rails.application.routes.draw do
  resources :posts

  resources :users, only: %i[index show update] do
    resource :address
  end

  resources :items, only: %i[index create destroy]

  resources :manekins
  resources :purchases
  resources :statistics, only: %i[index]

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/login', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
end
