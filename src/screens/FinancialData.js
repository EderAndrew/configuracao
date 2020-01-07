import React, { useState } from 'react'
import styled from 'styled-components/native'

//Importando o componente Button
import ButtonDefault from '../components/ButtonDefault'

const Component  = styled.SafeAreaView`
    flex:1;
    margin-top:30px;
    align-items:center;
`
const ImageBackground = styled.ImageBackground`
    flex:1;
`
const Text = styled.Text`
    font-size:18px;
    color:#6A68FF;
    margin-bottom:20px;
`
const Slider = styled.Slider`
    width:300px;
`
const Picker = styled.Picker`
    width:200px;
    color:#6A68FF;
    background-color:#FFF;
    margin-bottom:20px;
`
const BoxCard = styled.View`
    width:80%;
    height:60px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`
const ButtonSub = styled.Button`
    
`
const ButtonPlus = styled.Button`

`
const TextCard = styled.Text`
    font-size:30px;
    font-weight:bold;
    color:#6A68FF;
    margin-right:30px;
    margin-left:30px;
`

const FinancialData = (props) => {
    const bancos = [
        {value:'Gringotes'},
        {value:'IronBank'},
        {value:'CaribbeanBank'}
    ]
    //TODAS AS STATES
    const [salario, setSalario] = useState(900)
    //Inserindo o array no state
    const [banco, setBanco] = useState(bancos)
    const [countBanco, setCountBanco] = useState(0)//Auxilia a percorrer o array e selecionar o banco
    //State auxiliar para adicionar ou subtrair o cartão
    const [card, setCard] = useState(0)
    
    let b = bancos.map((v, k)=>{
        return <Picker.Item key={k} value={k} label={v.value}/>
    })
    
    //Função para subtrair um cartão
    const subCard = () => {
        setCard(qtdCartao => {
            //Realizando o tratamento da quantidade de cartão para que não fique negativo
            if(qtdCartao == 0){
                return qtdCartao = 0
            }
            //Se não for menor ou igual a zero, continua subtraindo
            return qtdCartao - 1
        })
    }
    //Função para adicionar um cartão
    const plusCard = () => {
        setCard(qtdCartao=>qtdCartao + 1)
    }
    //width='40' marginRight='30' width='40' marginLeft='30'
    return(
        <ImageBackground source={require('../img/bg.jpg')}>
            <Component>
                <Text>Qual é o seu Salário?</Text>
                <Slider value={salario} minimumValue={450} maximumValue={3000} onValueChange={(v)=>setSalario(v)} />
                <Text>R$ { salario.toFixed(0) },00</Text>
                <Text>Escolha o seu Banco</Text>
                <Picker selectedValue={countBanco} onValueChange={(itemValue)=>setBanco(setCountBanco(itemValue))}>
                    { b }
                </Picker>
                <Text>Insira a quantidade de cartões</Text>
                <BoxCard>
                    <ButtonSub title=' - ' onPress={subCard} />
                    <TextCard>{ card }</TextCard>
                    <ButtonPlus title=' + ' onPress={plusCard} />
                </BoxCard>
                <ButtonDefault title='Finalizar Configuração' margin='160' onPress={null} />
            </Component>   
        </ImageBackground>
    )
}

FinancialData.navigationOptions = () => {
    return{
        title:'Dados Financeiros',
        headerStyle:{
            backgroundColor:'#6A68FF'
        },
        headerTintColor:'#FFF' 
    }
}

export default FinancialData