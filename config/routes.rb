Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :posts
  get "/latest", to: "posts#latest"
  post "rails/active_storage/direct_uploads", to: 'direct_uploads#create'
end
