import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

function Secondary() {

    const list = useSelector(s => s.nameList);
    const myUsername = useSelector(s => s.userName);
    console.log(list);

    return (
        <SafeAreaView>
            <Text style={{margin: 20, fontSize: 25}}>Secondary List</Text>
            
            <FlatList style={{margin: 25}}
            keyExtractor={(_, index) => index.toString()}
            data= {list}
            renderItem= {({item}) => <Text style={{fontSize: 20}}>{item}</Text>} />
            <Text style={{margin: 20, fontSize: 35}}>UserName: {myUsername}</Text>
        
        </SafeAreaView>
    )
}

export default Secondary;