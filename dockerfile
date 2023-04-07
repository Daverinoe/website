FROM node:16-alpine

WORKDIR /website
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]