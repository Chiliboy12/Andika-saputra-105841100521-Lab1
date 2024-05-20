import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Image1 = () => {
    return (
        <>
        <Image source={require('./assets/gangang.png')}
        style={{
            width: 300,
            height: 300,
            alignContent: 'center',
            justifyContent: 'flex-start',
            marginLeft: "auto",
            marginRight: "auto"}}></Image>

    
        </>
    );
}

export default Image1

