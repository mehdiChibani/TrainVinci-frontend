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
import { Container, Header, Content, Icon,Left,Right, Body,Card,CardItem } from 'native-base';
const axios = require('axios');
import config from './functions/config'
export default class Home extends Component{
  state={
    convs:[]
}
  componentWillMount(){
    axios.get(config.apiURL+'convsInfo')
  .then(response=> {
    // handle success
    //Alert.alert(response.data.data[0].valide);
    this.setState({convs:response.data.data})
  })
  .catch(error=> {
    // handle error
    Alert.alert('jvjghhgdj'+error);
  })
  }
  checkVal(param){
    if(param=='oui'){
      return(
        <Image source={require('./assets/image/ok.png')}/>
      )

    }else return(
      <Image source={require('./assets/image/notok1.png')}/>
    )
  }
  render() {
    let convsUI=this.state.convs.map((conv) => {
      return (
        <TouchableOpacity  key={conv.id}
        onPress={() => this.props.navigation.navigate('ConvsDetail',{itemId:conv.id})}
        >
        <CardItem>
        <View> 
        <Image 
        style={{height:75,width:90}}
        source={require('./assets/image/document.png')}/></View>
        <Body style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
          <Text>{conv.nom}{' '}{conv.prenom}</Text>
          <Text style={{fontSize:15,color:'grey'}}>{conv.entreprise_concernee}</Text>
          <Text style={{fontSize:14,fontWeight:'bold',color:'#c4402f'}}>{conv.periode}</Text>
        </Body>
        <Right>
            {this.checkVal(conv.valide)}
        </Right>
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
            <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>Conventions</Text>
        </View>
        <Right>
            <Image source={require('./assets/image/pomme.png')} style={{height:35,width:35}}/>
        </Right>
       </Header>
       <View style={{height:60,backgroundColor:'#ff5c33'}}>
        <TouchableOpacity>
        <Card>
            <CardItem>
            <Icon active name="search" />
              <Body><Text>Chercher une Convention</Text></Body>
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
