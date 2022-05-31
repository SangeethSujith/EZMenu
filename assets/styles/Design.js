/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {windowheight} from './Dimentions';
const Design = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tophalf: {
    height: windowheight / 3,
    paddingHorizontal:30,
    width: '100%',
    justifyContent:'center',
  },
  bottomhalf: {
    height: windowheight / 3,
    width: '100%',
    justifyContent:'center',
    paddingHorizontal:30,
  },
  h1: {
    fontSize: 30,
    fontFamily: 'poppinsmedium',
    color: '#000',
    alignSelf:'center',
    marginVertical:20,
  },
  h2:{
    fontFamily:'poppinsmedium',
    color:'#000',
    fontSize:17,
    marginLeft:28,
    marginBottom:10,
  },
  regulartext:{
fontFamily:'poppinsregular',
fontSize:15,
color:'#000',
  },
  h2c:{
    fontFamily:'poppinsregular',
    color:'#000',
    fontSize:17,
  },
  or:{
    fontFamily:'poppinsmedium',
    color:'#000',
    fontSize:17,
    alignSelf:'center',
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#ECE7E9',
    backgroundColor: '#F0F3F8',
    width: '90%',
    height: 55,
    paddingHorizontal:25,
    fontSize:17,
    fontFamily:'poppinsmedium',
    alignSelf:'center',
    lineHeight:20,
    marginBottom:6,
  },
  btn:{
    width:'90%',
    backgroundColor:'#D91C10',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:12,
    height:56,
    marginTop:30,
    justifyContent:'center',
  },
  btntxt:{
    fontFamily:'poppinsregular',
    color:'#fff',
    fontSize:17,
  },
  //Seats.js Design
  container2:{
    flex:1,
    alignItems:'center',
    paddingTop:45,
  },
  hotelname1:{
    fontSize: 20,
    fontFamily: 'poppinsmedium',
    color: '#000',
    marginBottom:25,
  },
  tableview:{
    flexDirection:'row',
    marginVertical:5,
    marginHorizontal:5,
  },
  singletable:{
    alignItems:'center',
  },
  tableimg:{
    height:70,
    width:90,
  },
});

export default Design;
