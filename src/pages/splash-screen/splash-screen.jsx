import { View, Text, StyleSheet } from "react-native"

export default function SplashScreen(){
    return(
        <View style={style.body}>
            <Text>
                splashscreen
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    body: {
        width: '100%',
        backgroundColor: 'red'
    }
})