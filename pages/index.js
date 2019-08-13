import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PokedexBase from '../components/PokedexBase';
import PokedexInfo from '../components/PokedexInfo';
import Pokebutton from '../components/PokeButton';

const Backgroundsite = styled.div`
height: 100vh;
width: 100vw;
background: ${({ theme }) => theme.colors.background1};
padding: 0px;
margin: 0;
`

export default function index(props) {

    return (
        <Backgroundsite>
            <Row>
                <h1>Pokedex Project - Jeniffer de Azevedo</h1>
            </Row>
            <Row>
                <Col lg={23} sm={24}>
                    <Row>
                        <Col lg={8} sm={24}>
                            <PokedexBase />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Backgroundsite>
    )
}
