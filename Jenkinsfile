<<<<<<< HEAD
pipeline{
      agent any        //agent is machine where we run our pipeline
      stages {
            stage('checkout'){
                  steps{
                        git branch: 'main', url: 'file:///D:/New%20folder%20233/Project/Healthcare' 
                  }
            }
            stage('Build'){
                  steps{
                        bat 'docker-compose build'
                  }
            }
      }
=======
pipeline {
    agent any

    environment{
        SSH_KEY_PATH='D:\\Health-key (1).pem'
        SSH_USER='ec2-user'
        SSH_HOST='54.147.78.251'
    }

    stages {
        stage('checkout') {
            steps {
                git url: 'https://github.com/FatimaMalik9/Health-App.git', 
                branch: 'main'
            }
        }

        stage('Build') {
            steps {
                bat 'docker-compose build --no-cache'
            }
        }

        stage('Tag Image') {
            steps {
                bat 'docker tag health-app fatimamalik1/health-app:latest'
            }
        }

        stage('Push Image') {
            steps {
                bat 'docker login -u fatimamalik1 -p fatima2939'
                bat 'docker push fatimamalik1/health-app:latest'
            }
        }

        stage('Deploy') {
            steps {
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} ^ 
                docker stop health-app || true
                docker rm health-app || true
                docker rmi fatimamalik1/health-app:latest || true
                docker pull fatimamalik1/health-app:latest
                docker run --name health-app -p 3000:3000 fatimamalik1/health-app:latest
                """
            }
        }
    }
>>>>>>> d215d02553de1d6c8caf3b2cfdffdf89c01cc78f
}