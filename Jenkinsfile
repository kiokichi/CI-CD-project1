pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/kiokichi/CI-CD-project1.git'
            }
        }

        stage('Check Docker') {
            steps {
                sh 'which docker'
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myimage .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f mycontainer || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 80:80 --name mycontainer myimage'
            }
        }
    }
}
