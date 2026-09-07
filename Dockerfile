# Imagem base leve do Nginx
FROM nginx:alpine

# Copia os arquivos estáticos do jogo para o diretório padrão do Nginx
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY gameLogic.js /usr/share/nginx/html/gameLogic.js

# Expõe a porta 80 do container
EXPOSE 80

# Inicia o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]