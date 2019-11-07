/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, ProgressBarAndroid,StyleSheet, Text, View,Alert,Image,Br} from 'react-native';
import { Container, Header, Content, Icon,Right, CardItem ,Card,Button} from 'native-base';
import config from './functions/config'
const axios = require('axios');

export default class StagesDetails extends Component{
  state={
    stage:[],
}
  componentWillMount(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    axios.get(config.apiURL+'stagesInfo/'+itemId)
  .then(response=> {
    // handle success
    //Alert.alert(response.data.data[0].nom);
    this.setState({stage:response.data.data})
  })
  .catch(error=> {
    // handle error
    Alert.alert('jvjghhgdj'+error);
  })
  }

  render() {
    let notes=this.state.stage.map((stage) => {
      return(
        
        <Text style={{fontSize:15,color:'grey',marginLeft:7,marginTop:4}} key={stage.id}>
          {stage.nom}{' '}{stage.prenom}
        </Text>
        );
      });
      let ste=this.state.stage.slice(1).map((stage) => {
        return(
          <View key={stage.id}>
          <CardItem>
           <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }}
        />
              <Text style={{fontSize:20}}>
                période :
              </Text>
              <Text style={{fontSize:15,color:'red',marginLeft:7}}>
                {stage.periode}
              </Text>
           </CardItem>
           <ProgressBarAndroid
           style={{marginLeft:4,marginRight:6}}
          styleAttr="Horizontal"
          indeterminate={false}
          color='green'
          progress={0.5}
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }}
        />
        <CardItem>
              <Text style={{fontSize:20}}>
                Sujet :
              </Text>
           </CardItem>
           <CardItem>
           <Text style={{fontSize:17,color:'gray',marginLeft:7}}>
           {stage.sujet}
              </Text></CardItem>
              <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }}
        />
         <CardItem>
              <Text style={{fontSize:20}}>
                Année scolaire des étudiants concernée :
              </Text>
           </CardItem>
           <CardItem>
           <Text style={{fontSize:15,color:'grey',marginRight:5}}>
                4 éme année
              </Text></CardItem></View>
          );
        });
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
       <Image source={require('./assets/image/internshipDiagram.jpg')} style={{ height: '40%', width: '100%' ,resizeMode:'cover'}} />
       <Content>
         <Card>
         <CardItem>
              <Text style={{fontSize:20}}>
                Etudiants concernée :
              </Text>
              
                {notes}
              
           </CardItem>
           

          {ste}

         </Card>
         <View style={{flexDirection:'row'}}>
         <Button iconLeft warning>
            <Icon name='add' />
            <Text style={{color:'white'}}>{' '}Affecter un encdrant {'  '}</Text>
          </Button>
          <Button iconLeft primary
          style={{marginLeft:40}}
          >
            <Icon name='add' />
            <Text style={{color:'white'}}>{' '}Ajouter une convention{'  '}</Text>
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
