def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline{
    agent any

    environment {
        BUILD_USER = ''
    }

    tools { nodejs "NodeJS" }

    parameters{
        choice(name: "FROMCITY", choices: ['Mar del Plata', 'Buenos Aires', 'Vidal', 'Piran', 'Dolores'], description: "From City...")
        choice(name: "TOCITY", choices: ['Mar del Plata', 'Buenos Aires', 'Vidal', 'Piran', 'Dolores'], description: "To City...")
        string(name: "FROMDATE", defaultValue: "27/07/2022", description: "DD/MM/YYYY.")
        choice(name: "ADULTS", choices: ['1', '2', '3', '4', '5', '6', '7', '8'], description: "Adults...")
    }

    options {
        ansiColor('xterm')
    }

    stages{
        stage('Searching'){
            steps{
                sh "npm i"
                sh "npm run cy:run:chrome -- --env fromCity=`${FROMCITY}`,toCity=`${TOCITY}`,fromDate=`${FROMDATE}`,adults=`${ADULTS}`"
            }
        }
    }

    post{
        success{
            script{
                BUILD_USER = getBuildUser()
            }

            slackSend   channel: 'encontrar-pasajes-de-tren-disponibles',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "Hay pasajes disponibles para el dia buscado!"
        }
        failure{
            script{
                BUILD_USER = getBuildUser()
            }

            slackSend   channel: 'encontrar-pasajes-de-tren-disponibles',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "Hay pasajes disponibles para el dia buscado!"
        }
    }

}