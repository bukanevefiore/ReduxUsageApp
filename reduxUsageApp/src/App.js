/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

import UserProvider from './context/Provider';


const Tab = createBottomTabNavigator();

export default Routes = () => {
  return (
   <UserProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Primary' component={Primary}/>
        <Tab.Screen name='Secondary' component={Secondary}/>
      </Tab.Navigator>
    </NavigationContainer>
   </UserProvider>
  )
}






/*
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';


const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
     

    default:
      return state;
  }
}


export default () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex: 1}}>
      <First />
      <Second />
    </SafeAreaView>
    </Provider>
  )
}

const First = () => {

const counter = useSelector(selector => selector.counter);
const dispatch = useDispatch();

const handleAdd = () => {
  dispatch({type: 'UPDATE_COUNTER'});
}; 

  return (
    <View style={{flex: 1}}>
      <Text>First: {counter}</Text>
      <Button title='arttır' onPress={handleAdd} />
    </View>
  )
};

const Second = () => {

const counter = useSelector(selector => selector.counter);

  return (
    <View style={{flex: 1}}>
      <Text>Second: {counter}</Text>
    </View>
  )
};

*/





