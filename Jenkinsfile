def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'
]

pipeline{
    agent any

    environment {
        BUILD_USER = ''
    }

    tools { nodejs "NodeJS" }

    parameters{
        choice(name: "FROMCITY", choices: ['Mar del Plata', 'Buenos Aires', 'Vidal', 'Piran', 'Dolores'])
        choice(name: "TOCITY", choices: ['Buenos Aires', 'Mar del Plata', 'Vidal', 'Piran', 'Dolores'])
        string(name: "FROMDATE", defaultValue: "27/07/2022", description: "DD/MM/YYYY.")
        choice(name: "ADULTS", choices: ['1', '2', '3', '4', '5', '6', '7', '8'])
    }

    options {
        ansiColor('xterm')
    }

    stages{
        stage('Searching'){
            steps{
                sh "npm i"
                sh "npm run cy:run:chrome -- --env fromCity='${FROMCITY}',toCity='${TOCITY}',fromDate='${FROMDATE}',adults='${ADULTS}'"
            }
        }
    }

    post{

        success{
            slackSend   channel: 'encontrar-pasajes-de-tren-disponibles',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "Hay pasajes disponibles para el dia ${FROMDATE}!"
        }
/*         failure{
            script{
                BUILD_USER = getBuildUser()
            }

            slackSend   channel: 'encontrar-pasajes-de-tren-disponibles',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "No hay pasajes disponibles para el dia buscado!"
        } */
    }

}