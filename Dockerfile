FROM keymetrics/pm2:12-alpine

# Bundle APP files
COPY . .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
RUN npm run build 

CMD [ "pm2-runtime", "start", "pm2.json", "--env", "production"]