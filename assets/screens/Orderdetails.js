/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, View,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import Design from '../styles/Design';
import { food } from '../other/Data';
import { windowheight, windowwidth } from '../styles/Dimentions';
const Orderdetails = ({navigation}) => {
  return (
    <View style={{
        backgroundColor: '#fff',
        flex: 1}}>
      <View style={{marginTop:5,height:windowheight/1.26}}>
        <FlatList
         scrollEnabled={true}
         showsVerticalScrollIndicator={false}
         horizontal={false}
         keyExtractor={item => item.no}
        data={food}
        renderItem={({ item }) => (
            <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#D2D2D2',paddingVertical:12,paddingHorizontal:25}}>
                <Text style={Design.black}>{item.title}</Text>
                <Text style={Design.black}>{item.no}</Text>
            </View>
            )}
        />
        </View>
        <View style={{
            marginTop:10,
            justifyContent:'flex-end',
            alignSelf:'flex-end',
            flexWrap: 'wrap'}}>
         <View style={{ flexDirection: 'row', width: '75%', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Customer')} style={{ height: 44, borderWidth: 2, borderColor: '#d91c10', alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: '42%' }}>
                    <Text style={Design.black}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Orderdetails')} style={{ height: 44, backgroundColor: '#d91c10', alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: '42%' }}>
                    <Text style={Design.white}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};
export default Orderdetails;
