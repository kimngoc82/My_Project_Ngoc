import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class baitaptext extends Component {
    render (){
        return (
    <View style={styles.container}>
        <Text style={styles.dong1}>Bài Text!</Text>
        <Text style={styles.dong2}>Bài Tập Text</Text>
        <Text style={styles.dong3}>Bai 3</Text>
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
    dong1: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    dong2: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        },
    dong3:{
            textAlign: 'right',
            color:'#0000FF',
            margin: 20,
            fontSize: 50
        },
  });
  