1. Run [Docker Desktop] first

2. docker build -t algotech-r .   (On the work root folder, you can find the "Dockerfile" by "ls Dockerfile" ) //build doker

3. docker save -o /tmp/algotech-r.tar algotech-r:latest //compressing the image and saving to tmp

4. scp /tmp/algotech-r.tar root@algotech.co.nz:/tmp   //upload compress file to server 

--  ssh root@algotech.co.nz

1. docker stop algotech-r

2. docker rm algotech-r

3. docker rmi algotech-r

4. docker load -i /tmp/algotech-r.tar

5. sh /usr/local/bin/init_docker/init_algotech-r.sh