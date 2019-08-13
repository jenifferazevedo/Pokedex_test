import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Base1 = styled.div`
height: 8vh;
width: 27vw;
margin-left: 0.5vw;
background: ${({ theme }) => theme.colors.blueclaro};
display: ${props => props.open ? 'none' : 'block'} ;
opacity: ${props => props.open ? '0' : '1'};
transition: display ${props => props.open ? '5s' : '20s'}, opacity ${props => props.open ? '5s' : '20s'};
position: relative;
z-index: 4;
`

const Bolablue2 = styled.button`
    height: 24vh;
    width: 24vh;
    background-color: ${({ theme }) => theme.colors.blueclaro};
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    z-index: 5;
    border-radius: 100%;
    border-style: none;
    margin-top: -11.5%;
    margin-left: 31.5%;
    position: absolute;
    float: left;
    display: block;
    display: ${props => props.open ? 'none' : 'block'};
    opacity: ${props => props.open ? '0' : '1'};
    transition: display ${props => props.open ? '10s' : '20s'} , opacity ${props => props.open ? '10s' : '15s'};
    :focus {
        box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueescuro};
    }
`
const Bolablue3 = styled.div`
    height: 20vh;
    width: 20vh;
    top: 25%;
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    border-style: none;
    border-radius: 100%;
    margin-left: 4%;
    float: left;
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3em;
        color: ${({ theme }) => theme.colors.blueclaromedio};
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        margin-top: 38%;
}
`

export default function Pokebutton(props) {

    return (
        <Base1 open={props.opening}>
            <Bolablue2 open={props.opening}>
                <Bolablue3>
                    <h1>POKEDEX</h1>
                </Bolablue3>
            </Bolablue2>
        </Base1>
    )
}
