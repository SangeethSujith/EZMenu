/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, View, Text, TouchableOpacity, Modal } from 'react-native';
import Design from '../styles/Design';
import React, { useState } from 'react';
import { windowheight } from '../styles/Dimentions';

const Listitems = ({ image, title, price }) => {
    const [number, setNumber] = useState(0);
    const [visible, setvisible] = useState(false);
    const [c, setc] = useState(0);
    return (
        <View
            style={{
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                backgroundColor: '#fff',
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 20,
            }}>
            <View>
                <View>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: '#000', fontFamily: 'poppinsregular' }}>
                        {title}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => setNumber(number - 1)}
                            style={{
                                height: 33,
                                width: 33,
                                borderWidth: 1,
                                borderColor: '#D91C10',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000'}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5, fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>{number}</Text>
                        <TouchableOpacity
                            onPress={() => setNumber(number + 1)}
                            style={{
                                height: 33,
                                width: 33,
                                borderWidth: 1,
                                borderColor: '#D91C10',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#2A9A02',
                        fontFamily: 'poppinsregular',
                        fontSize: 15,
                        paddingBottom: 9,
                    }}>
                    AED {price}
                </Text>
                <TouchableOpacity onPress={() => setvisible(true)}>
                    <Image style={{ height: 33, width: 84 }} source={image} />
                </TouchableOpacity>
                <Modal transparent visible={visible} animationType="fade">
                    <View style={Design.modalcontainer}>
                        <View style={{
                            width: '80%',
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: windowheight / 4,
                            borderRadius: 20,
                        }}>
                            <View style={Design.modalhead}>
                                <Text style={Design.h1m}>Add/Select Condiments</Text>
                            </View>
                            <View style={Design.modalbtm}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderColor: '#D2D2D2', width: '100%' }}>
                                    <Text style={Design.black}>Cheese</Text>
                                    <View style={{ flexDirection: 'row'}}>
                                        <TouchableOpacity
                                            onPress={() => setc(c - 1)}
                                            style={{
                                                marginRight:5,
                                                height: 33,
                                                width: 33,
                                                borderWidth: 1,
                                                borderColor: '#D91C10',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={Design.black}>{c}</Text>
                                        <TouchableOpacity
                                            onPress={() => setc(c + 1)}
                                            style={{
                                                marginLeft:5,
                                                height: 33,
                                                width: 33,
                                                borderWidth: 1,
                                                borderColor: '#D91C10',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderColor: '#D2D2D2', width: '100%' }}>
                                    <Text style={Design.black}>Water   </Text>
                                    <View style={{ flexDirection: 'row'}}>
                                        <TouchableOpacity
                                            onPress={() => setc(c - 1)}
                                            style={{
                                                marginRight:5,
                                                height: 33,
                                                width: 33,
                                                borderWidth: 1,
                                                borderColor: '#D91C10',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={Design.black}>{c}</Text>
                                        <TouchableOpacity
                                            onPress={() => setc(c + 1)}
                                            style={{
                                                marginLeft:5,
                                                height: 33,
                                                width: 33,
                                                borderWidth: 1,
                                                borderColor: '#D91C10',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text style={{ fontFamily: 'poppinsmedium', fontSize: 18, color: '#000' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity style={Design.modalbutton} onPress={() => setvisible(false)}>
                                    <Text style={Design.black}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default Listitems;
