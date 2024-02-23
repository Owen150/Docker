<h1>Program Description</h1>
This project uses a static node.js webpage to demonstrate docker images and containers.<br>
<h2>Program Setup Instructions</h2>
1. Install the docker engine locally and initiate a docker hub account that you will use to create your pull requests.<br>
2. Go to docker hub and search for michaeloduor50/node-app<br>
3. A docker pull command will be provided upon clicking <a>michaeloduor50/node-app</a><br>
4. With docker installed, paste the docker pull michaeloduor50/node-app:1:0 command into your docker client terminal.<br>
5. Create a docker container with the pulled docker image using the command docker run -d -p 30000:3000 node-app:1:0. <br> 
6. Ensure your container is running by checking the logs using docker logs node-app:1.0<br>
7. Navigate to localhost:3000 to access your web page data.
