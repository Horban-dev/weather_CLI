import { getArgs } from "./helpers/args.js"
import  {getWeather}  from "./services/api.service.js"
import { printHelp, printSucces, printError } from "./services/log.service.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"


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

const initCli = () => {
    const args = getArgs(process.argv)

    if(args.h) {
       printHelp()
    }
    if(args.k) {

    } 
    if(args.t) {
       return saveToken(args.t)
    }
    else {
        getWeather('Киев')
    }
   
}
initCli()