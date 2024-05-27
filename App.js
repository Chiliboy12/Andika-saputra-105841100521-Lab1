import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

 const ButtonEx = ()=> {
 return (
 <View style={{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', //kolom
    alignItems: 'flex-end', //baris
    flexDirection: 'row',
    marginBottom: 100,
  }}>
    <ButtonComponent backgroundColor='orange' text='Loin'/>
    <ButtonComponent backgroundColor='green' text='Register'/>
    </View>
 )
}
const ButtonComponent = ({ backgroundColor, text }) => {
  return (
    <View style={{
      backgroundColor: backgroundColor ,
      width: 150 ,
      height: 70 ,
      borderRadius: 10 ,
      marginLeft: 10 ,
    }}>
      <Text style={{
        color: 'white' ,
        textAlign: 'center' ,
        lineHeight: 70 ,
        fontSize: 25 ,
        fontWeight: 'bold' ,
      }}>
        {text}
</Text>
</View>
)
}


export default ButtonEx