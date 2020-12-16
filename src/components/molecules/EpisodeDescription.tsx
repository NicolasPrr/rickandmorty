import React from 'react'
import {Descriptions} from 'antd'
import {IEpisode} from '@interfaces'
type Props = {episode : IEpisode}
const EpisodeDescription  = ({episode} : Props)=>{

    return(
        <Descriptions title={episode.name}>
            <Descriptions.Item label="Air date">
                    {episode.air_date}
            </Descriptions.Item>
            <Descriptions.Item label={"Characters"}>
                {episode.characters.length}

            </Descriptions.Item>
            <Descriptions.Item label={"Code"}>
                {episode.episode}
            </Descriptions.Item>
        </Descriptions>
    )

}

export default EpisodeDescription