import {View, Text, StyleSheet, Image} from 'react-native';

export default function Header(){
    return (
        <View style = {style.Body}>

            {/* container da imagem */}''
            <View style = {style.contImage}>

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

})