import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Button from './Button';
export default Input = props => {
  const [valuee, setValuee] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  //bolean
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);
  const [bool5, setBool5] = useState(false);
  const [bool6, setBool6] = useState(false);
  const [bool7, setBool7] = useState(false);
  const [bool8, setBool8] = useState(false);
  const [bool9, setBool9] = useState(false);
  // For msg
  const [boolmsg, setBoolMsg] = useState(false);
  // For correctans
  const [correctans1 , setCorrectAns1] = useState(false)
  const [correctans2, setCorrectAns2] = useState(false)
  const [correctans3, setCorrectAns3] = useState(false)
  const [correctans4, setCorrectAns4] = useState(false)
  const [correctans5, setCorrectAns5] = useState(false)
  const [correctans6, setCorrectAns6] = useState(false)
  const [correctans7, setCorrectAns7] = useState(false)
  const [correctans8, setCorrectAns8] = useState(false)
  const [correctans9, setCorrectAns9] = useState(false)
  const press1 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue1('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue1('O');
      } else {
        setValuee('O');
        setValue1('O');
      }
    }
    setBool1(true);
  };
  const press2 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue2('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue2('O');
      } else {
        setValuee('O');
        setValue2('O');
      }
    }
    setBool2(true);
  };

  const press3 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue3('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue3('O');
      } else {
        setValuee('O');
        setValue3('O');
      }
    }
    setBool3(true);
  };

  const press4 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue4('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue4('O');
      } else {
        setValuee('O');
        setValue4('O');
      }
    }
    setBool4(true);
  };

  const press5 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue5('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue5('O');
      } else {
        setValuee('O');
        setValue5('O');
      }
    }
    setBool5(true);
  };

  const press6 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue6('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue6('O');
      } else {
        setValuee('O');
        setValue6('O');
      }
    }
    setBool6(true);
  };

  const press7 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue7('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue7('O');
      } else {
        setValuee('O');
        setValue7('O');
      }
    }
    setBool7(true);
  };

  const press8 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue8('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue8('O');
      } else {
        setValuee('O');
        setValue8('O');
      }
    }
    setBool8(true);
  };

  const press9 = () => {
    if (valuee == 'O') {
      setValuee('X');
      setValue9('X');
    } else {
      if (valuee == 'X') {
        setValuee('O');
        setValue9('O');
      } else {
        setValuee('O');
        setValue9('O');
      }
    }
    setBool9(true);
  };
  useEffect(() => {
    if (
      (value1 == 'O' && value4 == 'O' && value7 == 'O') ||
      (value1 == 'O' && value2 == 'O' && value3 == 'O') ||
      (value1 == 'O' && value5 == 'O' && value9 == 'O') ||
      (value3 == 'O' && value6 == 'O' && value9 == 'O') ||
      (value3 == 'O' && value5 == 'O' && value7 == 'O') ||
      (value2 == 'O' && value5 == 'O' && value8 == 'O') ||
      (value4 == 'O' && value5 == 'O' && value6 == 'O') ||
      (value7 == 'O' && value8 == 'O' && value9 == 'O')
    ) {
      setBoolMsg(true);
      setBool1(true);
      setBool2(true);
      setBool3(true);
      setBool4(true);
      setBool5(true);
      setBool6(true);
      setBool7(true);
      setBool8(true);
      setBool9(true);
    } else if (
      (value1 == 'X' && value4 == 'X' && value7 == 'X') ||
      (value1 == 'X' && value2 == 'X' && value3 == 'X') ||
      (value1 == 'X' && value5 == 'X' && value9 == 'X') ||
      (value3 == 'X' && value6 == 'X' && value9 == 'X') ||
      (value3 == 'X' && value5 == 'X' && value7 == 'X') ||
      (value2 == 'X' && value5 == 'X' && value8 == 'X') ||
      (value4 == 'X' && value5 == 'X' && value6 == 'X') ||
      (value7 == 'X' && value8 == 'X' && value9 == 'X')
    ) {
      setBoolMsg(true);
      setBool1(true);
      setBool2(true);
      setBool3(true);
      setBool4(true);
      setBool5(true);
      setBool6(true);
      setBool7(true);
      setBool8(true);
      setBool9(true);
    }
    if((value1 == 'O' && value4 == 'O' && value7 == 'O') || (value1 == 'X' && value4 == 'X' && value7 == 'X')){
      setCorrectAns1(true)
      }
    if((value1 == 'O' && value2 == 'O' && value3 == 'O') || (value1 == 'X' && value2 == 'X' && value3 == 'X')){
setCorrectAns2(true)
    }
    if( (value2 == 'X' && value5 == 'X' && value8 == 'X') ||  (value2 == 'O' && value5 == 'O' && value8 == 'O')){
      setCorrectAns3(true)
    }
    if( (value3 == 'X' && value6 == 'X' && value9 == 'X') ||  (value3 == 'O' && value6 == 'O' && value9 == 'O')){
      setCorrectAns4(true)
    }
    if(((value4 == 'X' && value5 == 'X' && value6 == 'X') || (value4 == 'O' && value5 == 'O' && value6 == 'O'))){
      setCorrectAns5(true)
    }
    if(((value7 == 'X' && value8 == 'X' && value9 == 'X') || (value7 == 'O' && value8 == 'O' && value9 == 'O'))){
      setCorrectAns6(true)
    }
    if(((value1 == 'X' && value5 == 'X' && value9 == 'X') || (value1 == 'O' && value5 == 'O' && value9 == 'O'))){
      setCorrectAns7(true)
    }
    if(((value3 == 'X' && value5 == 'X' && value7 == 'X') || (value3 == 'O' && value5 == 'O' && value7 == 'O'))){
      setCorrectAns8(true)
    }
  }, [valuee]);

  const Reset = () => {
    setValue1('');
    setValue2('');
    setValue3('');
    setValue4('');
    setValue5('');
    setValue6('');
    setValue7('');
    setValue8('');
    setValue9('');
    setBool1(false);
    setBool2(false);
    setBool3(false);
    setBool4(false);
    setBool5(false);
    setBool6(false);
    setBool7(false);
    setBool8(false);
    setBool9(false);
    setBoolMsg(false);
    setCorrectAns1(false);
    setCorrectAns2(false);
    setCorrectAns3(false);
    setCorrectAns4(false);
    setCorrectAns5(false);
    setCorrectAns6(false);
    setCorrectAns7(false);
    setCorrectAns8(false);
    setCorrectAns9(false);
  };
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: '50%'}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            name={value1}
            disabled={bool1}
            onPress={press1}
            correctans1 ={correctans1}
            correctans2 ={correctans2}
            correctans7 ={correctans7}
          />
          <Button
            name={value2}
            disabled={bool2}
            onPress={press2}
            correctans2 ={correctans2}
            correctans3 ={correctans3}
          />
          <Button
            name={value3}
            disabled={bool3}
            externalStyle={{borderRightWidth: 0}}
            onPress={press3}
            correctans2 ={correctans2}
            correctans4 ={correctans4}
            correctans8 ={correctans8}
            
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            name={value4}
            disabled={bool4}
            onPress={press4}
            correctans1 ={correctans1}
            correctans5 = {correctans5}
/>
          <Button
            name={value5}
            disabled={bool5}
            onPress={press5}
            boolmsg={boolmsg}
            correctans3 ={correctans3}
            correctans5 = {correctans5}
            correctans7 ={correctans7}
            correctans8 ={correctans8}
          />
          <Button
            name={value6}
            disabled={bool6}
            externalStyle={{borderRightWidth: 0}}
            onPress={press6}
            boolmsg={boolmsg}
            correctans4 ={correctans4}
            correctans5 = {correctans5}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            name={value7}
            disabled={bool7}
            externalStyle={{borderBottomWidth: 0}}
            onPress={press7}
            correctans1 ={correctans1}
            correctans6 ={correctans6}
            correctans8 ={correctans8}
          />
          <Button
            name={value8}
            disabled={bool8}
            externalStyle={{borderBottomWidth: 0}}
            onPress={press8}
            boolmsg={boolmsg}
            correctans6 ={correctans6}
            correctans3 ={correctans3}
          />
          <Button
            name={value9}
            disabled={bool9}
            externalStyle={{borderRightWidth: 0, borderBottomWidth: 0}}
            onPress={press9}
            boolmsg={boolmsg}
            correctans4 ={correctans4}
            correctans6 ={correctans6}
            correctans7 ={correctans7}
          />
        </View>
        <Button
          name={'Reset'}
          onPress={Reset}
          boolmsg ={boolmsg}
          externalStyle={{
            borderWidth: 1,
            width: '15%',
            height: 22,
            marginTop: '10%',
          }}
          style2={{textAlign: 'center', fontSize: 15 , color:"black"}}
        />
      </View>
      {boolmsg ? (
        <View
          style={{
            alignSelf: 'center',
            width: '50%',
            borderRadius: 12,
            height: 28,
            margin: '10%',
            backgroundColor: 'indianred',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {' '}
            {valuee} Won..!!
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

