FROM node:20.10-bookworm-slim as base
WORKDIR /app

FROM base as deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base as builder
WORKDIR /app
ENV NODE_ENV production 
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:stable-alpine as runner
WORKDIR /app
ENV NODE_ENV production 
RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist ./

EXPOSE 80
CMD ["nginx"]
