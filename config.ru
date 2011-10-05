require 'rubygems'
require 'bundler/setup'
require 'haml'
require 'sass'

Bundler.require(:default)

require 'nesta/env'
Nesta::Env.root = ::File.expand_path('.', ::File.dirname(__FILE__))

require 'nesta/app'
run Nesta::App
