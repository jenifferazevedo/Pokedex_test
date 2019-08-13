import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';
import Up from './Up';
import Down from './Down';
import Pokebutton from '../PokeButton';


const Poke = styled.div`
 height: 50vh;
 margin-top: 10%;
 display: block;
 position: absolute;
 z-index: ${props => props.open ? '0' : '1'};
 transition: z-index ${props => props.open ? '4s' : '0s'};
 float:left;
`
const ButtonOff = styled.button `
height: 10%;
width: 8%;
background-color: ${({theme}) => theme.colors.cinzaclaro};
margin-top: -8%;
margin-left: 46%;
position: absolute;
z-index: ${props => props.open ? '7' : '0'};
transition: z-index ${props => props.open ? '4s' : '0s'};
box-shadow: 1px 1px ${({theme}) => theme.colors.boxshadowmedio};
border-radius: 50%;
border: 1px solid  ${({theme}) => theme.colors.red1};
:focus {
    border-radius: 50%;
}
`
    
export default function index(props) {
    const [state, setState] = useState(false);

    return (
        <Row>
            <Col span={24}>
                <Poke open={state}>
                    <Up opening={state} />
                    <div onClick={() => setState(!state)}>
                        <Pokebutton opening={state} />
                    </div>
                    <Down opening={state} />
                    <div onClick={ () => setState(!state && (""))}> 
                        <ButtonOff open={state}><Icon type="poweroff" /></ButtonOff>
                    </div>
                </Poke>
            </Col>
        </Row>
    )
}
