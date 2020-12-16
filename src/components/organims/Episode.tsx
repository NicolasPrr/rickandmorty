import React, { useEffect, useState } from 'react'
import { ICharacter, IEpisode } from '@interfaces'
import { getEpisode, getSetCharacters, } from '@helpers'
import { useParams } from 'react-router-dom'
import {  WrapperItems } from '@atoms'
import { CharacterCard } from '@molecules'

import { Typography, Card } from 'antd'
import EpisodeDescription from 'components/molecules/EpisodeDescription'

const Episode = () => {
    const [episode, setEpisode] = useState<IEpisode>()
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const params: { id: string } = useParams()
    useEffect(() => {
        getEpisode(params.id).then((res: any) => {
            setEpisode(res.data)
        }).catch()
    }, [params.id])

    useEffect(() => {
        if (episode?.characters) {
            getSetCharacters(episode?.characters).then((res: any) => {
                const data = res.data.length ? res.data : [res.data]
                setCharacters(data)
            })

        }

    }, [episode])

    return (

        <>
            <Card>

                {episode && <EpisodeDescription episode={episode} />}
                <Typography.Title level={5}> Characters </Typography.Title>
                <WrapperItems>

                    {characters?.map(ch => <CharacterCard key={ch.id} character={ch} />)}

                </WrapperItems>
            </Card>
        </>
    )
}
export default Episode