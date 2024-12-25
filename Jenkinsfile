pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'file:///D:/New%20folder%20233/Project/Healthcare'
            }
        }
        stage('Build') {
            steps {
                bat 'docker-compose build'
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
        }
    }
}
