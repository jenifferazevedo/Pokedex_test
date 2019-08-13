import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';
import Up from './Up';
import Down from './Down';
import Pokebutton from '../PokeButton';

const Basement = styled.div`
height: 100%;
width: 100%;
padding-top: 5%;
`

const Pokebase = styled.div`
 height: ${props => props.open ? '30vh' : '9vh'};
 transition: height ${props => props.open ? '1s' : '0s'};
 width: 97%;
 margin-left: 1.5%;
 background-color: ${({theme}) => theme.colors.blueclaro};
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

    //const [state, setState] = useState(false);
    //    <Row>
    //        <Col span={24}>
    //            <Poke open={state}>
    //                <Up opening={state} />
    //                <div onClick={() => setState(!state)}>
    //                    <Pokebutton opening={state} />
    //                </div>
    //                <Down opening={state} />
    //                <div onClick={ () => setState(!state && (""))}> 
    //                    <ButtonOff open={state}><Icon type="poweroff" /></ButtonOff>
    //                </div>
    //            </Poke>
    //        </Col>
    //    </Row>
    return (
        <Row>
            <Basement>
                <Up />
                <Pokebase open={state}/>
                    <div onClick={() => setState(!state)}>
                        <Pokebutton opening={state} />
                    </div>
                <Down />
            </ Basement>
        </Row>
    )
}
