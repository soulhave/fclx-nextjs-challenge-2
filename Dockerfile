FROM node:19-slim

WORKDIR "/home/node/app"

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000

EXPOSE $PORT
RUN npx prisma generate

CMD ["npm", "run", "dev"]