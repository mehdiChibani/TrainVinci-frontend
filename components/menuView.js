import React from 'react';
import { StyleSheet, View, Touchable ,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text  } from 'native-base';
export default class MenuView extends React.Component {
  render() {
    return (
      <View style={{marginTop:10}}>
        <List>
          <ListItem noBorder style={{flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Acceuil')}>
              <Image source={require('./assets/image/home.png')} style={{height:30,width:30}}/>
              <Text style={{marginLeft:20,fontSize:17}}>Acceuil</Text> 
          </ListItem>
          <ListItem noBorder style={{flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Home')}>
              <Image source={require('./assets/image/documents.png')} style={{height:30,width:30}}/>
              <Text style={{marginLeft:20,fontSize:17}}>Conventions</Text> 
          </ListItem>
          <ListItem noBorder style={{flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Profile')}>
              <Image source={require('./assets/image/account.png')} style={{height:40,width:40}}/>
              <Text style={{marginLeft:20,fontSize:17}}>Mon Compte</Text> 
          </ListItem>

          <ListItem noBorder style={{flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('About')}>
              <Image source={require('./assets/image/about.png')} style={{height:30,width:30}}/>
              <Text style={{marginLeft:20,fontSize:17}}>A propos de Nous</Text> 
          </ListItem>
        </List>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
