pipeline {
    agent any


    stages {
         stage('Install & Build') {
            agent {
                docker {
                    image 'node:18-alpine'     
                    args  '-v $HOME/.npm:/home/node/.npm'  
                }
            }
            steps {
                sh 'npm ci'                    
                sh 'npm run build'
            }
        }

        stage('Deploy (local compose build)') {
            agent { label 'docker' }           
            steps {
                sh 'docker compose up -d --build customer'
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
