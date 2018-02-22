docker build -t template:tag .

docker run -p 3500:3500 -d xz/node-dev

docker run -p 3000-3001:3000-3001 -it --entrypoint=/bin/sh template:tag

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

# Volumes
Windows Command
-v %cd%:/var/app

Windows Powershell
-v ${PWD}:/var/app


