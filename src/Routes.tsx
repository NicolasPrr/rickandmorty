import React, { useEffect, useState } from 'react'
import { Layout, Breadcrumb } from 'antd'


import { Header } from './components/molecules'
import { OCharacter } from '@orgnamins'


const { Content } = Layout




const rts = [{ path: "characters", name: "Personajes", Component: null }]



const Routes = () => {

    return (
        <Layout>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item>
                    Personajes
                    </Breadcrumb.Item>
                <Breadcrumb.Item>
                    x
                    </Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ padding: "1.5%", }}>
                <OCharacter />
            </Content>
        </Layout>
    )
}
export default Routes