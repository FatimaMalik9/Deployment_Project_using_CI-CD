pipeline {
    agent any
    environment {
        SSH_KEY_PATH = 'D:\\cicd-key.pem'  // SSH Key path is correct
        SSH_USER = 'ec2-user'              // SSH user for the remote server
        SSH_HOST = '3.95.226.166'          // SSH host IP address
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'file:///D:/New%20folder%20233/Project/Healthcare'
            }
        }
        stage('Build') {
            steps {
                bat 'docker-compose build --no-cache'
            }
        }
        stage('Tag image') {
            steps {
                bat 'docker tag health-app fatimamalik1/healthapp:latest'
            }
        }
        stage('Push Image') {
            steps {
                
                    bat "docker login -u fatimamalik1 -p fatima2939"
                    bat 'docker push fatimamalik1/healthapp:latest'
             }
        }
        
        stage('Deploy') {
            steps {
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} ^ 
                docker stop health-app || true
                docker rm health-app || true
                docker rmi fatimamalik1/healthapp:latest || true
                docker pull fatimamalik1/healthapp:latest
                docker run --name health-app -p 3000:3000 fatimamalik1/healthapp:latest
                """
            }
        }
    }
}





































/*pipeline {
    agent any
    environment {
        SSH_KEY_PATH = 'D:\\cicd-key.pem'
        SSH_USER = 'ec2-user'
        SSH_HOST = '3.95.226.166'
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'file:///D:/New%20folder%20233/Project/Healthcare'
            }
        }
        stage('Build') {
            steps {
                bat 'docker-compose build --no-cache'
            }
        }
        stage('Tag image') {
            steps {
                bat 'docker tag health-app fatimamalik1/healthapp:latest'
            }
        }
        stage('Push Image') {
            steps {
                bat "echo fatima2939 | docker login -u fatimamalik1 --password-stdin"
                bat 'docker push fatimamalik1/healthapp:latest'
            }
        }
        stage('Deploy') {
            steps {
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} ^
                docker stop health-app || true && docker rm health-app || true && docker rmi fatimamalik1/healthapp:latest && docker pull fatimamalik1/healthapp:latest && docker run --name health-app -p 3000:3000 fatimamalik1/healthapp:latest
                """
            }
        }
    }
}*/
