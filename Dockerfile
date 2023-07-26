FROM node:10.15.3 as base
WORKDIR /violin/
COPY . /violin
RUN npm install && npm run build

FROM node:16
COPY --from=base /violin ./
ARG SITE_ID
ARG NETLIFY_AUTH
RUN npm install netlify-cli -g
RUN netlify deploy --site $SITE_ID  --auth $NETLIFY_AUTH  --prod