/**
 * Tela de dados pessoais. Utilizando alguns componentes para exercitar.
 * Utilizando Picker, Switch, Slide e inputText
 * 
 */
import React, { useState } from 'react'
import styled from 'styled-components/native'//Passei a utilizar no lugar do StyleSheet.

//Importando os componentes padrão
import NascimentoPicker from '../components/NascimentoPicker'//Estudo de um componente Picker
import ButtonDefault from '../components/ButtonDefault'

const Container = styled.SafeAreaView`
    flex:1;
`
const ImageBackground = styled.ImageBackground`
    flex:1;
`
const Body = styled.View`
    flex:1;
    margin-top:40px;
    align-items:center;
`
const Text = styled.Text`
    font-size:18px;
    color:#6A68FF;
    margin-bottom:14px;
`
const Input = styled.TextInput`
    width:80%;
    border:1px solid #6A68FF;
    padding:10px;
    border-radius:10px;
    color:#6A68FF;
    background-color:#FFF;
    margin-bottom:20px;
`
const Picker = styled.Picker`
    width:200px;
    color:#6A68FF;
    background-color:#FFF;
    margin-bottom:10px;
`
const SetSlider = styled.Slider`
    width:80%;
`
const DoarSangue = styled.Switch``
const CaixaDoador = styled.View`
    width:70%;
    flex-direction:row;
    justify-content:space-between;
`
//Utilizando um ImageBackground encapsulando todo o conteúdo da tela
//Utilização do useState no lugar do this.state Código mais verboso
const PersonData = (props) => {
    let a = [{value:'Masculino'},{value:'Feminino'}]
    //Aqui ficam todos os STATES
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState(a)
    const [value, setValue] = useState(0)

    const [altura, setAltura] = useState(1.70)
    const [quilos, setQuilos] = useState(70)

    const [doar, setDoar] = useState(false)

    let s = a.map((v, k) => {
        return <Picker.Item key={k} value={k} label={v.value}/>
    })

    const proximaTela = () => {
        props.navigation.navigate('FinancialData', {
            nome
        })
    }
    return(
        <Container>
            <ImageBackground source={require('../img/bg.jpg')}>
                <Body>
                    <Text>Digite o seu Nome</Text>
                    <Input placeholder='Name' onChangeText={n=>setNome(n)}/>

                    <Text>Data de Nascimento</Text>
                    <NascimentoPicker />

                    <Text>Escolha o seu Sexo</Text>
                    <Picker selectedValue={value} onValueChange={(itemValue, itemIndex)=>setSexo(setValue(itemValue))}>
                        { s }
                    </Picker>

                    <Text>Qual sua altura?</Text>
                    <SetSlider value={altura} minimumValue={1} maximumValue={3} onValueChange={(v)=>setAltura(v)}/>
                    <Text>{altura.toFixed(2)} de altura</Text>

                    <Text>Insira o seu Peso</Text>
                    <SetSlider value={quilos} minimumValue={10} maximumValue={300} onValueChange={(v)=>setQuilos(v)}/>
                    <Text>{quilos.toFixed(0)} Kg</Text>
                    
                    <CaixaDoador>
                        <Text>Doador de Sangue</Text>
                        <DoarSangue value={doar} onValueChange={(v)=>setDoar(v)}/>
                        <Text>{(doar)?'Sim':'Não'}</Text>
                    </CaixaDoador>
                    
                    <ButtonDefault title='Próximo passo' margin='40' onPress={proximaTela} />
                </Body>    
            </ImageBackground>
        </Container>
    )
}
//Estilizando o header. Inserindo um titulo personalizado e uma cor padrão do aplicativo
PersonData.navigationOptions = () => {
    return{
        title:'Dados Pessoais',
        headerStyle:{
            backgroundColor:'#6A68FF'
        },
        headerTintColor:'#FFF'    
    }
}

export default PersonData