FROM node

WORKDIR /usr/src/app

RUN apt-get update && apt-get -y upgrade && apt-get install -y apt-utils apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install --no-install-recommends -y yarn

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV HOST=0.0.0.0
ENV PRISMA_SERVER='http://prisma:4466'
ENV NODE_ENV production
EXPOSE 4000

CMD [ "yarn", "start" ]
