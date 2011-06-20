require 'rubygems'
require 'bundler/setup'
require 'haml'
require 'sass'

Bundler.require(:default)

require 'nesta/app'

Nesta::App.root = ::File.expand_path('.', ::File.dirname(__FILE__))

require File.expand_path('models/contact_form', Nesta::App.root)

run Nesta::App
