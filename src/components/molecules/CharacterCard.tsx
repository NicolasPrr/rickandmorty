import React from 'react'
import { Card, DIcon } from '@atoms'
import { Tooltip, } from 'antd'
import { ICharacter, Tstatus } from '@interfaces'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
type WithChildren<T = {}> =
  T & { children?: React.ReactNode | string };

type CardProps = WithChildren<{
  character: ICharacter
}>
type DescriptionProps = {
  status: Tstatus,
  specie: string
}
const DescriptionStatus = ({ status, specie }: DescriptionProps) => {
  const str = `${status} - ${specie}`
  if (status === 'Dead') return (<Tooltip title={str} > <DIcon /> - {specie}  </Tooltip>)
  if (status === 'unknown') return (<Tooltip title={str}><QuestionCircleOutlined /> - {specie}  </Tooltip>)
  return (
    <Tooltip title={str}>
      {str}
    </Tooltip>
  )
}

const CharacterCard = ({ children, character }: CardProps) => (
  <Card size="small"
    hoverable
    title={<Link to={`/character/${character.id}`}>{character?.name}</Link>}
    cover={<img alt={character?.name} src={character?.image} />}
  >
    <Card.Meta
      description={<DescriptionStatus specie={character?.species} status={character.status} />}

    />
    Episodes {character?.episode.length}<br />
  </Card>
)
export default CharacterCard