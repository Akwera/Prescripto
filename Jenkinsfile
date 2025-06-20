pipeline {
    agent {
      docker {
        image 'beatrice/node-docker'
      }
  }


    environment {
        REGISTRY = 'beatrice913'
        IMAGE_NAME = 'prescripto'
        SWARM_STACK = 'prescripto'
        STACK_FILE = 'docker-compose.yml'
        TAG = "build-${BUILD_NUMBER}"


    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Akwera/Prescripto.git'
            }
        }
        stage('Verify tools') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'docker -v'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                // Example: Run a build command like npm install, mvn package, etc.
                sh './build1.sh' 
            }
        }
        stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$TAG .'
        sh 'docker tag $IMAGE_NAME:$TAG $IMAGE_NAME:latest'
      }
    }


        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'chmod +x test.sh'
                sh './test.sh'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    docker.build("${REGISTRY}/${IMAGE_NAME}")
                          .push()
                }
            }
        }
        stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
            docker push $IMAGE_NAME:$TAG
            docker push $IMAGE_NAME:latest
          '''
        }
      }

         stage('Deploy to Swarm') {
      steps {
        script {
          sh "docker stack deploy -c $STACK_FILE $SWARM_STACK"
        }
      }
    }


        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // e.g., sh './deploy.sh'
            }
        }
    }
         post {
    always {
      sh 'docker logout'
    }
  }

}
