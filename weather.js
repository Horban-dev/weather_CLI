import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/log.services.js"


const initCli = () => {
    const args = getArgs(process.argv)

    if(args.h) {
       printHelp()
    }
    if(args.k) {
    } else {
    }
   
}
initCli()