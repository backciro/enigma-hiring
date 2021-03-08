Rails.application.routes.draw do

  root 'home#index'

  get "/enigma" => "enigma#index"
end
