import { View, Text, StyleSheet, Image } from 'react-native';
import iconRed from '../../../assets/images/icon-red.png';
export default function Header(){
    return (
        <View style = {style.Body}>

            {/* container da imagem */}
            <View style = {style.contImage}>
            <Image
                style = {style.compImage}
                source={iconRed} />
            </View>

            {/* container da Logo */}
            <View style = {style.contLogo}>
                <Text>Calcula</Text>
                <Text>Xurras</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    contImage: {
        
        width: '50%',
        color: 'white',
    },
    contLogo: {
        width: '50%',
        color: 'white',
    },
    Body: {
        width: '50%',
        color: 'white',
    }
})