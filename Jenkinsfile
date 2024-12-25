pipeline{
      agent any        //agent is machine where we run our pipeline
      stages {
            stage('checkout'){
                  steps{
                        git branch: 'main', uri: 'file:///D:/New%20folder%20233/Project/Healthcare' 
                  }
            }
            stage('Build'){
                  steps{
                        bat 'docker-compose build'
                  }
            }
      }
}