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
border-top-left-radius: 40px;
border-top-right-radius: 40px;
overflow: hidden;
`
const Basement = styled.div`
height: 100%;
width: 100%;
padding: 0;
margin: 0;
background: ${({ theme }) => theme.colors.red1};
border-top-left-radius: 40px;
border-top-right-radius: 40px;
border-bottom: 5px solid ${({ theme }) => theme.colors.redescuromedio};
`

const Upsubleftbase1 = styled.div`
    height: 30%;
    width:12.5%;
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
    height:60%;
    width:25%;
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
    height: 30%;
    width:12.5%;
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
    height: 60%;
    width:25%;
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
    height: 175%;
    width:65%;
    background: ${({ theme }) => theme.colors.blueclaro};
    position: absolute;
    z-index:6;
    border-radius: 100%;
    border: 5px solid ${({ theme }) => theme.colors.redescuromedio};
    margin-top: 10%;
    margin-left: 17.5%;
`
const Upbolablack = styled.div`
    height: 97.5%;
    width:97.5%;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    margin-top: 1.25%;
    margin-left: 1.25%;
    position: absolute;
    z-index: 7;
`
const Upbolablue = styled.div`
    height: 65%;
    width: 65%;
    background: ${({ theme }) => theme.colors.blueclaro};
    border-radius: 100%;
    margin-top: 17.5%;
    margin-left: 17.5%;
`

export default function Up(props) {
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

            //<Col span={24}>
                //<Basement open={props.opening}>
                    //<Pokeup>
                        //<Upsubleftbase1 />
                        //<Upsubleftbase2 />
                        //<Upsubrightbase1 />
                        //<Upsubrightbase2 />
                        //<Upbola />
                        //<Upbolablack />
                        //<Upbolablue />
                    //</Pokeup>
                //</Basement>
            //</Col>