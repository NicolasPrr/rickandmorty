import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
const { Item } = Menu

const MainHeader = () => {
    const history = useHistory()
    const location = useLocation()
    const [currentItem, setCurrentItem] = useState<string[]  | any>("characters")
    const handleClick = (event: any) => {
        history.push(`/${event.key}`)
    }
    useEffect(() => setCurrentItem(location.pathname.replace("/", "")), [location.pathname])
    return (
        <Menu onClick={handleClick} selectedKeys={currentItem} mode="horizontal" defaultSelectedKeys={["characters"]}>

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