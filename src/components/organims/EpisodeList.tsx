import React, { useEffect, useState } from 'react'
import { Pagination, Card, Typography, Space } from 'antd'

import { IEpisode, IinfoReq } from "@interfaces"
import { filterEpisodes, getEpisodes } from '@helpers'
import { WrapperItems } from '@atoms'
import { EpisodeCard, EpisodeSearch } from '@molecules'
const EpisodeList = () => {
    const [episodes, setEpisode] = useState<IEpisode[]>([])
    const [info, setInfo] = useState<IinfoReq>()
    const [query, setQuery] = useState<any>()
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        // alert('asdad')
        getEpisodes().then((res: any) => {
            const episodeList: IEpisode[] = res.data.results
            const info: IinfoReq = res.data.info
            setInfo(info)
            setEpisode(episodeList)
        })
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [query])


    const handleChangePage = (page: number) => {
        setCurrentPage(page)
        filterEpisodes({ ...query, page }).then((res: any) => {
            const epiList: IEpisode[] = res.data.results
            const info: IinfoReq = res.data.info
            setInfo(info)
            setEpisode(epiList)
        })
    }
    return (
        <>
            <Card>

                <EpisodeSearch setEpisodes={setEpisode} setInfo={setInfo} setQuery={setQuery} />
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
                {episodes.map(ep => <EpisodeCard key={ep.id} episode={ep} />)}

            </WrapperItems>
        </>

    )
}
export default EpisodeList 