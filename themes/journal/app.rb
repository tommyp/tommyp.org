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
    
    set :haml, :format => :html5

    helpers do
      
      def body_class
        return "class='404'" if @page.nil?
        return "class='homepage'" if @page.path == ""
        return "class='work'" if @page.path =~ %r{work/$}
        return "class='info'" if @page.path =~ %r{info/$}
        return "class='contact'" if @page.path =~ %r{contact/$}
      end
      
      def previous_post
        articles = Nesta::Page.find_articles
        i = articles.index(@page)

        p = i != articles.count-1 ? articles[i+1] : nil
        haml "%a{:href=>'#{p.abspath}'}(data-icon='[') 
                %span Previous" if p
      end

      def next_post
        articles = Nesta::Page.find_articles
        i = articles.index(@page)

        n = i != 0 ? articles[i-1] : nil
        haml "%a{:href=>'#{n.abspath}'}(data-icon=']') 
                %span Next" if n
      end
    end
    
    get '/css/:sheet.css' do
          content_type 'text/css', :charset => 'utf-8'
          cache scss(params[:sheet].to_sym)
    end
    
    get '/feed' do
      content_type :xml, :charset => 'utf-8'
      set_from_config(:title, :subtitle)
      @articles = Page.find_articles.select { |a| a.date }[0..9]
      cache haml(:rss2, :format => :xhtml, :layout => false)
    end
    
    not_found do
      set_common_variables
      @heading = @title
      @page = Nesta::Page.find_by_path('not_found')
      @title = @page.title
      set_from_page(:description, :keywords)
      cache haml(@page.template, :layout => @page.layout)
    end
        
  end
end
