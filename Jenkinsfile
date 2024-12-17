pipeline {
    agent any

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
                bat 'docker login -u fatimamalik1 -p 5e4ZzPFmupQxsJfj'
                bat 'docker push fatimamalik1/health-app:latest'
            }
        }

        stage('Deploy') {
            steps {
                bat """
                docker stop health-app || true
                docker rm health-app || true
                docker rmi fatimamalik1/health-app:latest || true
                docker pull fatimamalik1/health-app:latest
                docker run --name health-app -p 3000:3000 fatimamalik1/health-app:latest
                """
            }
        }
    }
}