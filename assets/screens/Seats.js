/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { seatdata } from '../other/Data';
import Design from '../styles/Design';
import { Picker } from '@react-native-picker/picker';
import { windowheight, windowwidth } from '../styles/Dimentions';
const Seats = ({ navigation }) => {
    const [seatno,setseatno]=useState("");
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        setCurrentTime(
            hours + ':' + min
        );
    }, []);
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurrentDate(
            date + '-' + month + '-' + year
        );
    }, []);
    return (
        <View style={Design.containernof}>
            <Text style={Design.hotelname1}>Jumeirah Beach Hotel</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 5 }}>
                <View>
                    <Text style={Design.black}>Welcome,</Text>
                    <Text style={Design.black}>User</Text>
                </View>
                <View>
                    <Text style={Design.black}>{currentDate}</Text>
                    <Text style={Design.black}>{currentTime}</Text>
                </View>
            </View>
            <View style={{ borderRadius: 30, borderColor: '#D91C10', borderWidth: 2, marginBottom: 5 }}>
                <Picker
                    //ref={pickerRef}
                    style={{ width: windowwidth / 2 }}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Beach View" value="beach" />
                    <Picker.Item label="Sunset View" value="sun" enabled />
                </Picker>
            </View>
            <View style={{ marginTop: 15, height: windowheight / 1.4 }}>
                <FlatList
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    data={seatdata}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Bookfood',{seatno:item.id})}>
                            <View style={Design.tableview}>
                                <View style={Design.singletable}>
                                    <Image style={Design.tableimg} source={item.seat} />
                                    <Text>{item.id}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default Seats;
