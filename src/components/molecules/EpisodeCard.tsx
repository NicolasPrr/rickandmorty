import React from 'react'
import { Card } from '@atoms'
import { IEpisode } from '@interfaces'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
type Props = { episode: IEpisode }
const EpisodeCard = ({ episode }: Props) => (

    <Card size={"small"} style={{ height: "auto" }}>
        <Card.Meta
            title={<Tooltip title={episode.name}> <Link to={`/episode/${episode.id}`}>{episode.name}</Link> </Tooltip>}
            description={episode.episode}
        />
        Emition: {episode?.air_date}
        <br/>
        Characters: {episode?.characters.length}

    </Card>
)
export default EpisodeCard