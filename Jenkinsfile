pipeline {
    agent {
      docker {
        image 'beatrice/node-docker'
      }
  }


    environment {
        REGISTRY = 'beatrice913'
        IMAGE_NAME = 'prescripto'
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

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // e.g., sh './deploy.sh'
            }
        }
    }
}
