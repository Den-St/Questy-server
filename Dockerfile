FROM node:19-alpine as builder

WORKDIR /app

COPY /*.json ./

COPY . .

RUN npm run build

FROM node:19-alpine

WORKDIR /app

COPY --from=builder /app ./

RUN npm run migration:run

EXPOSE ${API_PORT}
CMD ["npx","@nestjs/cli","start", "--watch"]
