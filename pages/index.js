import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PokedexBase from '../components/PokedexBase';
import PokedexInfo from '../components/PokedexInfo';
import Pokebutton from '../components/PokeButton';

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
background: ${({ theme }) => theme.colors.background1};
padding: 0px;
margin: 0;
position: relative;
z-index: 0;
`
const Pokedex = styled.div`
    height:60vh;
    width: 50vw;
    margin-left: 35%;
    position: relative;
    z-index: 0;
    display: block;
@media (max-width: 991.98px){
    margin-left: 20%;
}
@media (max-width: 767.98px){
    margin-left: 10%;
}
`

export default function index(props) {
    

    return (
        <Wrapper>
            <Row>
                <h1>Pokedex Project - Jeniffer de Azevedo</h1>
            </Row>
            <Row>
                <Pokedex>
                    <PokedexInfo />
                    <PokedexBase />
                </Pokedex>
            </Row>
        </Wrapper>
    )
}
