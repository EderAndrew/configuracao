/*
App Configuração V1.0

Author:Eder Andrew
Tela de iniciação do aplicativo. Direciona para o navegador principal que centraliza as telas no formato stackNavigator
*/
import { createAppContainer } from 'react-navigation'

import MainNavigator from './src/navigators/MainNavigator'

export default createAppContainer(MainNavigator)


