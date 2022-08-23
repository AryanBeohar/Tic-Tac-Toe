import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  const valuetrue  = props.correctans1
  const value2 = props.correctans2
  const value3 = props.correctans3
  const value4 = props.correctans4
  const value5 = props.correctans5
  const value6 = props.correctans6
  const value7 = props.correctans7
  const value8 = props.correctans8
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={[styles.Button, {...props.externalStyle}]}>

          <Text
            style={[
              {
                borderRightWidth: 1,
                textAlign: 'center',
                fontSize: 35,
                color:( valuetrue || value2 || value3 || value4 || value5 || value6 || value7 || value8) ? 'indianred' : 'black' ,
                
              },
              {...props.style2}
            ]}>
            {props.name}
          </Text>
        
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  Button: {
    borderRightWidth: 1,
    width: '15%',
    height: 60,
    borderBottomWidth: 1,
  },
});
export default Button;
