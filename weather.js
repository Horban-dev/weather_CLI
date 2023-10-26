import { getArgs } from "./helpers/args.js"
import { printHelp, printSucces, printError } from "./services/log.services.js"
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
    try {
       await  saveKeyValue('token', token)
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
        
    }
   
}
initCli()