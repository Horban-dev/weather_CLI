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
        -c [CITY] for change city
        -h for help menu
        -t [API_KEY] for saving token
        `
    )
}
function kelvinToCelsius(kelvin) {
    var celsius = kelvin - 273.15;
    return celsius;
  }
export const printWeather = (res, icon) => {
    const temp = kelvinToCelsius(res.main.temp).toFixed(0)
	console.log(
		dedent`${chalk.bgYellow(' WEATHER ')} Weather in city ${res.name}
		${icon}  ${res.weather[0].main}
		Temperature: ${temp} (feels like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
	);
};
