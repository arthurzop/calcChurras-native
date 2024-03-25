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
    backgroundColor: "#d90429",
    width: 120,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
