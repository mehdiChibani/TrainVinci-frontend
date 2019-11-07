import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image} from 'react-native';
import { createDrawerNavigator,DrawerItems,createStackNavigator } from 'react-navigation';
import Acceuil from './Acceuil';
import Home from './Home';
import Encadrement from './Encadrement';
import About from './About';
import MenuView from './menuView'
import ConvsDetail from './convsDetail'
import StagesDetails from './StagesDetails'
import FormsAddStage from './formsAddStage'
import Profile from './Profile'
import Auth from './Auth'
export const Routes = createDrawerNavigator({
  Auth:Auth,
  Home:Home,
  Acceuil:Acceuil,
  Encadrement:Encadrement,
  About:About,
  ConvsDetail:ConvsDetail,
  StagesDetails:StagesDetails,
  FormsAddStage:FormsAddStage,
  Profile:Profile
},
{
  contentComponent:props=>
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150,backgroundColor:'white'}}>
      <Image source={require('./assets/image/diploma.jpg')} style={{height:165,width:280}}/>
    </View>
    <ScrollView>
      <MenuView {...props}/>
    </ScrollView>
  </SafeAreaView>
},
{
  contentOptions: {
    labelStyle: { color: 'red' }
  }
}
);

