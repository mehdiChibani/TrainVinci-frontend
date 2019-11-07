/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, TouchableOpacity,ProgressBarAndroid,StyleSheet, Text, View,Alert,Image} from 'react-native';
import { Container,Body, Header, Content, Icon,Right, CardItem ,Card,Button} from 'native-base';

const axios = require('axios');

export default class ConvsDetail extends Component{

  state={
    valide:false
}
checkVal=()=>{
  if(this.state.valide==true){
    return(
      <Image source={require('./assets/image/ok.png')}/>
    )

  }else return(
    <Image source={require('./assets/image/notok1.png')}/>
  )
}
card=()=>{
  if(this.state.valide==true){
    return(
      <CardItem>
              <Text style={{fontSize:17,color:'red'}}>
                Convention Validée
              </Text>
           </CardItem>
    )

  }else return(
    <CardItem>
    <Button iconLeft success
    onPress={() =>this.setState({valide:true})}
    style={{marginLeft:110}}
    >
            <Icon name='checkmark' />
            <Text style={{color:'white',marginLeft:5}}>Valider la convention{' '}</Text>
          </Button></CardItem>
  )
}
  render() {
    
    return (
<Container>
       <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]}>
        <View style={{flexDirection:'row'}}>
            <Icon name='md-menu' style={{color:'white',marginLeft:5,marginTop: 8,}}
            onPress={()=> this.props.navigation.openDrawer()}
            />
            <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>Details du Stage</Text>
        </View>
        <Right>
            <Image source={require('./assets/image/pomme.png')} style={{height:35,width:35}}/>
        </Right>
       </Header>
       <Image source={require('./assets/image/handsSh.png')} style={{ height: '30%', width: '100%' ,resizeMode:'cover'}} />
       <Content>
         <Card>
         <CardItem>
              <Text style={{fontSize:17}}>
                Validation :
              </Text>
              <Body></Body>
              <Right>
              {this.checkVal()}
              </Right>
           </CardItem>  
         <CardItem>
              <Text style={{fontSize:17}}>
                Etudiants concerné(e) :
              </Text>
           </CardItem>
           <TouchableOpacity>
           <CardItem>
           <View style={{marginLeft:18}}> 
        <Image 
        style={{height:65,width:65,borderRadius:30}}
        source={require('./assets/image/menForprofil.jpg')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center',marginLeft:7}}>
          <Text style={{fontSize:16}}>Mehdi chibani </Text>
        </Body>
           </CardItem>
           </TouchableOpacity>
           <CardItem>
              <Text style={{fontSize:17}}>
                Entreprise Concernée : 
              </Text>
              <Text style={{fontSize:17 ,color:'#1a75ff'}}>
                 {" "}RNDFY
              </Text>
           </CardItem>
           <CardItem>
              <Text style={{fontSize:17}}>
                Sujet :
              </Text>
           </CardItem>
           <CardItem>
              <Text style={{fontSize:15}}>
                Analyse, Conception et réalisation d'une application mobile pour la vente des masques de soin de visage
              </Text>
           </CardItem>
           {this.card()}
         </Card>

           </Content></Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
