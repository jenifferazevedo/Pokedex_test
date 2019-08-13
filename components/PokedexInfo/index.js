import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pokefoto from './Pokefoto';
import Poketype from './Poketype';
import Pokeability from './Pokeability';
import Pokename from './Pokename';
import Pokenumber from './Pokenumber';
import Pokeexperience from './Pokeexperience';
import { Row, Col, Icon } from 'antd';
import axios from 'axios';

const Pokeinfo = styled.div`
    height: 33.3vh;
    width: 27vw;
    background-color: ${({ theme }) => theme.colors.blueclaro};
    padding: 1% 2% 2% 2%;
    margin-left: 0.75%;
    margin-top: 15.2%;
    position: absolute;
    z-index: 1;
`

const Pokemonselecionado = styled.div`
    height: 23vh;
    width: 80%;
    background: ${({ theme }) => theme.colors.blueclaromedio};
    border-radius: 10px;
    margin-top: 2%;
    margin-left: 10%;
`

const Searchbar = styled.div`
height:6vh;
margin-left: 3%;
margin-right:0;
form, input {
width: 90%;
border-radius: 5px;
font-size:0.9em;
font-family: 'Courier New', Courier, monospace;
padding-left: 5px;
}
input:focus{
    outline-color: ${({ theme }) => theme.colors.red1}
}
button {
    height: auto;
    border-style: none;
    .anticon svg {
        color: ${({ theme }) => theme.colors.red1};
        text-align: center;
    }
}
`

const Errormsg = styled.div`
font-size: 0.7em;
color: ${({ theme }) => theme.colors.red1};
`

export default function index(props) {
    const [pokemon, setPokemon] = useState("");
    const [error, setError] = useState("");

    function PesquisaPokemon() {
        if (pokemon.length === 0) {
            setError("Ops, você não digitou nenhum nome")
        } else {
            setError("");
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
                // handle success
                console.log(response.data)
                setPokemon(response.data);
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
        <Row>
            <Pokeinfo>
                <Row>
                    <Searchbar>
                        <Col span={24}>
                            <input type="text" onChange={input => setPokemon(input.target.value)} placeholder="Which pokemon are you looking for?"></input>
                            <button onClick={() => PesquisaPokemon()}><Icon type="search" /></button>
                        </Col>
                        <Errormsg>{error && error}</Errormsg>
                    </Searchbar>
                </Row>
                <Row>
                    <Pokemonselecionado>
                        <Col span={11}>
                            <Row>
                                <Pokefoto pokephoto={pokemon} />
                            </Row>
                            <Row>
                                <Poketype pokemonselectedtype={pokemon} />
                            </Row>
                        </Col>
                        <Col span={13}>
                            <Row>
                                <Pokename pokemonname={pokemon} />
                                <Pokenumber pokemonnumber={pokemon} />
                            </Row>
                            <Row>
                                <Pokeability pokehabilidade={pokemon} />
                            </Row>
                            <Row>
                                <Pokeexperience pokemonexperience={pokemon} />
                            </Row>
                        </Col>
                    </Pokemonselecionado>
                </Row>
            </Pokeinfo>
        </Row>
    )
}
