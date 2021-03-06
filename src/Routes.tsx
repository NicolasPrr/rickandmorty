import React from 'react'
import { Layout} from 'antd'


import { Header } from './components/molecules'
import { Characterlist, Character, EpisodeList, Episode  } from '@orgnamins'

import { Switch, HashRouter, Route } from 'react-router-dom'

const { Content } = Layout




const rts = [
    { path: "/characters", name: "Characters", Component:Characterlist },
    { path: "/character/:id", name: "Character", Component: Character },
    { path: "/episode/:id", name: "Character", Component: Episode },
    { path: "/episodes", name: "Character", Component: EpisodeList },
    { path: "/*", name: "Characters", Component: Characterlist }
]



const Routes = () => {

    return (
        <HashRouter basename="rickandmorty">
            <Layout>
                <Header />
                {/* <Breadcrumb>
                    <Breadcrumb.Item>
                        Personajes
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        x
                    </Breadcrumb.Item>
                </Breadcrumb> */}
                <Content style={{ padding: "1.5%", }}>
                    <Switch>
                        {rts.map(route =>
                            <Route
                                exact
                                path={route.path}
                                key={route.name}
                                component={(props: any) => <route.Component {...props} name={route.name} />}
                            />
                        )}
                    </Switch>
                </Content>
            </Layout>
        </HashRouter>
    )
}
export default Routes