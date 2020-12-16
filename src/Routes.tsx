import React, { useEffect, useState } from 'react'
import { Layout, Breadcrumb } from 'antd'


import { Header, CharacterCard, InformationSearch, CharacterSearch } from './components/molecules'
import { getCharacters } from './Helpers'

import { IinfoReqCharacter, ICharacter } from './Interfaces'


const { Content } = Layout




const rts = [{ path: "characters", name: "Personajes", Component: null }]



const Routes = () => {
    const [characters, setCharacters] = useState<ICharacter[]>()
    const [info, setInfo] = useState<IinfoReqCharacter>()
    useEffect(() => {
        getCharacters().then((res: any) => {

            const characterList = res.data.results
            const info: IinfoReqCharacter = res.data.info
            setInfo(info)
            setCharacters(characterList)
        })
    }, [])

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
                <InformationSearch data={info}/>
                <CharacterSearch/>
            <Content style={{ padding: "1.5%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {characters?.map(character =>
                <CharacterCard character={character}/>
            )}
            </Content>
        </Layout>
    )
}
export default Routes