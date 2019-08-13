import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Bolablue = styled.button`
    height: 36%;
    width: 32%;
    background-color: ${({ theme }) => theme.colors.blueclaro};
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    border-radius: 100%;
    border-style: none;
    margin-left: 34%;
    top: 35%;
    position: absolute;
    z-index: 2;
    display: ${props => props.open ? 'none' : 'block'};
    opacity: ${props => props.open ? '0' : '1'};
    transition: display ${props => props.open ? '1s' : '3s'} , opacity ${props => props.open ? '1s' : '3s'};
    :focus {
        box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueescuro};
    }
`
const Bolablue1 = styled.div`
    height: 85%;
    width: 90%;
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.blueclaromedio};
    margin-left: 5%;
    border-style: none;
    border-radius: 100%;
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
            <Bolablue open={props.opening}>
                <Bolablue1>
                    <h1>POKEDEX</h1>
                </Bolablue1>
            </Bolablue>
    )
}
