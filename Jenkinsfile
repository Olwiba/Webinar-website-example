pipeline {
    agent { docker { image 'node:8.16.2' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'grunt'
            }
        }
    }
}