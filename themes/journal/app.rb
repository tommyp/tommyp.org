# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

module Nesta
  class App
    # Uncomment the Rack::Static line below if your theme has assets
    # (i.e images or JavaScript).
    #
    # Put your assets in themes/journal/public/journal.
    #
    use Rack::Static, :urls => ["/journal"], :root => "themes/journal/public"

    helpers do

    end

    get '/css/:sheet.css' do
          content_type 'text/css', :charset => 'utf-8'
          cache scss(params[:sheet].to_sym)
    end
    
  end
end
