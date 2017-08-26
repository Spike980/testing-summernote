require 'carrierwave'
require 'carrierwave/orm/activerecord'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
