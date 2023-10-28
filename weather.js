import { getArgs } from "./helpers/args.js"
import  {getIcon, getWeather}  from "./services/api.service.js"
import { printHelp, printSucces, printError, printWeather } from "./services/log.service.js"
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"


const saveToken = async (token) => {
    if(!token.length) {
        printError('Token failed')
        return;
    }
    try {
       await  saveKeyValue(TOKEN_DICTIONARY.token, token)
       printSucces('Token saved')
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    if(!city.length) {
        printError('City failed')
        return;
    }
    try {
       await  saveKeyValue(TOKEN_DICTIONARY.city, city)
       printSucces('City saved')
    } catch (e) {
        printError(e.message)
    }
}

const getForecast = async () => {
    try {
        const city =  process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city)
        printWeather(weather, getIcon(weather.weather[0].icon))
    } catch (e) {
        if(e?.response?.status == 404) {
            printError('Error at city name')
        } else if(e?.response?.status == 401) {
            printError('Token error')
        } else {
            printError(e.message)
        }
    }
}


const initCli = () => {
    const args = getArgs(process.argv)

    if(args.h) {
       return printHelp()
    }
    if(args.c) {
        return saveCity(args.c)
    } 
    if(args.t) {
       return saveToken(args.t)
    }
    else {
       return  getForecast()
    }
}
initCli()