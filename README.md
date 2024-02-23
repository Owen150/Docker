<h1>Program Description</h1>
dockerize_my_app program seeks to demonstrate how a simple static web page can be compiled to a docker image
<h2>Program Setup Instructions</h2>

<h2>Install docker-desktop</h2>
1. Go to docker hub and search for michaeloduor50/node-app<br>
2. A docker pull command will be provided upon clicking michaeloduor50/node-app<br>
3. With docker installed, paste the docker pull michaeloduor50/node-app:1:0 command into your docker client terminal.<br>
4. Create a docker container with the pulled docker image using the command docker run -d -p 30000:3000 node-app:1:0. <br> 
5. Ensure your container is running by checking the logs using docker logs node-app:1.0<br>
6. Navigate to localhost:3000 to access your web page data.
