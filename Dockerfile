
FROM nginx
COPY . /usr/share/nginx/html

FROM nginx:latest
COPY . /usr/share/nginx/html
