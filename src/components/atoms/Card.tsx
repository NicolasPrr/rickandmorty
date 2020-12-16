import styled from 'styled-components'
import { Card } from 'antd'


const CustomCard = styled(Card)`
    width: 150px;
    height: 275px;
    border-radius: 8px;
    cursor: default;
    transition: width 0.9s, font-size 2s ;
    margin: 1.5% ;   
    
    
    .ant-card-meta-description {
        font-size: 11.5px;
    }
    :hover{ 
        width: 190px;
        .ant-card-meta-description {
            font-size: 12px;
        }
    };
    
    
    @media (max-width: 768px) {
        width: 100px;
        height: 205px;
        :hover{ width: 105px};
    }
    
`

export default CustomCard