docker build -t sca/radio-web:1.0 .

docker run -p 3500:3500 -d xz/node-dev

docker run -p 3000:3000 -it --entrypoint=/bin/sh sca/radio-web:1.0

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)
