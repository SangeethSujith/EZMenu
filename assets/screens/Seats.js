/* eslint-disable prettier/prettier */
import {Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import Design from '../styles/Design';
import { Picker } from '@react-native-picker/picker';
import { windowwidth } from '../styles/Dimentions';
const Seats = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const[currentTime,setCurrentTime]=useState('')
    useEffect(()=>{
        var hours=new Date().getHours()
        var min=new Date().getMinutes()
        setCurrentTime(
            hours+':'+min
        )
    }, [])
    const [currentDate, setCurrentDate]=useState('')
    useEffect(()=>{
        var date=new Date().getDate()
        var month=new Date().getMonth()+1
        var year=new Date().getFullYear()
        setCurrentDate(
            date+'-'+month+'-'+year
        )
    }, [])
    return (
    <View style={Design.container2}>
      <Text style={Design.hotelname1}>Jumeirah Beach Hotel</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginBottom:5}}>
        <View>
            <Text style={Design.regulartext}>Welcome,</Text>
            <Text style={Design.h2c}>User</Text>
        </View>
        <View>
        <Text style={Design.regulartext}>{currentDate}</Text>
        <Text style={Design.regulartext}>{currentTime}</Text>
        </View>
        </View>
        <View style={{borderRadius:30,borderColor:'#D91C10',borderWidth:2,marginBottom:5,}}>
        <Picker
          //ref={pickerRef}
          style={{width:windowwidth / 2}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
      }>
          <Picker.Item label="Beach View" value="beach" />
          <Picker.Item label="Sunset View" value="sun" enabled/>
      </Picker>
      </View>
<ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Bookfood')} style={{paddingTop:15}}>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>1</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>2</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>3</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>4</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>5</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>6</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>7</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>8</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableg.png')}/>
          <Text>9</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>10</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>11</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>12</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableg.png')}/>
          <Text>13</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>14</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>15</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>16</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableg.png')}/>
          <Text>17</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>18</Text>
          </View>
      </View>
      <View style={Design.tableview}>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>19</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>20</Text>
          </View>
          <View style={Design.singletable}>
          <Image style={Design.tableimg} source={require('../images/tableo.png')}/>
          <Text>21</Text>
          </View>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Seats;
