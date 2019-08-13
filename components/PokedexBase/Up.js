import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Basement = styled.div`
height: 25vh;
width: 28vw;
padding: 0;
margin: 0;
background: ${({ theme }) => theme.colors.red1};
position: relative;
z-index: 1;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
overflow: hidden;
transform: ${props => props.open ? 'translateY(-68%)' : 'translateY (0%)'};
transition: 1s;
`
const Pokeup = styled.div`
height: 25vh;
width: 100%;
padding: 0;
margin: 0;
background: ${({ theme }) => theme.colors.red1};
position: absolute;
z-index: 1;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
`

const Upsubleftbase1 = styled.div`
    height: 10vh;
    width:18%;
    padding:0;
    margin:0;
    border-radius: 60px 0px 100px 0px;
    border-right: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 2;
    box-shadow: 1px 1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubleftbase2 = styled.div`
    height: 16vh;
    width:28%;
    padding:0;
    margin:0;
    border-radius: 40px 0px 100px 0px;
    border-right: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 3;
    box-shadow: 1px 1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubrightbase1 = styled.div`
    height: 10vh;
    width:18%;
    padding:0;
    margin:0;
    right: 0;
    border-radius: 0px 60px 0px 100px;
    border-left: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 4;
    box-shadow: -1px -1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubrightbase2 = styled.div`
    height: 16vh;
    width:28%;
    padding:0;
    margin:0;
    right: 0;
    border-radius: 0px 40px 0px 100px;
    border-left: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 5;
    box-shadow: -1px -1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upbola = styled.div`
    height: 195%;
    width:70%;
    background: ${({ theme }) => theme.colors.blueclaro};
    position: absolute;
    z-index:2;
    border-radius: 100%;
    border: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    z-index:6;
    margin-top: 8%;
    margin-left: 15%;
`
const Upbolablack = styled.div`
    height: 179%;
    width:64%;
    background: ${({ theme }) => theme.colors.black};
    position: absolute;
    z-index:2;
    border-radius: 100%;
    z-index:7;
    margin-top: 11%;
    margin-left: 18%;
`
const Upbolablue = styled.div`
    height: 140%;
    width:45%;
    background: ${({ theme }) => theme.colors.blueclaro};
    position: absolute;
    z-index:2;
    border-radius: 100%;
    z-index:8;
    margin-top: 22%;
    margin-left: 27.5%;
`

export default function Up(props) {
    return (
        <Row>
            <Col span={24}>
                <Basement open={props.opening}>
                    <Pokeup>
                        <Upsubleftbase1 />
                        <Upsubleftbase2 />
                        <Upsubrightbase1 />
                        <Upsubrightbase2 />
                        <Upbola />
                        <Upbolablack />
                        <Upbolablue />
                    </Pokeup>
                </Basement>
            </Col>
        </Row>
    )
}
