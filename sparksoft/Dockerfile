# Step 1

FROM node as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
# Stage 2

FROM nginx
COPY --from=build-step /app/build /usr/share/nginx/html