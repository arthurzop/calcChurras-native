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
      <Image source={require("../../../assets/images/icon-white.png")} style={style.icon}/>
      <View style={style.textContainer}>
        <Text style={style.text1}>CALCULA</Text>
        <Text style={style.text2}>XURRAS</Text>
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
    flexDirection: 'row',
    gap: 5,
  },
  text1: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 50,
  },
  text2: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: '300'
  },
  textContainer: {
    display: 'flex',
    gap: -10
  },
  icon: {
    resizeMode: 'contain',
    width:  90,
    height: 60
  }
});
