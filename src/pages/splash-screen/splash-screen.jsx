import { View, Text, StyleSheet, Image } from "react-native";
import icon from "../../../assets/images/icon-white.svg";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {nav.navigate('home')}, 2000);
  });

  return (
    <View style={style.body}>
      <Image source={require("../../../assets/images/icon-white.svg")} />
      <View>
        <Text style={style.text1}>Calcula</Text>
        <Text style={style.text2}>Xurras</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: "#d90429",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 50,
  },
  text2: {
    color: "#FFF",
    fontSize: 40,
  },
});
