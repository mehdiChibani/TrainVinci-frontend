/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,Alert} from 'react-native';
import { Container, Header, Content, Icon,Right ,Button,Item,Label,Input,Card,Form,DatePicker} from 'native-base';
import config from './functions/config'

const axios = require('axios');

export default class FormsAddStage extends Component{
  state={
    sujet:null,
    entrep:null,
    periode:null,
    date:null
}
  add(){
    axios.post(config.apiURL+'stages', { periode: this.state.periode, sujet:this.state.sujet,entreprise_concernee:this.state.entrep})
  .then(response=()=>this.props.navigation.navigate('Acceuil')
)
  .catch(error=> {
    // handle error
    Alert.alert('jvjghhgdj'+error);
  })
   
  }
  render() {
  
    return (
        <Container>
        <Header style={[{backgroundColor:'#ff704d',borderBottomColor:'#ff471a'},styles.androidHeader]} span>
         <View style={{flexDirection:'row'}}>
             <Icon name='md-menu' style={{color:'white',marginLeft:5,marginTop: 8,}}
             onPress={()=> this.props.navigation.openDrawer()}
             />
             <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop: 8}}>Ajouter un stage</Text>
         </View>
         <Right>
             <Image source={require('./assets/image/pomme.png')} style={{height:35,width:35}}/>
         </Right>
         <Image source={require('./assets/image/vincilohhgo1.png')} style={{height:80,width:200,position:'absolute',marginTop:80}}/>
        </Header>
        <Content>
        <Card style={{marginTop:40}}>
        <Form>

        <View style={{flexDirection:'row'}}>
        <Button light style={{marginLeft:6}}>
            <Text style={{fontSize:15}}>{' '} Periode : {' '}</Text>
          </Button>
          <TextInput
            placeholder={'2 mois et 15 jours'}
            onChangeText={(periode) => this.setState({periode})}/>
        </View>
            <View style={{flexDirection:'row'}}>
        <Button light style={{marginLeft:6}}>
            <Text style={{fontSize:15}}>{' '} Entreprise Concernée : {' '}</Text>
          </Button>
          <TextInput
            placeholder={'ISVIRT'}
            onChangeText={(entrep) => this.setState({entrep})}
            /></View>
                   <Button light style={{marginLeft:6}}>
                   <Text style={{fontSize:20}}>{' '} Sujet : {' '}</Text>
            
          </Button>
            <TextInput
            placeholder={'Analyse,conception et realisation d\'une application mobile'}
              multiline={true}
              style={{marginLeft:5}}
              onChangeText={(sujet) => this.setState({sujet})}
              />
              <View style={{flexDirection:'row'}}>
        <Button light style={{marginLeft:6}}>
            <Text style={{fontSize:15}}>{' '} Date du Début : {' '}</Text>
          </Button>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2000, 1, 1)}
            maximumDate={new Date(2050, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="choisir une date"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(date) => this.setState({date})}
            disabled={false}

            />
            </View>
          </Form>
        </Card>
        <View style={{marginLeft:100,marginTop:15}}>
          <Button iconLeft warning
          onPress={()=>this.add()}
          >
            <Icon name='add' />
            <Text style={{color:'white'}}>{' '}Ajouter le stage{'  '}</Text>
          </Button>
          </View>  
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
