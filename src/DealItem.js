import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList, Image
} from 'react-native';
import PropTypes from 'prop-types'
import {priceDisplay} from './util'

export default class DealItem extends Component{
    static propTypes ={
        dealItem: PropTypes.object.isRequired,
    }
    render(){
        const {dealItem} = this.props
        return(
            <View>
                <Image source={{uri: dealItem.media[0]}} style={{width: 400, height: 400}} />
                <View>
                    <Text>{dealItem.title}</Text>
                    <Text>{priceDisplay(dealItem.price)}</Text>
                    <Text>{dealItem.cause.name}</Text>
                </View>
            </View>                
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
       
        height:'100%',
        
    },
})