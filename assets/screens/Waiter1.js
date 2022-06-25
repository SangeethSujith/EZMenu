/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import {seatdata} from '../other/Data';
import Design from '../styles/Design';
import {windowheight} from '../styles/Dimentions';
const Waiter1 = ({navigation}) => {
    const [seatno,setseatno] = useState('');
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',paddingTop:15}}>
      <Text style={Design.hotelname1}>Waiter Name</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 5,
        }}>
      <View style={{marginTop: 15, height: windowheight / 1.3}}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={3}
          keyExtractor={item => item.id}
          data={seatdata}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Bookfood',{seatno:item.id})}>
                            <View style={Design.tableview}>
                                    <Image style={Design.tableimg} source={item.seat} />
                                    <View style={{position:'absolute',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={Design.black}>{item.id}</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
          )}
        />
        </View>
  </View>
  </View>
  );
};

export default Waiter1;
