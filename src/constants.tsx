

export const COMMON_TYPES = ["categories", "cities", "cuisines", "establishments", "geocode"] as const
export const LOCATION_TYPES = ["location_details", "locations"] as const
export const RESTAURANT_TYPES = ["dailymenu", "restaurant", "reviews", "search" ] as const




type commonNames  = typeof COMMON_TYPES
export type TCommon  = commonNames[number]

type locationNames  = typeof LOCATION_TYPES
export type TLocation  = locationNames[number]

type restaurtantNames  = typeof RESTAURANT_TYPES
export type TRestaurant  = restaurtantNames[number]


export const API_KEY = "533f6268b24ecccc3d78e6cb5cb5344f"
export const BASE_URL = "https://rickandmortyapi.com/api/"


export const characters = `${BASE_URL}character/` // get all characters


