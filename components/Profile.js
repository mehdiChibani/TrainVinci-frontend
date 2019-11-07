/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert,Image} from 'react-native';
import { Container, Header, Content, Icon,Right,Card,CardItem,Badge } from 'native-base';

const axios = require('axios');

export default class Profile extends Component{


  render() {
    return (
<Container>
       <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]}>
        <View style={{flexDirection:'row'}}>
            <Icon name='md-menu' style={{color:'white',marginLeft:5,marginTop: 8,}}
            onPress={()=> this.props.navigation.openDrawer()}
            />
            <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>Mon Profile </Text>
        </View>
        <Right>
            <Image source={require('./assets/image/pomme.png')} style={{height:35,width:35}}/>
        </Right>
       </Header>
       <Image source={require('./assets/image/orangeAndBlue.jpg')} style={{ height: '35%', width: '100%' ,resizeMode:'cover'}} />
       <Image source={require('./assets/image/menForprofil.jpg')} style={{marginLeft:130,height:150,width:150,position:'absolute',marginTop:57,borderRadius:37.5}}/>
       <View style={{marginLeft:80,height:70,width:260,backgroundColor:'white',position:'absolute',marginTop:210,borderRadius:5}}>
        <Text style={{fontSize:25,marginLeft:5}}>Mehdi Chibani</Text>
        <Text style={{fontSize:20,marginLeft:5,marginTop:5}}>Etudiant en : 4 éme année</Text>
       </View>
       <Content>
         <Card>
           <CardItem style={{flexDirection: 'row'}}>
           <Image source={require('./assets/image/working.png')} style={{height:55,width:60}}/>
           <Text style={{fontSize:20}}>Stages :</Text>
           </CardItem>
           <CardItem style={{flexDirection: 'row'}}>
           <Text style={{fontSize:15, marginLeft:30}}>Déjà passés </Text>
           <Badge style={{ backgroundColor: '#3385ff',marginLeft:25}}>
            <Icon name="checkmark" style={{color:'white',marginLeft:20}}/>
           </Badge>
           </CardItem>
           <CardItem style={{flexDirection: 'row'}}>
           <Text style={{fontSize:15, marginLeft:30}}>En cours </Text>
           <Badge style={{ backgroundColor: '#ff751a',marginLeft:25}}>
            <Icon name="refresh" style={{color:'white',marginLeft:20}}/>
           </Badge>
           </CardItem>
           <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }}
        />
           <CardItem style={{flexDirection: 'row'}}>
           <Image source={require('./assets/image/document.png')} style={{height:55,width:60}}/>
           <Text style={{fontSize:20}}>Conventions :</Text>
           </CardItem>
           <CardItem style={{flexDirection: 'row'}}>
           <Text style={{fontSize:15, marginLeft:30}}>Validé </Text>
           <Badge style={{ backgroundColor: '#00e600',marginLeft:25}}>
            <Icon name="checkmark" style={{color:'white',marginLeft:20}}/>
           </Badge>
           </CardItem>
           <CardItem style={{flexDirection: 'row'}}>
           <Text style={{fontSize:15, marginLeft:30}}>Non Validés </Text>
           <Badge style={{ backgroundColor: '#ff471a',marginLeft:25}}>
            <Icon name="remove-circle-outline" style={{color:'white',marginLeft:20}}/>
           </Badge>
           </CardItem>
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
