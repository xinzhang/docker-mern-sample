#### commands
docker build -t template:tag .

docker run -p 3500:3500 -d xz/node-dev

docker run -p 3000-3001:3000-3001 -it --entrypoint=/bin/sh template:tag

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

#### Volumes
Windows Command
-v %cd%:/var/app

Windows Powershell
-v ${PWD}:/var/app

####  docker-clear.bat
@echo off
FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker rm %%i
FOR /f "tokens=*" %%i IN ('docker images --format "{{.ID}}"') DO docker rmi %%i

### linux command
ps aux
tar -cvzf <file>.tar.gz /var/app/public (zip)
tar -xzf <file>.tar.gz (unzip)
