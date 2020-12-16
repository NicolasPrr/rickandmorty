
export interface IRoute {
    path: string,
    name: string,
 
    Component?: React.ReactNode | null
}

export type  Tstatus  = "Alive" | "Dead"| "unknown"
export type  Tgender  = "Female" | "Male" | "Genderless" | "unkown"

export interface ICharacter {
    created: string,
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
export interface IinfoReqCharacter {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
}
export interface IfilterCharacters {
    name?: string,
    status?: Tstatus,
    species?: string,
    type?: string ,
    gender?:Tgender,
}