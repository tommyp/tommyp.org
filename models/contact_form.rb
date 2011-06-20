module Nesta
  class ContactForm
    attr_accessor :name, :message, :email, :errors

    def initialize(options = {})
      self.name = options[:name] unless options[:name] == nil
      self.message = options[:message] unless options[:message] == nil
      self.email = options[:email] unless options[:email] == nil

      self.errors ||= {}
    end

    def clear
      self.instance_variables.each do |v|
        self.instance_variable_set v, nil
      end
      self.errors ||= {}
    end

    def send_email(subject)
      body = <<EOM
OMFG! A website enquiry!

From: #{self.name} <#{self.email}>

Message:
#{self.message}
  
EOM
      Pony.mail(:to => 'hi@tommyp.org',
        :from => "#{self.name} <#{self.email}>",
        :subject => "#{subject} from #{self.name}",
        :body => body,
        #:via => :sendmail
        :via => :smtp, :via_options => {
         :address => 'smtp.sendgrid.net',
         :port => '25',
         :user_name => ENV['SENDGRID_USERNAME'],
         :password => ENV['SENDGRID_PASSWORD'],
         :authentication => :plain,
         :domain => ENV['SENDGRID_DOMAIN']
        }
      )
    end

    def valid?
      self.errors[:email] = "needs to be a valid email address." unless self.email =~ /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      self.errors[:email] = "is required." if self.email.nil? || self.email.strip.empty?
      self.errors[:name] = "is required." if self.name.nil? || self.name.strip.empty?
      self.errors[:message] = "is required." if self.message.nil? || self.message.strip.empty?
      self.errors.length == 0
    end
  end
end
