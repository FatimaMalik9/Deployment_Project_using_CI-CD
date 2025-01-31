pipeline{
      agent any        //agent is machine where we run our pipeline
      stages {
            stage('checkout'){
                  steps{
                        git branch: 'main', url: 'file:///D:/New%20folder%20233/Project/Deploy_Health_App' 
                  }
            }
            stage('Build'){
                  steps{
                        bat 'docker-compose build'
                  }git rebase --continue

            }
            stage('Tag image'){
                  steps{
                        bat 'docker tag health-app fatimamalik/healthapp:latest'
                  }
            }
            stage('Push image'){
                  steps{
                        bat 'docker login -u fatimamalik1 fatima460417'
                        bat 'docker push fatimamalik/healthapp:latest'
                  }
            }
      }
}