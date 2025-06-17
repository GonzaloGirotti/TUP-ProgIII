# Descarga e instalacion de la aplicacion

## 1. Descarga la aplicacion
Clona el repositorio de la aplicacion desde GitHub usando el siguiente comando desde la terminal:

    git clone https://github.com/GonzaloGirotti/TUP-ProgIII}

## 2. Navega al directorio del proyecto

    cd TUP-ProgIII
    cd Practico4

## 3. Instala las dependencias en el root y en el directorio frontend
Para instalar las dependencias del proyecto, primero asegúrate de estar en el directorio raíz del proyecto y luego ejecuta:

    npm install

Luego, navega al directorio `frontend` y ejecuta nuevamente el comando:

    cd frontend
    npm install

## 4. Cambia la extension del .env.template a .env e inicializa la aplicacion

    .env.template --> .env (en el editor vscode)

    npm start (en la terminal)

Esto ultimo, además de iniciar la app, creará el archivo de base de datos sqlite.

## 5. Cierra la aplicacion

Para cerrar la aplicacion, presiona `Ctrl + C` en la terminal donde se está ejecutando.

## 6. Inserta los datos de prueba

    npm run db:seed

## 7. Inicia nuevamente la aplicacion

    npm start

## Listo! Ahora puedes acceder a la aplicación en tu navegador web en `http://localhost:3000`.

