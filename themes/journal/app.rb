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
      def previous_post
        articles = Nesta::Page.find_articles
        i = articles.index(@page)

        p = i != articles.count-1 ? articles[i+1] : nil
        haml "%a{:href=>'#{p.abspath}'} Previous" if p
      end

      def next_post
        articles = Nesta::Page.find_articles
        i = articles.index(@page)

        n = i != 0 ? articles[i-1] : nil
        haml "%a{:href=>'#{n.abspath}'} Next" if n
      end
    end

    get '/css/:sheet.css' do
          content_type 'text/css', :charset => 'utf-8'
          cache scss(params[:sheet].to_sym)
    end
    
  end
end
