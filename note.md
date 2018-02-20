docker build -t iamge/tag .

docker run -p 3500:3500 -d xz/node-dev

docker run -it --entrypoint=/bin/sh iamge/tag

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)
