pipeline{
  agent any

  stages{
    stage("Building") {
      steps {
        echo "Building App"
        sh "cd ./app && docker build -t mynode:latest ."

        echo "Building FrontEnd"
        sh "cd ./html && docker build -t myweb:latest ."
      }
    }

    stage("Test"){
      steps{
        echo "Testing begin"
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