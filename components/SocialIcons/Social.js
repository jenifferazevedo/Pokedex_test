import React from 'react';
import styled from 'styled-components';
import { Row, Col, Icon, Button } from 'antd';

const Iconbutton = styled.div`
    padding: 0 25%;
    padding-top: 65vh;
    @media (max-width: 568px){
            padding-left: 25%;
        }
    .ant-btn{
        width: 40px;
        height: 40px;
        padding: 6px;
        margin: 8% 0%;
        border-radius: 100%;
        @media (max-width: 568px){
            margin: 10px 10px;
        }
        :hover {
        box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.blueescuro};
        }
        .anticon{
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 1.8em;
        }
    }
`

export default function Social() {
    return (
        <Row>
            <Iconbutton>
                <Button href='https://www.linkedin.com/in/jeniffer-de-azevedo-6b567070/' target="_blank"><Icon type="linkedin" /></Button>
                <Button href='https://github.com/jenifferazevedo' target="_blank"><Icon type="github" /></Button>
                <Button href='https://www.behance.net/jenifferazevedo' target="_blank"><Icon type="behance-square" /></Button>
            </Iconbutton>
        </Row>
    )
}
