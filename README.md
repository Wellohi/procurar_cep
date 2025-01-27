# 

# Criar build docker
docker build -t projetodockerfile .

# Executar docker file
docker run -p 80:80 projetodockerfile