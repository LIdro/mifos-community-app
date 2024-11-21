FROM timbru31/ruby-node:2.7 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install specific versions of gems to ensure compatibility
RUN gem install compass -v 1.0.3
RUN gem install sass -v 3.4.25
RUN gem install chunky_png -v 1.4.0
RUN gem install rb-fsevent -v 0.11.2
RUN gem install ffi -v 1.15.5

COPY package.json /usr/src/app/package.json
RUN npm install -g bower
RUN npm install -g grunt-cli
COPY . /usr/src/app
RUN bower --allow-root install
RUN npm install
RUN bundle install --jobs 4 --retry 3
RUN grunt prod --force

FROM nginx:1.19.3
COPY --from=builder /usr/src/app/dist/community-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
