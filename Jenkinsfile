pipeline {
    agent { docker { image 'mcr.microsoft.com/windows/nanoserver:10.0.14393.1066' } }
    stages {
        stage('build') {
            steps {
                bat 'npm install'
                bat 'grunt'
            }
        }
    }
}