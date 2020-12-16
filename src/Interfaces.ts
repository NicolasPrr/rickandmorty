
export interface IRoute {
    path: string,
    name: string,
 
    Component?: React.ReactNode | null
}

export type  Tstatus  = "Alive" | "Dead"| "unknown"
export type  Tgender  = "Female" | "Male" | "Genderless" | "unknown"


export interface IFilterCharacter extends Record<string, any> {
    name?: string,
    status?: Tstatus,
    type?: string,
    gender?: Tgender
}
export interface IFilterEpisode extends Record<string, any> {
    name?: string,
    code?: string,
}


export interface ICharacter {
    created: string,
    id: number,
    episode: string[],
    gender: Tgender,
    image: string,
    location: Ilocation,
    name: string,
    origin: Ilocation,
    species: string,
    status: Tstatus,
    type: string,
    url: string,

}
export interface Ilocation {
    name: string,
    url: string,
}
export interface IinfoReq {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
}
export interface IResultFilter {
    results: ICharacter[],
    info: IinfoReq    
}
export interface IfilterCharacters {
    name?: string,
    status?: Tstatus,
    species?: string,
    type?: string ,
    gender?:Tgender,
}

export interface IEpisode {
    air_date: string,
    characters: string[],
    name: string,
    episode: string,
    id: number,
}