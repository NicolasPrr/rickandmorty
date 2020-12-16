import React from 'react'
import { Layout, Menu } from 'antd'

const { Item } = Menu

const MainHeader = () => (
    <Menu mode="horizontal" defaultSelectedKeys={["0"]}>

        <Item key='0'>
            Personajes

                </Item>
        <Item key='1'>
            Episodios

                </Item>
        <Item key='2'>
            Localizaciones

                </Item>

    </Menu>
)
export default MainHeader