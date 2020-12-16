import React from 'react'

import { IinfoReqCharacter } from '@interfaces'
import { Typography, Row, Col, Statistic, Card } from 'antd'

const { Title } = Typography
type Tprops = { data?: IinfoReqCharacter }
const InformationSerach = (props: Tprops) => {
    return(
    <>
         <Row>
            <Col span={2}>
                <Statistic title="Results" value={props.data?.count}/>

            </Col>
            <Col span={2}>
                <Statistic title="Pages" value={props.data?.pages}/>
            </Col>
         </Row>
    </>

    )
}
export default InformationSerach