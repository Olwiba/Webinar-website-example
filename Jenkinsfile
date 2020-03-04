pipeline {
    agent { docker { image 'node:8.16.2' } }
    stages {
        stage('build') {
            steps {
                bat 'npm install'
                bat 'grunt'
            }
        }
    }
}