import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PokedexBase from '../components/PokedexBase';
import PokedexInfo from '../components/PokedexInfo';
import Social from '../components/SocialIcons/Social';

const Backgroundsite = styled.body`
width: 100vw;
height: auto;
background: ${({ theme }) => theme.colors.background1} no-repeat;
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
                <Col lg={22} md={22} sm={22} xs={24}>
                    <Row>
                        <Col lg={8} md={20} sm={22} xs={24}>
                            <PokedexBase />
                            <PokedexInfo />
                        </Col>
                    </Row>
                </Col>
                <Col lg={2}>
                    <Social />
                </Col>
            </Row>
        </Backgroundsite>
    )
}
