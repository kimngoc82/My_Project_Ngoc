import React, {Component} from 'react';
import {Image} from 'react-native'

export default class baitapanh extends Component {
render(){
    const imageSource = {
        uri:"https://cdp.azureedge.net/products/USA/TM/2018/MC/CRUISER/BONNEVILLE_T120_BLACK/50/JET_BLACK/2000000007.jpg"};
    return (
        <Image source={imageSource}
        style={{width: 400, height: 300}}
        ></Image>
    );
}
}