import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {CharacterSearch, CharacterCard, InformationSearch} from '@molecules'
import { IinfoReqCharacter, ICharacter } from '@interfaces'
import {} from '@helpers'

const WraperHeader = styled.div`
    display: flex;
`

const Character = () =>{
    const [characters, setCharacters] = useState<ICharacter[]>()
    const [info, setInfo] = useState<IinfoReqCharacter>()
    useEffect(() => {
        // getCharacters().then((res: any) => {

        //     const characterList = res.data.results
        //     const info: IinfoReqCharacter = res.data.info
        //     setInfo(info)
        //     setCharacters(characterList)
        // })
    }, [])
    return (
        <>
        <WraperHeader>



        </WraperHeader>       
        </>
    )

} 