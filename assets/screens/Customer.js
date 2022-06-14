/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Design from '../styles/Design';
import { Picker } from '@react-native-picker/picker';
const Customer = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-evenly',
        }}>
      <View>
        <Text style={Design.h2}>Name</Text>
        <TextInput style={Design.input} />
      </View>
      <View>
      <Text style={Design.h2}>Mobile</Text>
        <TextInput style={Design.input} />
      </View>
      <View>
      <Text style={Design.h2}>Email</Text>
      <TextInput style={Design.input} />
      </View>
      <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={Design.h2}>Number Of Guests</Text>
        <Text style={{color: '#D91C10'}}> *</Text>
      </View>
      <View style={{
        borderColor: '#ECE7E9',
    backgroundColor: '#F0F3F8',
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    width: '90%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
    }}>
      <Picker
          //ref={pickerRef}
          style={{width:'100%'}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
      }>
          <Picker.Item label="1" value="1" enabled/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
      </Picker>
      </View>
      </View>
      <View style={{flexDirection:'row',width:'75%',justifyContent:'space-between',alignSelf:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Bookfood')} style={{height:44,borderWidth:2,borderColor:'#d91c10',alignItems:'center',justifyContent:'center',borderRadius:20,width:'42%'}}>
        <Text style={Design.regulartext}>Cancel</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{height:44,backgroundColor:'#d91c10',alignItems:'center',justifyContent:'center',borderRadius:20,width:'42%'}}>
        <Text style={Design.btntxt}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customer;
