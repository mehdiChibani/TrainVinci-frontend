/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';
import { Container, Header, Content, Icon,Right ,Body,Button,Item,Label,Input,Card,CardItem,Form,DatePicker} from 'native-base';

const axios = require('axios');

export default class About extends Component{


  render() {
    return (
      <Container>
      <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]} span>
       <View style={{flexDirection:'row'}}>
           <Icon name='md-menu' style={{color:'white',marginLeft:5,marginTop: 8,}}
           onPress={()=> this.props.navigation.openDrawer()}
           />
           <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>A propos de Nous</Text>
       </View>
       <Right>
           <Image source={require('./assets/image/pomme.png')} style={{height:35,width:35}}/>
       </Right>
       <Image source={require('./assets/image/vincilohhgo1.png')} style={{height:80,width:200,position:'absolute',marginTop:80}}/>
      </Header>
      <Content>
      <Card style={{marginTop:40}}>
      <TouchableOpacity>
        <CardItem>
        <View> 
        <Image 
        style={{height:90,width:90}}
        source={require('./assets/image/fb1.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
          <Text  style={{marginRight:3,fontSize:17}}>Vinci </Text>
          <Text style={{fontSize:15,color:'blue',marginRight:3,marginTop:10}}>Consulter la page de l'école Vinci</Text>
        </Body>
        </CardItem></TouchableOpacity>
        <TouchableOpacity>
        <CardItem>
        <View> 
        <Image 
        style={{height:90,width:90}}
        source={require('./assets/image/gmail1.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center',marginRight:7}}>
          <Text  style={{fontSize:17,marginRight:3}}>Vinci </Text>
          <Text style={{fontSize:15,color:'red',marginRight:3,marginTop:10}}>Envoyer un mail à Vinci</Text>
        </Body>
        </CardItem></TouchableOpacity>
        <TouchableOpacity>
        <CardItem>
        <View> 
        <Image 
        style={{height:90,width:90}}
        source={require('./assets/image/linkedin.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
          <Text  style={{marginRight:3,fontSize:17}}>Vinci </Text>
          <Text style={{fontSize:15,color:'#0047b3',marginRight:3,marginTop:10}}>Consulter la page de l'école</Text>
        </Body>
        </CardItem></TouchableOpacity>
        <TouchableOpacity>
        <CardItem>
        <View> 
        <Image 
        style={{height:75,width:75}}
        source={require('./assets/image/phone.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
          <Text  style={{marginRight:3,fontSize:17}}>Vinci </Text>
          <Text style={{fontSize:15,color:'green',marginRight:3,marginTop:10}}>Contacter l'école</Text>
        </Body>
        </CardItem></TouchableOpacity>
        </Card>
        </Content>
        </Container>
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
