import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pokefoto from './Pokefoto';
import Poketype from './Poketype';
import Pokeability from './Pokeability';
import Pokename from './Pokename';
import Pokenumber from './Pokenumber';
import Pokeexperience from './Pokeexperience';
import { Row, Col, Icon, Input, Button } from 'antd';
import axios from 'axios';

const Pokeinfo = styled.div`
    height: 37vh;
    width: 90%;
    padding: 1% 2% 2% 2%;
    margin-left: 5%;
    position: absolute;
    z-index: 0;
    float: left;
    top: 26vh;
`

const Pokemonselecionado = styled.div`
    width: 90%;
    background: ${({ theme }) => theme.colors.blue1};
    border-radius: 10px;
    margin-top: 12%;
    margin-left: 5%;
    padding-bottom: 2%;
    position: absolute;
    z-index: 3;
`

const Searchbar = styled.div`
    width: 100%;
    margin-right:0;
    position: absolute;
    z-index: 2;
    margin-top: 1%;
    .ant-input {
    width: 90%;
    height: 10%;
    border-radius: 5px;
    font-size:0.9em;
    font-family: 'Courier New', Courier, monospace;
    float: left;
    }
    input:focus{
    outline-color: ${({ theme }) => theme.colors.red1}
    }
    .ant-btn {
        padding: 0.2% 1.5%;
        margin-left: 1%;
        height: auto;
        background-color: ${({ theme }) => theme.colors.white};
    .anticon svg {
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.colors.red1};
        text-align: center;
    }
}
`

const Errormsg = styled.div`
height: 10%;
width: 100%;
padding: 0;
margin: 0;
font-size: 0.7em;
color: ${({ theme }) => theme.colors.red1};
padding: 0;
`

export default function index(props) {
    const [pokemon, setPokemon] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState ("");

    function PesquisaPokemon() {
        if (pokemon.length === 0) {
            setError("Ops, você não digitou nenhum nome")
        } else {
            setError("");
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
                // handle success
                console.log(response.data)
                setResult(response.data);
            })
                .catch((error) => {
                    // handle error
                    setError("Ops, digitou o nome do pokemon errado")
                    console.log(error);
                })             
        }
    }

    console.log(pokemon);
    return (
        <Pokeinfo>
            <Row>
                <Searchbar>
                    <Row>
                        <Input type="text" value={pokemon} onChange={input => setPokemon(input.target.value)} onKeyPress={event => { if (event.key === 'Enter') {PesquisaPokemon()}}} 
                        placeholder="Which pokemon are you looking for?"></Input>
                        <Button onClick={() => PesquisaPokemon()}><Icon type="search" /></Button>
                    </Row>
                    <Row>
                        <Errormsg>{error && error}</Errormsg>
                    </Row>
                </Searchbar>
            </Row>
            <Row>
                <Pokemonselecionado>
                    <Col span={11}>
                        <Row>
                            <Pokefoto pokephoto={result} />
                        </Row>
                        <Row>
                            <Poketype pokemonselectedtype={result} />
                        </Row>
                    </Col>
                    <Col span={13}>
                        <Row>
                            <Pokename pokemonname={result} />
                            <Pokenumber pokemonnumber={result} />
                        </Row>
                        <Row>
                            <Pokeability pokehabilidade={result} />
                        </Row>
                        <Row>
                            <Pokeexperience pokemonexperience={result} />
                        </Row>
                    </Col>
                </Pokemonselecionado>
            </Row>
        </Pokeinfo>
    )
}
