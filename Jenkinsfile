pipeline {
    agent { docker { image 'microsoft/dotnet:nanoserver' } }
    stages {
        stage('build') {
            steps {
                powershell 'echo "All built!"'
            }
        }
    }
}