import axios from 'axios'
import queryString from  'query-string'
import {BASE_URL, characters} from './constants'
import { IFilterCharacter, IResultFilterCharacter} from '@interfaces'

axios.defaults.baseURL = BASE_URL



export const getCharacters = () =>{
    let promise = new Promise((resolve, reject) =>{
        axios.get(characters).then(res =>{
            resolve(res)
        })
    })
    return promise
}
export const filterCharacters = (data: IFilterCharacter) =>{
    const query = queryString.stringify(data)
    let promise = new Promise((resolve, reject) =>{
        axios.get(`${characters}?${query}`).then((res) =>{
            resolve(res)
        }).catch( error => reject(error))
    })
    return promise
}