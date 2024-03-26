import * as S from "./style.jsx";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import { useState } from "react";
import { TextInput } from "react-native";

export default function Criar() {
//   const valorInicial = [{ id: "homens", value: 1 }];
//   const [numHomens, setNumHomens] = useState(valorInicial);
//   const numeroMaximo = [{ id: "homens", label: "Homens:", min: 0, max: 20 }];
  return (
    <S.Body>
      <Header />
      <Button label="Criar" />
      <S.CriarContainer>
        <S.Container>
          <S.Input placeholder="Nome do Xurras"></S.Input>
          <S.SubTitle>Quantidade de Pessoas</S.SubTitle>
          <S.SubContainer>
            <S.Column>
              <S.Label>Homens:</S.Label>
              <TextInput></TextInput>
            </S.Column>
            <S.Column>
              <S.Label>Homens:</S.Label>
            </S.Column>
            <S.Column>
              <S.Label>Homens:</S.Label>
            </S.Column>
          </S.SubContainer>
        </S.Container>
      </S.CriarContainer>
    </S.Body>
  );
}
