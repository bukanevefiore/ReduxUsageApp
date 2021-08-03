import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';


const Primary = () => {

    const [text, setText] = useState('');
    const [textUserName, setUserName] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {

        dispatch({type: 'ADD_NAME', payload: {name: text}});
        //console.log(text);
    };

    const handleRemove = () => {
        dispatch({type: 'CLEAN_LIST'});
    };

    const handleUserName = () => {
        dispatch({type: 'SET_USERNAME', payload: {userName: textUserName}});
    }

    return (
        <SafeAreaView>
            <View style={{ margin: 10, backgroundColor: 'white', borderRadius: 10, paddingLeft: 10 }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder='isim girin..' />
            </View>
            <View style={{ margin: 10, backgroundColor: 'white', borderRadius: 10, paddingLeft: 10 }}>
                <TextInput
                    value={textUserName}
                    onChangeText={setUserName}
                    placeholder='username girin..' />
            </View>
            <Button
                title='Listeye Ekle'
                onPress={handleAdd} />
                  <Button
                title='Listeyi Temizle'
                onPress={handleRemove} />
                  <Button
                title='Username ekle'
                onPress={handleUserName} />
        </SafeAreaView>
    )
}

export default Primary;