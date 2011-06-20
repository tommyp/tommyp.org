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
    
    set :email_username, ENV['SENDGRID_USERNAME'] # ||
    set :email_password, ENV['SENDGRID_PASSWORD'] # ||
    set :email_address, "hi@tommyp.org"
    set :email_service, ENV['EMAIL_SERVICE'] || 'sendgrid.net'
    set :email_domain, ENV['SENDGRID_DOMAIN'] || 'localhost.localdomain'

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
    
    get '/contact/?' do
      set_common_variables
      @heading = @title
      @page = Nesta::Page.find_by_path('contact')
      raise Sinatra::NotFound if @page.nil?
      @title = @page.title
      set_from_page(:description, :keywords)
      @contact_form = ContactForm.new
      cache haml(@page.template, :layout => @page.layout)
    end

    post '/contact/?' do
      set_common_variables
      @heading = @title

      @contact_form = ContactForm.new(params[:contact_form])

      if @contact_form.valid?
        @contact_form.send_email('Website Contact Form')
        @contact_form.clear

        @page = Nesta::Page.find_by_path('contact')
        raise Sinatra::NotFound if @page.nil?
        @title = @page.title
        set_from_page(:description, :keywords)

        haml(@page.template, :layout => @page.layout)
      else
        @page = Nesta::Page.find_by_path('contact')
        raise Sinatra::NotFound if @page.nil?
        @title = @page.title
        set_from_page(:description, :keywords)

        haml(@page.template, :layout => @page.layout)
      end
    end
        
  end
end
