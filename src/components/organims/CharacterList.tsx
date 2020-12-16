import React, { useEffect, useState } from 'react'

import { Card, Pagination, Typography, Space } from 'antd'
import { CharacterSearch, CharacterCard } from '@molecules'
import { IinfoReqCharacter, ICharacter } from '@interfaces'
import { WrapperItems } from '@atoms'
import { getCharacters, filterCharacters } from '@helpers'


const Character = () => {
    const [characters, setCharacters] = useState<ICharacter[]>()
    const [info, setInfo] = useState<IinfoReqCharacter>()
    const [query, setQuery] = useState<IinfoReqCharacter & any>()
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        getCharacters().then((res: any) => {
            const characterList = res.data.results
            const info: IinfoReqCharacter = res.data.info
            setInfo(info)
            setCharacters(characterList)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [query])


    const handleChangePage = (page: number) => {
        setCurrentPage(page)
        filterCharacters({ ...query, page }).then((res: any) => {
            const characterList = res.data.results
            const info: IinfoReqCharacter = res.data.info
            setInfo(info)
            setCharacters(characterList)
        })
    }
    return (
        <>  <Card>
            <CharacterSearch setCharacters={setCharacters} setInfo={setInfo} setQuery={setQuery} />
            <Space align="center">
                <Typography.Text strong>
                    Characters: {info?.count}
                </Typography.Text>
                <Pagination defaultCurrent={1}
                    current={currentPage}
                    onChange={handleChangePage}
                    size="small" total={info?.count}
                    showSizeChanger={false} pageSize={20} />
            </Space>
        </Card>
            <WrapperItems>

                {characters?.map(character =>
                    <CharacterCard character={character} />
                )}

            </WrapperItems>


        </>
    )

}
export default Character