pipeline{
  agent any

  stages{
    stage("Building") {
      steps {
        echo "Building DB"
        sh 'docker run -d --name my_postgres -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v pdata:/var/lib/postgresql/data -p 5432:5432 postgres'
        
        echo "Building App"
        sh "cd ./app && docker build -t mynode:latest ."
        sh "docker run -d -p 4200:3000 --link my_postgres:my_postgres --name run_mynode mynode:latest"

        echo "Building FrontEnd"
        sh "cd ./html && docker build -t myweb:latest ."
        sh "docker run -d -p 8085:80 --link run_mynode:run_mynode --name run_myweb myweb:latest"
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