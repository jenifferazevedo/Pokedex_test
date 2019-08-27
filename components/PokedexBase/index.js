import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';
import Up from './Up';
import Down from './Down';
import { Pokebutton, Pokebuttonoff } from './PokeButton';

const Basement = styled.div`
width: 100%;
margin-left: 2.5%;
margin-bottom: ${props => props.open ? '10%' : '20%'};
position: relative;
z-index:1;
float: left;
z-index: ${props => props.open ? '0' : '2'};
transition: ${props => props.open ? '1.5s' : '0s'};
`

const Pokebase = styled.div`
 height: ${props => props.open ? '39vh' : '9vh'};
 transition: height ${props => props.open ? '1s' : '0s'};
 width: 92%;
 margin-left: 1.5%;
 background-color: ${({ theme }) => theme.colors.blueclaro};
 position: relative;
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
    // <Pokebutton opening={state} />
    return (
        <Basement open={state}>
            <Up opening={state} />
            <Pokebase open={state}>
                <div onClick={() => setState(!state)}>
                    <Pokebutton opening={state} />
                </div>
            </Pokebase>
            <Down />
            <div onClick={() => props.resetStates(setState(!state))}>
                <Pokebuttonoff opening={state} />
            </div>
        </ Basement>
    )
}

//<div onClick={() => setState((""))}>
//<Pokebuttonoff opening={state} />
//</div>