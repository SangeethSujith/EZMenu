/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {windowheight} from './Dimentions';
const Design = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tophalf: {
    height: windowheight / 2,
    paddingTop: 30,
    paddingHorizontal:30,
    width: '100%',
    justifyContent:'center',
  },
  bottomhalf: {
    height: windowheight / 2,
    width: '100%',
    alignItems: 'center',
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
  },
});

export default Design;
