pipeline {
    agent any
    environment {
        SSH_KEY_PATH = 'C:\\Users\\PC\\Downloads\\cicd-key.pem'
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
        stage('Push image') {
            steps {
                bat 'docker login -u fatimamalik1 -p fatima2939'
                bat 'docker push fatimamalik1/healthapp:latest'
            }
        }
        stage('Deploy') {
            steps {
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostChecking=no ${SSH_USER}@${SSH_HOST} 'echo Deploy command here'
                """
            }
        }
    }
}
