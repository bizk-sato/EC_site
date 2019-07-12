FROM ruby:2.5.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /p_julia
WORKDIR /p_julia
COPY Gemfile /p_julia/Gemfile
COPY Gemfile.lock /p_julia/Gemfile.lock
RUN bundle install
COPY . /p_julia

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
