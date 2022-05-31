/* eslint-disable prettier/prettier */
import {Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import Design from '../styles/Design';
const Seats = ({navigation}) => {

  return (
    <View style={Design.container2}>
      <Text style={Design.hotelname1}>Jumeirah Beach Hotel</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginBottom:5,}}>
        <View>
            <Text style={Design.regulartext}>Welcome,</Text>
            <Text style={Design.h2c}>User</Text>
        </View>
        <View>
        <Text style={Design.regulartext}>31-05-2022</Text>
        <Text style={Design.regulartext}>12:00PM</Text>
        </View>
        </View>      
<ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Bookfood')}>
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
