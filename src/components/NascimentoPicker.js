/**
 * Estudo de um component Picker
 * Não é tão dinâmico quanto o botão, mas se criar vários componentes array para o picker o componente poderá ser
 * usado em qualquer part do aplicativo. Só instanciar qualquer um componente array que pretende utilizar. Simples
 * 
 */
import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    width:130px;
    
`
const Picker = styled.Picker`
    color:#6A68FF;
    background-color:#FFF;
`

const NascimentoPicker = () => {
    //Array ano. Poderia ter criado um component pra esse array. Mas isso é apenas um estudo
    const ano = [
        {valor:'2003'},{valor:'2002'},{valor:'2001'},{valor:'2000'},{valor:'1999'},{valor:'1998'},{valor:'1997'},{valor:'1996'},
        {valor:'1995'},{valor:'1994'},{valor:'1993'},{valor:'1992'},{valor:'1991'},{valor:'1990'},{valor:'1989'},{valor:'1988'},
        {valor:'1987'},{valor:'1986'},{valor:'1985'},{valor:'1984'},{valor:'1983'},{valor:'1982'},{valor:'1981'},{valor:'1980'},
        {valor:'1979'},{valor:'1978'},{valor:'1977'},{valor:'1976'},{valor:'1975'},{valor:'1974'},{valor:'1973'},{valor:'1972'},
        {valor:'1971'},{valor:'1970'},{valor:'1969'},{valor:'1968'},{valor:'1967'},{valor:'1966'},{valor:'1965'},{valor:'1964'},

    ]
    //Uso de state para ler e modificar
    const [year, setYear] = useState(ano)
    const [a , setA] = useState(0)//State que inicia a contagem do array

    let anos = ano.map((v, k) => {
        return <Picker.Item key={k} value={k} label={v.valor}/>
    })
    return(
        <Container>
        <Picker selectedValue={a} onValueChange={(itemValue, itemIndex) => setYear(setA(itemValue))}>
            {anos}
        </Picker>
        </Container>
    )
}
//Finalizando com a exportação para ser renderizado na tela.
export default NascimentoPicker