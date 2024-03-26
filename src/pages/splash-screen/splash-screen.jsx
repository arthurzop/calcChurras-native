import * as R from 'react-native'
import * as S from './style.jsx'
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import icon from "../../../assets/images/icon-white.png";



export default function SplashScreen() {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.navigate("home");
    }, 2000);
  });

  return (
    <S.Body>
      <R.Pressable
        onPress={() => {
          nav.navigate("home");
        }}
      >
        <S.Icon source={icon}/>
      </R.Pressable>
      <S.TextContainer>
        <S.Text1>CALCULA</S.Text1>
        <S.Text2>XURRAS</S.Text2>
      </S.TextContainer>
    </S.Body>
  );
}

