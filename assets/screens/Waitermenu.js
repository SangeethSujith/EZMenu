/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Modal,
    FlatList,
    ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Design from '../styles/Design';
import { listdata } from '../other/Data';
import Waiterlist from '../other/Waiterlist';
import React, { useState } from 'react';
import { windowwidth } from '../styles/Dimentions';

const Waitermenu = ({ navigation }) => {
    const route=useRoute();
    const [open, setOpen] = useState(false);
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
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Beverages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Snacks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Juice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Arabian</Text>
                </TouchableOpacity>
                    </ScrollView>
            </View>
            <TextInput style={Design.search} placeholder="Search Here" />
            <View style={Design.listcontain}>
                <FlatList
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    data={listdata}
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
                    onPress={() => navigation.navigate('Customer')}>
                    <Text style={Design.white}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Waitermenu;
