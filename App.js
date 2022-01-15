/**
 * Sample React Native useStateThirdExample
 * https://www.igtechso.com
 */

import React, {useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const App = () => {
  const [current,setCurrent] = useState(true)

  const onClickHeadling = () =>{
    setCurrent(false)
  }
  return(

    <View style ={styles.body}>
      <Text style = {styles.headertext}>IGT Development</Text>
      <Text style = {styles.text}>This is the Session Status: {current ? 'Current Session':'Next Session'} </Text>
      <Button title="Check Session" onPress={onClickHeadling}  color='#000000'></Button>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    body:{
      backgroundColor: '#58D68D',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    headertext:{
      fontSize: 32,
      color:'#000000',
    },
    text:{
      margin: 10,
      fontSize: 18,
      fontStyle: 'italic',
    }
  }
);

export default App;
