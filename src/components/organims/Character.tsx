import React, { useEffect, useState } from 'react'
import { ICharacter, IEpisode } from '@interfaces'
import { getCharacter, getSetEpisodes } from '@helpers'
import { useParams } from 'react-router-dom'
import { WrapperCharacter, WrapperItems } from '@atoms'
import { CharacterCard, CharacterDescription, EpisodeCard } from '@molecules'

import { Typography, Card } from 'antd'

const Character = () => {
    const [character, setCharacter] = useState<ICharacter>()
    const [episodes, setEpisodes] = useState<IEpisode[]>([])
    const params: { id: string } = useParams()
    useEffect(() => {
        getCharacter(params.id).then((res: any) => {
            setCharacter(res.data)
        }).catch()
    }, [params.id])
    useEffect(() => {
        if (character?.episode) {
            getSetEpisodes(character?.episode).then((res: any) => {
                const data  = res.data.length? res.data : [res.data]
                setEpisodes(data)
            })

        }

    }, [character])

    return (
        <WrapperCharacter>
            {character && <CharacterCard character={character} />}
            <Card style={{ width: "90%" }}>

                <Typography.Title level={5}> {character?.name} </Typography.Title>
                {character && <CharacterDescription character={character} />}
                <Typography.Title level={5}> Episodes </Typography.Title>
                <WrapperItems>

                    {episodes?.map(ep => <EpisodeCard key={ep.id} episode={ep} />)}

                </WrapperItems>
            </Card>
        </WrapperCharacter>

    )
}
export default Character