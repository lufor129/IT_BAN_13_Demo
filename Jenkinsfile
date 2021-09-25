pipeline{
  agent {
    label "jenkins_agent1"
  }

  stages{
    stage("Building") {
      steps {
        echo "Delete the container"
        sh "docker rm -f run_mynode run_myweb"

        echo "Building App"
        sh "cd ./app && docker build -t mynode:latest ."
        sh "docker run -d -p 3000:3000 --name run_mynode --link my_postgres:my_postgres mynode:latest"

        echo "Building FrontEnd"
        sh "cd ./html && docker build -t myweb:latest ."
        sh "docker run -d -p 8085:80 --name run_myweb --link run_mynode:run_mynode myweb:latest"
      }
    }

    stage("Test"){
      steps{
        echo "Testing begin testing"
        sh "pwd"
      }
    }

    stage("Deploy"){
      steps{
        echo "deploy begin"
      }
    }
  }

  post {
    failure {
      echo "No!! it fail"
    }
    success {
      echo "Yes!! it work"
    }
  }
}