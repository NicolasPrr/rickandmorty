import React from 'react'
import { ICharacter } from '@interfaces'

import { Descriptions } from 'antd'

type Props = { character: ICharacter }
const DescriptionCharacter = ({ character }: Props) => (

    <Descriptions>
        <Descriptions.Item label="Location">
            {character?.location.name}
        </Descriptions.Item>
        <Descriptions.Item label="Genero">
            {character?.gender}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
            {character?.status}
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