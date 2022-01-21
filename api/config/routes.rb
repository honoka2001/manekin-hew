Rails.application.routes.draw do
  resources :posts
  resources :items, only: %i[index create destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  post '/signup', to: 'registrations#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/logged_in', to: 'sessions#logged_in?'
end
