import React from 'react'
import { Input, Button, Select, Form, notification } from 'antd'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'
import { filterCharacters, filterEpisodes } from '@helpers'
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
    setEpisodes: Function,
    setQuery: Function,

}

const CharacterSearch = (props: Props) => {
    const handleSearch = (values: IFilterCharacter) => {
        
        filterEpisodes(values).then((res: any) => {
            const results: ICharacter[] = res.data.results
            const info: IinfoReq = res.data.info
            props.setEpisodes(results)
            props.setInfo(info)
            props.setQuery(values)
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Error 404, content not found' })
        })
    }
    return (<>
        {/* <Typography.Title level={3}>Filters</Typography.Title> */}
        <Form onFinish={handleSearch}>
            <WraperHeader>
                <Item name="name">
                    <Input placeholder="Episoed name" />
                </Item>
                <Item name="code">
                    <Input placeholder="Episode code" />
                </Item>
                <Button icon={<SearchOutlined />} htmlType="submit" type="primary">Search</Button>
            </WraperHeader>

        </Form>

    </>
    )

}

export default CharacterSearch