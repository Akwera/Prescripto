pipeline {
    agent any

    environment {
        REGISTRY = 'your-dockerhub-username'
        IMAGE_NAME = 'prescripto'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Akwera/Prescripto.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                // Example: Run a build command like npm install, mvn package, etc.
                sh './build.sh' 
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
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
