import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Photoprincipal = styled.div`
    height: 16vh;
    width: 90%;
    background: ${({theme}) => theme.colors.white};
    
    border-radius: 10px;
    margin: 5% 5%;
    overflow: hidden;
    img {
        height: ${props => props.imagemPokemon ? '105%' : '70%'};
        width: ${props => props.imagemPokemon ? '105%' : '70%'};
        margin: ${props => props.imagemPokemon ? '0' : '10% 15%'};
    }
    
`
const Pokeballfoto = "../static/pokeball.png";

export default function Pokefoto(props) {
   
    return (
        <Photoprincipal imagemPokemon={props.pokephoto.sprites}>
            <img src={props.pokephoto.sprites ? props.pokephoto.sprites.front_default : Pokeballfoto } />
        </Photoprincipal>
    )
}
