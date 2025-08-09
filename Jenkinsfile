pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                dir('C:\\Users\\admin\\Desktop\\PlayWrightMe') {
                    bat 'npm ci'
                }
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                dir('C:\\Users\\admin\\Desktop\\PlayWrightMe') {
                    bat 'npx playwright install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('C:\\Users\\admin\\Desktop\\PlayWrightMe') {
                    bat 'npx playwright test'
                }
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
    }
}
