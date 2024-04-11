# Use una imagen de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del backend al directorio de trabajo del contenedor
COPY ./backend .

# Instala las dependencias de tu aplicación
RUN npm install

# Ejecuta el comando de construcción personalizado
RUN ./backend npm run build

# Expone el puerto en el que corre tu aplicación (si es necesario)
EXPOSE 3000

# Comando para iniciar tu aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]