pipeline {
    agent any
    environment{
      SSH_KEY_PATH='C:\\Users\\PC\\Downloads\\cicd-key.pem'
      SSH_USER='ec2-user'
      SSH_HOST='3.95.226.166'
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
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat 'echo %DOCKER_PASS%| docker login -u %DOCKER_USER% --password-stdin'
                    bat 'docker push fatimamalik1/healthapp:latest'
            }
        }
        stage('Deploy'){
            steps{
                bat """
                ssh -i ${SSH_KEY_PATH} -o StrictHostChecking=no ${SSH_USER}@${SSH_HOST}
                """
            }
        }
        }
    }
}
