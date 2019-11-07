/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, TextInput,StyleSheet, Text, View,Alert,Image} from 'react-native';
import { Container, Header, Content, Button,Right,Card,CardItem,Badge } from 'native-base';

const axios = require('axios');

export default class Auth extends Component{


  render() {
    return (
<Container>
       <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]}>
        
       </Header>
       
       <View style={{backgroundColor:'#ff704d',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
       <Image 
        style={{height:150,width:300}}
        source={require('./assets/image/vinciLogo.png')}/>
             <TextInput
             style={{backgroundColor:'white',height:50,width:'70%',marginTop:10}}
            placeholder={'Login'}
            />
            <TextInput
            style={{backgroundColor:'white',height:50,width:'70%',marginTop:10}}
            placeholder={'Password'}
            secureTextEntry={true}
            />
            <Button iconLeft primary
            style={{marginLeft:150,marginTop:10,width:'35%'}}
          onPress={()=>this.props.navigation.navigate('Acceuil')}
          >
            <Text style={{color:'white',fontSize:17}}>{'  '}Se connecter{'  '}</Text>
          </Button>
        </View></Container>
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
