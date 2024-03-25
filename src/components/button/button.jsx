import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Button() {
  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button}>
        <Text style={style.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#d90429',
        width: 100,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical:   5,
        borderRadius: 5
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})