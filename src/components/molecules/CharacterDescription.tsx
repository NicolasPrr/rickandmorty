import React from 'react'
import { ICharacter } from '@interfaces'

import { Link } from 'react-router-dom'
import { Descriptions } from 'antd'

type Props = { character: ICharacter }
const DescriptionCharacter = ({ character }: Props) => (

    <Descriptions>
        <Descriptions.Item label="Location">
            <Link to=""> {character?.location.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Genero">
            {character?.gender}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
            {character?.status}
        </Descriptions.Item>
        <Descriptions.Item label="Origin">
            <Link to=""> {character?.origin.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Specie">
            {character?.species}
        </Descriptions.Item>

    </Descriptions>

)
export default DescriptionCharacter