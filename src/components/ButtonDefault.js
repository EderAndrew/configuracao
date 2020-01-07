/**
 * Componente botão padrão para ser utilizado em todo o aplicativo.
 * Evita de ficar criando vários botões para cada tela
 * 
 */
import React from 'react'
import styled from 'styled-components/native'

//Estilizando com props para que possa mexer dinâmicamente em cada tela.
const Container = styled.TouchableHighlight`
    width:80%;
    height:50px;
    border:1px solid #6A68FF;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    margin-top:${props=>props.margin};
    background-color:#6A68FF;
`
const Title = styled.Text`
    font-size:18px;
    color:#FFF;
`
const ButtonDefault = (props) => {
    return(
        <Container margin={props.margin} onPress={props.onPress}>
            <Title>{props.title}</Title>
        </Container>
    )
}

//Exportando para instanciar em qualquer lugar do App
export default ButtonDefault