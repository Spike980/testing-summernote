Rails.application.routes.draw do
  resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/images', to: 'article_assets#create', as: 'image_post'
  delete '/images/:id', to: 'article_assets#destroy', as: 'delete_image'
end
