<h1>Project Description</h1>
This project utilizes a node.js and express web application to demonstrate the understanding of docker images and containers.<br>
<h2>Project Dependencies</h2>
A list of the required application dependencies that have been bundled together with the application is available in the package.json file, and it includes the express web framework for node.js together with its specified version/s.<br>
<h2>Project Setup Instructions</h2>
1. Install the docker engine locally.<br><br>
2. Create or log in to an existing docker hub account by running the <b>docker login</b> command on your CLI.<br><br>
3. Open docker hub on https://hub.docker.com/ and search for the <b>michaeloduor50/node-app</b> repository, or use the following link to access the repository: https://hub.docker.com/repository/docker/michaeloduor50/node-app/general<br><br>
4. A docker pull command will be provided upon selecting the node-app repository with the specified docker image tag/version i.e. <b>michaeloduor50/node-app:1.1.RELEASE</b> <br><br>
5. With docker installed, paste and run the <b>docker pull michaeloduor50/node-app:1.1.RELEASE</b> command from docker hub in your client terminal. This will pull the specified docker image version to your PC. <br><br>
6. Create a docker container using the pulled docker image by running the following command: <b>docker run -d --name node-application -p 3000:3000 michaeloduor50/node-app:1.1.RELEASE</b> <br><br> 
7. Ensure that your container is running as intended by checking the container logs using the command <b>docker logs michaeloduor50/node-app:1.1.RELEASE</b> <br><br>
8. Finally, navigate to http://localhost:3000 to access the web page data on your PC as the containerized application is configured to listen to localhost port 3000.<br>
<h2>Task Two</h2>
1. Open docker hub on https://hub.docker.com/ and search for the <b>michaeloduor50/nginx-app</b> repository, or use the following link to access the repository: https://hub.docker.com/repository/docker/michaeloduor50/nginx-app/general<br><br>
2. A docker pull command will be provided upon selecting the node-app repository with the specified docker image tag/version i.e. <b>michaeloduor50/nginx-app:1.1</b> <br><br>
3. With docker installed, paste and run the <b>docker pull michaeloduor50/nginx-app:1.1</b> command from docker hub in your client terminal. This will pull the specified docker image version to your PC. <br><br>
4. Create a docker container using the pulled docker image by running the following command: <b>docker run -d -p 9000:80 -p 9001:443 <your build name of choice></b> <br><br> 
5. Finally, access the served page through ports: http://localhost:9000/ and https://localhost:9001/
