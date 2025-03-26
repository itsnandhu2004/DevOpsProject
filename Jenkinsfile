pipeline {
    agent any 
    environment {
        DOCKER_HUB_USER = 'nandhini1694'
        DOCKER_HUB_PASS = 'changemee'
        IMAGE_NAME = 'nandhini1694/devopsproject'
    }
    stages {
        stage('Clone Repository') {
            steps {
              git branch: 'main', url: 'https://github.com/itsnandhu2004/DevOpsProject.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'ls -l app/'  // Verify Dockerfile is in the correct path
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }
        stage('Push Docker Image') {
            steps {
                sh 'docker login -u $DOCKER_HUB_USER -p $DOCKER_HUB_PASS'
                sh 'docker push $IMAGE_NAME:latest'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}

