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
    <View style={{
      backgroundColor: 'red',
      width: 140,
      height: 70,
      borderRadius: 10,
      marginRight: 10
    }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
        lineHeight: 70,
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        Login
      </Text>
    </View>
    <View style={{
      backgroundColor: 'blue',
      width: 140,
      height: 70,
      borderRadius: 10,
      marginLeft: 10
    }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
        lineHeight: 70,
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        Register
      </Text>
    </View>
 </View>
);

}
export default ButtonEx
