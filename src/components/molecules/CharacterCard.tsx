import React from 'react'
import { Card, DIcon } from '@atoms'
import { Tooltip, Typography } from 'antd'
import { ICharacter, Tstatus } from '@interfaces'
import { QuestionCircleOutlined} from '@ant-design/icons'
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
    title={<Typography.Link strong>{character?.name}</Typography.Link>}
    cover={<img alt={character?.name} src={character?.image} />}
  >
    <Card.Meta
      description={<DescriptionStatus specie={character?.species} status={character.status} />}

    />
    Episodes {character?.episode.length}<br />
    {children}
  </Card>
)
export default CharacterCard