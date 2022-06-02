import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Design from '../styles/Design';
import {listdata} from '../other/Data';
import Listitems from '../other/Listitems';
const Bookfood = () => {
  return (
    <View style={Design.container2}>
      <Text style={Design.hotelname1c}>Jumeirah Beach Hotel</Text>
      <Text style={Design.h2c}>Table 6</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 15,
        }}>
        <TouchableOpacity style={Design.category}>
          <Text style={Design.h2c}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Design.category}>
          <Text style={Design.h2c}>Beverages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Design.category}>
          <Text style={Design.h2c}>Snacks</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={Design.search} placeholder="Search Here"/>
      <View style={Design.listcontain}>
        <ScrollView>
          <View>
            {listdata.map(item => (
              <Listitems
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Bookfood;
