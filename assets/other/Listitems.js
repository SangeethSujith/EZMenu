import {Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Listitems = ({image, title, price}) => {
  const [number, setNumber] = useState(0);
  return (
    <View
      style={{
        width:'90%',
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent:'space-between',
        marginBottom: 20,
        backgroundColor:'#fff',
        paddingHorizontal:30,
        paddingVertical:15,
        borderRadius:20,
      }}>
      <View>
        <View>
          <Text style={{ paddingBottom:5,fontSize: 16, color: '#000',fontFamily:'poppinsregular'}}>
            {title}
          </Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
              onPress={() => setNumber(number - 1)}
              style={{
                height: 33,
                width: 33,
                borderWidth: 1,
                borderColor: '#D91C10',
                alignItems: 'center',
                justifyContent:'center',
                borderRadius:20,
              }}>
              <Text style={{fontFamily:'poppinsmedium',fontSize:18,color:'#000'}}>-</Text>
            </TouchableOpacity>
            <Text style={{marginHorizontal:5,fontFamily:'poppinsmedium',fontSize:18,color:'#000'}}>{number}</Text>
            <TouchableOpacity
              onPress={() => setNumber(number + 1)}
              style={{
                height: 33,
                width: 33,
                borderWidth: 1,
                borderColor: '#D91C10',
                alignItems: 'center',
                justifyContent:'center',
                borderRadius:20,
              }}>
              <Text style={{fontFamily:'poppinsmedium',fontSize:18,color:'#000'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{alignItems:'center',}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#2A9A02',
            fontFamily: 'poppinsregular',
            fontSize: 15,
            paddingBottom:9
          }}>
          AED {price}
        </Text>
        <Image style={{height: 33, width: 84}} source={image} />
      </View>
    </View>
  );
};

export default Listitems;
