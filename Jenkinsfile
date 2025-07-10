pipeline {
    agent any


    stages {
        stage('Who am I?') {
            steps {
                sh 'echo "Running as $(id -un) (uid=$(id -u)) inside $(hostname)"'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy (local compose build)') {
            steps {
                script {
                    sh '''
                        set -e
                        APP_DIR=/srv/family-new/family-network-foundation-customer
                        STACK_DIR=/srv/family-new

                        mkdir -p $APP_DIR          # Create directory if it doesn't exist
                        rm -rf $APP_DIR/*
                        cp -R $WORKSPACE/* $APP_DIR/

                        cd $STACK_DIR
                        docker compose up -d --build --force-recreate customer
                    '''
                }
            }
        }
    }

    post {
        success { echo '✅  Build & Deploy (no-DockerHub) successful' }
        failure { echo '❌  Pipeline failed - check logs for details' }
    }
}
