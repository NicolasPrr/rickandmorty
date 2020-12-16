import axios from 'axios'
import {BASE_URL, characters} from './constants'

axios.defaults.baseURL = BASE_URL 
export const getCharacters = () =>{
    let promise = new Promise((resolve, reject) =>{
        axios.get(characters).then(res =>{
            console.log(res)
            resolve(res)
        })
    })
    return promise
}