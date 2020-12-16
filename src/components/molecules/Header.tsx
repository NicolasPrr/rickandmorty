import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router-dom'
const { Item } = Menu

const MainHeader = () => {
    const history = useHistory()
    const handleClick = (event: any ) => {
        history.push(`/${event.key}`)

    }
    return (
        <Menu onClick={handleClick} mode="horizontal" defaultSelectedKeys={["characters"]}>

            <Item key='characters'>
                Characters

                </Item>
            <Item key='episodes'>
                Episodes

                </Item>
        </Menu>
    )
}
export default MainHeader