## Deployment of Healthcare App (Project) using CI/CD 🚀

# Description

The Deployment Project using CI/CD automates the deployment of the Healthcare App using Docker, Jenkins, and GitHub Actions. This project integrates Continuous Integration and Continuous Deployment (CI/CD) pipelines for smooth and automated deployment processes.

# Features

✅ Automated Build & Deployment using Jenkins
✅ Dockerized Application with Docker Compose
✅ Version Control via GitHub
✅ Continuous Integration with Jenkinsfile
✅ Efficient Container Orchestration
✅ Scalability & Reliability

# Technologies Used

Backend: Node.js, Express.js

Database: MongoDB, Mongodb atlas

Containerization: Docker & Docker Compose

CI/CD Pipeline: Jenkins, GitHub Actions

Version Control: Git & GitHub

# Installation Dependencies & Setup
npm init -y
npm i express
npm i mongoose
Docker, jenkins, Node, 

# Clone the Repository
git clone [https://github.com/FatimaMalik9/Deployment_Project_using_CI-CD.git  

# Set Up Environment Variables
Run the Application using Docker
docker-compose up --build
Access the Application
The application will be running at:📌 http://localhost:3000

# CI/CD Pipeline Setup
Jenkins Configuration
Install Jenkins and required plugins (Docker, GitHub, Pipeline).
Set up a new pipeline and connect it with this GitHub repository.
I did deployment stages in Jenkinsfile.

# Docker Setup

The Dockerfile contains instructions to build a containerized Node.js application.
The docker-compose.yml manages multi-container deployment.
Dockerfile contains all the steps which docker would done after when we dockerize the application using command.


# Deployment
Once Jenkins is set up, every push to the repository will trigger:
✅ Checkout → 
✅ Build → 
✅ Trigger 
✅ Push → 

# To deploy manually, run:
To build docker image
docker compose up --build

# Create account on docker hub

# On cmd:
docker login
it will prompt for docker hub username and password 

#Ttag your image(this i write for general)
docker tag <app name> <your docker hub username>/<app name>:latest
docker push <your docker hub username>/<app name>:latest


# Create an EC2 instance(Amazon Linux)
in the security group, add inbound rule for port 3000(Custom TCP)

# For mongodb we are using mongodb atlas.
in atlas go to network access and add the public IP of your EC2 instance as allowed IP

# Connect to your EC2 instance
install docker on that instance using these
Commands:
sudo su -
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker


# Now pull the image from docker hub
docker pull username/<app name>:latest

docker run --name <app name> -p 3000:3000 username/<app name>:latest

# Public IP for EC2 instance
Application would be accessible at
<our-ec2-public-ip>:3000
