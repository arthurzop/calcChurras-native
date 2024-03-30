import * as R from "react-native";
import * as S from "./style.jsx";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

import icon from "../../../assets/images/icon-white.png";

export default function SplashScreen() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    Montserrat_Bold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_SemiBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat-Medium.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat-Medium.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat-Medium.ttf"),
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     nav.navigate("home");
  //   }, 2000);
  // });

  return (
    <S.Body>
      <R.Pressable
        onPress={() => {
          nav.navigate("home");
        }}
      >
        <S.Icon source={icon} />
      </R.Pressable>
      <S.TextContainer>
        <R.Text style={{ fontFamily: "Montserrat_Bold" }}>
          <S.Text1>CALCULA</S.Text1>
        </R.Text>
        <R.Text style={{ fontFamily: "Montserrat_SemiBold" }}>
          <S.Text2>XURRAS</S.Text2>
        </R.Text>
      </S.TextContainer>
    </S.Body>
  );
}
