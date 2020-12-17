import React from 'react'
import { ICharacter, Tstatus, Tgender } from '@interfaces'

import { FemaleIcon, MaleIcon } from '@atoms'
import { Descriptions, Badge } from 'antd'
import { QuestionCircleOutlined}  from '@ant-design/icons'
type Props = { character: ICharacter }
type PropsSt = { status: Tstatus }
type PropsGe = { gender: Tgender }

const Status = ({ status }: PropsSt) => {
    if (status === "Alive") return (<><Badge status="success" />{status} </>)
    if (status === "Dead") return (<><Badge status="error" />{status} </>)
    return (<><QuestionCircleOutlined />{status} </>)
}

const Gender = ({ gender }: PropsGe) => {
    if (gender === "Female") return (<><FemaleIcon />{gender} </>)
    if (gender === "Male") return (<><MaleIcon />{gender} </>)
    return (<><QuestionCircleOutlined />  { gender} </>)
}
const DescriptionCharacter = ({ character }: Props) => (

    <Descriptions>
        <Descriptions.Item label="Location">
            {character?.location.name}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
            <Gender gender={character.gender}/>
        </Descriptions.Item>
        <Descriptions.Item label="Status">
            <Status status={character.status} />
        </Descriptions.Item>
        <Descriptions.Item label="Origin">
            {character?.origin.name}
        </Descriptions.Item>
        <Descriptions.Item label="Specie">
            {character?.species}
        </Descriptions.Item>

    </Descriptions>

)
export default DescriptionCharacter