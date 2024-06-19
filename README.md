DESPLEGANDO LA PAGINA WEB UTILIZANDO DOCKER



git clone https://github.com/Cayo322/planta_piloto_tecsupV2.git

cd planta

docker build -t planta-piloto-app .

docker run -it --rm -p 3000:3000 --name planta-piloto-cont planta-piloto-app