/**
 * MainStack é o comando central das telas do aplicativo
 * Importando as screens e direcionando com o createStackNavigator
 * 
 */
import { createStackNavigator } from 'react-navigation-stack'

//Inportando as telas para serem renderizadas
import Index from '../screens/Index'
import PersonData from '../screens/PersonData'
import FinancialData from '../screens/FinancialData'

const MainNavigator = createStackNavigator({
    //renderizando todas as telas 
    Index, 
    PersonData,
    FinancialData
})

//Para desabilitar as yellow box warning
console.disableYellowBox = true;
//Exportando para que o app possa iniciar o aplicativo
export default MainNavigator