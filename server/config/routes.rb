Rails.application.routes.draw do
  namespace :api do
    resources :articles
  end
  namespace :api do
    resources :projects
  end
  namespace :api do
    resources :users
  end
  namespace :api do
    resources :searches
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
