/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ajax from './ajax' 
import DealsList from './DealsList'


export default class App extends Component {
  state = {
    deals:[],
  }
  async componentDidMount(){
    const deals = await ajax.fetchInitialdeals();
    this.setState(() => {return {deals}}

    )
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.deals.length > 0 ?
          <DealsList deals={this.state.deals}/>:
          <Text style={[ styles.header]}> BakeSale </Text> 
          
        }
        
        
      </View>
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
  header:{
    fontSize: 40
  },
});
