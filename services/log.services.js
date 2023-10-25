import chalk from 'chalk'
import dedent from 'dedent-js'
export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + '' + error)
}

export const printSucces = (success) => {
    console.log(chalk.bgGreen(' SUCCESS ') + '' + success)
}
export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan (' HELP ')}
        -s [CITY] for change city
        -h for help menu
        -t [API_KEY] for saving token
        `
    )
}