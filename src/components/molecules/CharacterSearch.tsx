import React from 'react'
import { Input, Button, Select, Form, notification } from 'antd'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'
import { filterCharacters } from '@helpers'
import { IFilterCharacter, ICharacter, IinfoReq } from '@interfaces'
const { Item } = Form

const WraperHeader = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: flex-start
    }
    
`
type Props = {
    setInfo: Function,
    setCharacters: Function,
    setQuery: Function,

}

const CharacterSearch = (props: Props) => {
    const handleSearch = (values: IFilterCharacter) => {
        
        
        filterCharacters(values).then((res: any) => {
            const results: ICharacter[] = res.data.results
            const info: IinfoReq = res.data.info
            props.setCharacters(results)
            props.setInfo(info)
            props.setQuery(values)
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Error 404, content not found' })

        }
        )
    }
    return (<>
        {/* <Typography.Title level={3}>Filters</Typography.Title> */}
        <Form onFinish={handleSearch}>
            <WraperHeader>
                <Item name="name">
                    <Input placeholder="Character name" />
                </Item>
                <Item name="status">

                    <Select placeholder="status" style={{ width: "100%", minWidth: "100px" }}>
                        <Select.Option value="">   </Select.Option>
                        <Select.Option value="Alive"> Alive</Select.Option>
                        <Select.Option value="Dead"> Dead</Select.Option>
                        <Select.Option value="unknown   "> unknown</Select.Option>
                    </Select>
                </Item>
                <Item name="species">
                    <Input placeholder="Species ej: Human, Alien"  />

                </Item>
                <Item name="type">
                    <Input placeholder="type" />

                </Item>
                <Item name="gender">
                    <Select placeholder="gender">
                        <Select.Option value=""> </Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Gebderless">Genderless</Select.Option>
                        <Select.Option value="unknown">unknown</Select.Option>
                    </Select>

                </Item>
                <Button icon={<SearchOutlined />} htmlType="submit" type="primary">Search</Button>
            </WraperHeader>

        </Form>

    </>
    )

}

export default CharacterSearch