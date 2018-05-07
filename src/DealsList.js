import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types'
import DealItem from './DealItem'

export default class DealsList extends Component{
    static propTypes ={
        deals: PropTypes.array.isRequired,

    }
    render(){
        return(
          <View style={styles.list}>
            <FlatList data={this.props.deals}
                renderItem={({item}) => 
                   <DealItem dealItem={item}/>
                } >
            </FlatList> 
              </View>  
        );
    }
}

const styles = StyleSheet.create({
    list:{
        backgroundColor:'#eee',
        flex:1,
        width:'100%',
        paddingTop:50
    },
})