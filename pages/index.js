import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Menu from '../components/Menu';
import PokedexBase from '../components/PokedexBase';
import PokedexInfo from '../components/PokedexInfo';
import Social from '../components/Icons/Social';
import { Pokebuttonoff } from '../components/PokedexBase/PokeButton';

const Backgroundsite = styled.div`
width: 100%;
background: ${({ theme }) => theme.colors.background1} no-repeat fixed;
`
const Footer = styled.div`
background: ${({ theme }) => theme.colors.blue};
width: 100%;
text-align: center;
margin-bottom: 2%;
`

export default function index(props) {
    const [resetStates, setResetStates] = useState(false)

    function resetStateFunction (reset) {
        setResetStates(reset);
        console.log(reset)
    }

    return (
        <Backgroundsite>
            <Row>
                <Menu title="Pokedex Jeniffer's Project" />
            </Row>
            <Row type="flex" justify="center">
                <Col lg={7} md={10} sm={13} xs={24}>
                    <PokedexBase resetStates={resetStateFunction}/>
                    <PokedexInfo resetStates={resetStateFunction} />
                </Col>
            </Row>
            <Row>
                <Footer>
                    <Social />
                </Footer>
            </Row>
        </Backgroundsite>

    )
}
