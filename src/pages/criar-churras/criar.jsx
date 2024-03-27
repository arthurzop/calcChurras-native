import * as S from "./style.jsx";
import * as R from "react-native";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
// import { CheckBox } from "@rneui/base";
import { useState } from "react";
import Checkbox from "../../components/checkbox/checkbox.jsx";

export default function Criar() {
  const [checked, setChecked] = useState(false);

  //   const valorInicial = [{ id: "homens", value: 1 }];
  //   const [numHomens, setNumHomens] = useState(valorInicial);
  //   const numeroMaximo = [{ id: "homens", label: "Homens:", min: 0, max: 20 }];

  return (
    <S.Body>
      <Header />
      <Button label="Criar" />
      <S.CriarContainer>
        <S.Container>
          <S.Input placeholder="Nome do Xurras" maxLength={20} />
          <S.SubTitle>Quantidade de Pessoas</S.SubTitle>
          <S.SubContainer>
            <S.Column>
              <S.Label>Homens:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0"
                placeholderTextColor="#ef233c"
                keyboardType="numeric"
              />
            </S.Column>
            <S.Column>
              <S.Label>Mulheres:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0"
                placeholderTextColor="#ef233c"
                keyboardType="numeric"
              />
            </S.Column>
            <S.Column>
              <S.Label>Crianças:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0"
                placeholderTextColor="#ef233c"
                keyboardType="numeric"
              />
            </S.Column>
          </S.SubContainer>
          <S.Divider />
          <S.Container>
            <S.SubTitle>Cortes</S.SubTitle>
            <S.CheckboxContainer>
              <Checkbox label='Picanha'/>
              <Checkbox label='Cupim'/>
              <Checkbox label='Alcatra'/>
              <Checkbox label='Tulipa'/>
              <Checkbox label='Coração'/>
              <Checkbox label='Linguiça'/>
              <Checkbox label='Coxa'/>
              <Checkbox label='Costela'/>
            </S.CheckboxContainer>
          </S.Container>
        </S.Container>
      </S.CriarContainer>
    </S.Body>
  );
}
