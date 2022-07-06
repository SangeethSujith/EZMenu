/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Modal,
    FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { filter } from '../other/Data';
import Design from '../styles/Design';
import { listdata } from '../other/Data';
import Waiterlist from '../other/Waiterlist';
import React, { useState } from 'react';
import { windowwidth } from '../styles/Dimentions';

const Waitermenu = ({ navigation }) => {
    const route = useRoute();
    const [seatno,setseatno] = useState(route.params.seatno);
    const [open, setOpen] = useState(false);
    const [touch, settouch] = useState('1');
    const Switch = (id) =>{
        settouch(id);
    };
    const [search,setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(listdata);
  const [masterDataSource, setMasterDataSource] = useState(listdata);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
    return (
        <View style={Design.container2}>
            <Text style={Design.black}>Table {route.params.seatno}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 15,
                    marginHorizontal:15,
                }}>
            <FlatList
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    data={filter}
                    renderItem={({ item }) =>
                    (
                        <TouchableOpacity onPress={()=>Switch(item.id)} style={[Design.category,{backgroundColor:touch === item.id ? '#D91C10' : '#fff'}]}>
                    <Text style={[Design.black,{color:touch === item.id ? '#fff' : '#000'}]}>{item.cat}</Text>
                    </TouchableOpacity>
                    )}
                />
                </View>
            <TextInput style={Design.search}  onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        returnKeyType = {'next'} placeholder="Search Here" />
            <View style={Design.listcontain}>
                <FlatList
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    data={filteredDataSource}
                    renderItem={({ item }) =>
                    (
                        <Waiterlist
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                        />
                    )}
                />
            </View>
            <View style={Design.orderbtn}>
                <TouchableOpacity
                    style={Design.orderbtnleft}
                    onPress={() => setOpen(true)}>
                    <Text style={Design.white}>Add Comments</Text>
                    <Image
                        style={{ height: 28, width: 28 }}
                        source={require('../images/cart.png')}
                    />
                </TouchableOpacity>
                <Modal transparent visible={open} animationType="fade">
                    <View style={Design.modalcontainer}>
                        <View style={Design.modal}>
                            <View style={Design.modalhead}>
                                <Text style={Design.h1m}>Add Comments</Text>
                            </View>
                            <View style={Design.modalbtm}>
                                <TextInput style={{
                                    width: windowwidth / 1.4,
                                    backgroundColor: '#EAEAEA',
                                    height: 100,
                                    borderRadius: 20,
                                    fontFamily: 'poppinsregular',
                                    color: '#000',
                                    fontSize: 17,
                                    paddingHorizontal: 25,
                                }} placeholder="Comments" />
                                <TouchableOpacity
                                    style={Design.modalbutton}
                                    onPress={() => setOpen(false)}>
                                    <Text style={Design.black}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={Design.orderbtnright}
                    onPress={() => navigation.navigate('Customer',{seatno})}>
                    <Text style={Design.white}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Waitermenu;
