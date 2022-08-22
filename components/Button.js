import React from 'react'
import { TouchableOpacity , Text , StyleSheet} from 'react-native'
import { create } from 'react-test-renderer'
const Button = (props) => {
    return(
        <>
        <TouchableOpacity onPress={props.onPress}
        disabled={props.disabled}
        style={[styles.Button,{...props.externalStyle}]}>
            <Text   style={[{borderRightWidth: 1, textAlign: 'center', fontSize: 35},{...props.style2}]}>{props.name}</Text>
        </TouchableOpacity>
</>
    )
}
const styles = StyleSheet.create({
    Button:{
    borderRightWidth: 1,
    width: '15%',
    height: 60,
    borderBottomWidth: 1,}
})
export default Button ;