# Usar una imagen base de Node
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración del proyecto y instalar dependencias
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon  # Instalar nodemon globalmente si es necesario

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que utiliza tu aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["nodemon", "index.js"]