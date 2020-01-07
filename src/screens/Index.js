/**
 * Tela de inicio do aplicativo. Primeira tela que o usuário visualiza
 * 
 */
import React from 'react'
import styled from 'styled-components/native'

//Importando o componente botão padrão
import ButtonDefault from '../components/ButtonDefault'

const Container = styled.SafeAreaView`
    flex:1;
`
const ImageBackground = styled.ImageBackground`
    flex:1;
    justify-content:center;
    align-items:center;
`
const Title = styled.Text`
    font-size:28px;
    margin-bottom:30px;
    color:#6A68FF;
    font-weight:bold;
`
const Description = styled.Text`
    font-size:18px;
    text-align:center;
    color:#6A68FF;
`

const Index = (props) => {
    //função que muda a tela para dados pessoais
    const entrarApp = () => {
        props.navigation.navigate('PersonData')
    }
    return(
        <Container>
            <ImageBackground source={require('../img/bg.jpg')}>
                <Title>App Configuração</Title>
                <Description>Exercitando alguns componentes do React-Native</Description>
                <ButtonDefault margin='150' title='Entrar no App' onPress={entrarApp}/>
            </ImageBackground>
        </Container>
    )
}

//Removendo a barra de navegação da tela inicial
Index.navigationOptions = ({navigation}) => {
    return{
        //header:null esta depreciado. Porém o headerShow:false não teve nenhum efeito
        header:null
    }
}

//Exportando para que o MainNavigator possa renderizar a tela
export default Index