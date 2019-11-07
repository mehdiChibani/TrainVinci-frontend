/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StatusBar,TouchableOpacity,StyleSheet, Text, View,Alert,Image} from 'react-native';
import { Container, Header, Content, Icon,Left,Right, Body,Card,CardItem,Form,Item,Input,Label } from 'native-base';
const axios = require('axios');
import config from './functions/config'
export default class Acceuil extends Component{
  state={
    stages:[]
}
  componentWillMount(){
    axios.get(config.apiURL+'stages')
  .then(response=> {
    // handle success
   // Alert.alert(response.data.data[0].periode);
    this.setState({stages:response.data.data})
  })
  .catch(error=> {
    // handle error
    Alert.alert('jvjghhgdj'+error);
  })
  }
  checkVal(param){
    if(param==null){
      return(
        <Text style={{fontSize:14,fontWeight:'bold',color:'#c4402f',marginRight:3}}>non affectée</Text>
      )

    }else return(
      <Text style={{fontSize:14,fontWeight:'bold',color:'#c4402f',marginRight:3}}>affectée</Text>
    )
  }
  render() {
    let convsUI=this.state.stages.map((stage) => {
      return (
        <TouchableOpacity  key={stage.id}
        onPress={() => this.props.navigation.navigate('StagesDetails',{itemId: stage.id})}
        >
        <CardItem>
        <View> 
        <Image 
        style={{height:90,width:90}}
        source={require('./assets/image/working.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
          <Text  style={{marginRight:3}}>{stage.entreprise_concernee}</Text>
          <Text style={{fontSize:15,color:'grey',marginRight:3}}>{stage.periode}</Text>
          {this.checkVal(stage.idEncadrant)}
        </Body>
        </CardItem></TouchableOpacity>
        
      );
    });
    return (
      <Container>
       <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]}>
        <View style={{flexDirection:'row'}}>
            <Icon name='md-menu' style={{color:'white',marginLeft:5,marginTop: 8,}}
            onPress={()=> this.props.navigation.openDrawer()}
            />
            <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>Stages</Text>
        </View>
        <Right>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('FormsAddStage')}
        >
            <Image source={require('./assets/image/addwhite.png')} style={{height:35,width:35}}/>
            </TouchableOpacity>
        </Right>
        
       </Header>
       <View style={{height:60,backgroundColor:'#ff5c33'}}>
        <TouchableOpacity>
        <Card>
            <CardItem>
            <Icon active name="search" />
              <Body><Text>Chercher un Stages</Text></Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
        </Card></TouchableOpacity>
        </View>
        <Content>
        <Card>
        {convsUI}
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
  androidHeader: {
  ...Platform.select[{
    android:{
        paddingTop:StatusBar.currentHeight 
    }
  }]
  },
});
