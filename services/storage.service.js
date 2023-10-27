import {homedir} from 'os'
import {join} from 'path'
import {promises} from 'fs'

const joinPath = join(homedir(), './weather-data.json')

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
}

const saveKeyValue = async (key, value) => {
   let data = {}
   if( await isExist(joinPath)) {
    const file = await promises.readFile(joinPath)
    data = JSON.parse(file)
   }
   data[key] = value
   await promises.writeFile(joinPath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if( await isExist(joinPath)) {
        const file = await promises.readFile(joinPath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined 
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (e) {
        return false
    }
}

export {saveKeyValue, getKeyValue, TOKEN_DICTIONARY}