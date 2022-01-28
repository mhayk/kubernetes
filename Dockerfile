FROM node:17-alpine
COPY . .
CMD ["node", "server.js"]
