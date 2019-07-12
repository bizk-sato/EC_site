FROM ruby:2.5.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# yarnパッケージ管理ツールインストール
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# 最新版のnodeを入れる
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs npm && npm install n -g && n 12.0.0
RUN apt-get install -y graphviz

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
