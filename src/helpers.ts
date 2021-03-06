import axios from 'axios'
import queryString from 'query-string'
import { BASE_URL, characters, episodes } from './constants'
import { IFilterCharacter, IFilterEpisode} from '@interfaces'

axios.defaults.baseURL = BASE_URL



export const getCharacters = () => {
    let promise = new Promise((resolve, reject) => {
        axios.get(characters).then(res => {
            resolve(res)
        })
    })
    return promise
}

export const getEpisodes = () => {
    // console.log(episodes)
    let promise = new Promise((resolve, reject) => {
        axios.get(episodes).then(res => {
            resolve(res)
        })
    })
    return promise
}

export const getCharacter = (id: string) => {

    let promise = new Promise((resolve, reject) => {
        axios.get(`${characters}${id}`).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
    return promise
}
export const getEpisode = (id: string) => {

    let promise = new Promise((resolve, reject) => {
        axios.get(`${episodes}${id}`).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
    return promise
}
export const filterCharacters = (data: IFilterCharacter) => {
    const query = queryString.stringify(data)
    let promise = new Promise((resolve, reject) => {
        axios.get(`${characters}?${query}`).then((res) => {
            resolve(res)
        }).catch(error => reject(error))
    })
    return promise
}
export const filterEpisodes = (data: IFilterEpisode) => {
    const query = queryString.stringify(data)
    let promise = new Promise((resolve, reject) => {
        axios.get(`${episodes}?${query}`).then((res) => {
            resolve(res)
        }).catch(error => reject(error))
    })
    return promise
}

const getQueryEpisodes = (data: string[] = []) : string =>{

    let str = data.reduce((acum,  curr ) =>{
        return acum + "," + curr.split('/')[5]
    })
    return str
}
export const getSetEpisodes = (data: string[] = []) => 
{
    const eps = getQueryEpisodes(data)
    let promise = new Promise((resolve, reject) => {
        axios.get(eps).then(res => {
            resolve(res)
        })
    })
    return promise
}
export const getSetCharacters = (data: string[] = []) => 
{
    const eps = getQueryEpisodes(data)
    let promise = new Promise((resolve, reject) => {
        axios.get(eps).then(res => {
            resolve(res)
        })
    })
    return promise
}