import * as R from "react-native";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

import iconRed from "../../../assets/images/icon-red.png";
import receita from '../../../assets/images/receita.png'

export default function Header() {
  const nav = useNavigation();
  return (
    <>
    <S.Body>
      <S.subContainer>
        {/* container da imagem */}
        <R.Pressable
          onPress={() => {
            nav.navigate("splash");
          }}
        >
          <R.Image source={iconRed} />
        </R.Pressable>
        {/* container da Logo */}
        <S.TextContainer>
          <S.Text1>Calcula</S.Text1>
          <S.Text2>Xurras</S.Text2>
        </S.TextContainer>
        <R.Pressable
          onPress={() => {
            nav.navigate("receita");
          }}
        >
          <R.Image source={receita} />
        </R.Pressable>
      </S.subContainer>
    </S.Body>
    <S.Divider/>
    </>
  );
}
