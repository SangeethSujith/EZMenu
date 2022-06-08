/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import React,{useState} from 'react';
import Design from '../styles/Design';
import {listdata} from '../other/Data';
import Listitems from '../other/Listitems';
const Bookfood = () => {
    const [open,setOpen] = useState(false);
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
      <TextInput style={Design.search} placeholder="Search Here" />
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
        <View style={Design.orderbtn}>
            <TouchableOpacity style={Design.orderbtnleft} onPress={()=>setOpen(true)}>
                <Text style={Design.ordertxt}>Add To Cart</Text>
                <Image style={{height:28,width:28}} source={require('../images/cart.png')}/>
            </TouchableOpacity>
            <Modal transparent visible={open} animationType="fade">
                <View style={Design.modalcontainer}>
                    <View style={Design.modal}>
                    <View style={Design.modalhead}>
                        <Text style={Design.h1m}>Alert</Text>
                    </View>
                    <View style={Design.modalbtm}>
                            <Text style={Design.h2c}>Your Order is about to be placed</Text>
                            <TouchableOpacity style={Design.modalbutton} onPress={()=>setOpen(false)}>
                            <Text style={Design.h2c}>Cancel</Text>
                            </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={Design.orderbtnright}>
                <Text style={Design.ordertxt}>View Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bookfood;
