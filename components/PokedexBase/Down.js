import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Base = styled.div`
height: 25vh;
width: 100%;
padding: 0;
margin: 0;
background: ${({ theme }) => theme.colors.red1};
position: relative;
z-index: 1;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
overflow: hidden;
`
const Basement = styled.div`
height: 100%;
width: 100%;
padding: 0;
margin: 0;
background: ${({ theme }) => theme.colors.red1};
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
border-top: 5px solid ${({ theme }) => theme.colors.redescuromedio};
`

const Upsubleftbase1 = styled.div`
    height: 30%;
    width:12.5%;
    padding:0;
    margin:0;
    bottom: 0;
    border-radius: 0px 100px 0px 60px;
    border-right: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-top: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 2;
    box-shadow: 1px 1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubleftbase2 = styled.div`
    height: 60%;
    width:25%;
    padding:0;
    margin:0;
    bottom: 0;
    border-radius: 0px 100px 0px 40px;
    border-right: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-top: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 3;
    box-shadow: 1px 1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubrightbase1 = styled.div`
    height: 30%;
    width:12.5%;
    padding:0;
    margin:0;
    right: 0;
    bottom: 0;
    border-radius: 100px 0px 60px 0px;
    border-left: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-top: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 4;
    box-shadow: -1px -1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upsubrightbase2 = styled.div`
    height: 60%;
    width:25%;
    padding:0;
    margin:0;
    right: 0;
    bottom: 0;
    border-radius: 100px 0px 40px 0px;
    border-left: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    border-top: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    position: absolute;
    z-index: 5;
    box-shadow: -1px -1px 4px  ${({ theme }) => theme.colors.boxshadowmedio};
`
const Upbola = styled.div`
    height: 175%;
    width:67.5%;
    background: ${({ theme }) => theme.colors.blueclaro};
    position: absolute;
    z-index:6;
    border-radius: 100%;
    border: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    bottom: 30%;
    margin-left: 16.25%;
`
const Upbolablack = styled.div`
    height: 97.5%;
    width:97.5%;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    margin-top: 1.25%;
    margin-left: 1.25%;
    position: absolute;
    z-index:7;
`
const Upbolablue = styled.div`
    height: 65%;
    width:65%;
    background: ${({ theme }) => theme.colors.blueclaro};
    border-radius: 100%;
    margin-top: 22.5%;
    margin-left: 17.5%;
`

export default function Down(props) {
    return (
        <Base>
            <Basement>
                <Upsubleftbase1 />
                <Upsubleftbase2 />
                <Upsubrightbase1 />
                <Upsubrightbase2 />
                <Upbola>
                    <Upbolablack>
                        <Upbolablue />
                    </Upbolablack>
                
                </Upbola>
            </Basement>
        </Base>
    )
}
