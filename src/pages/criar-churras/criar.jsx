import * as S from "./style.jsx";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import { CheckBox } from "@rneui/base";
import { useState } from "react";

export default function Criar() {

  const [isChecked, setIsCkecked] = useState(true)
  // const toggleCheck = () => {setIsCkecked(!isChecked)}

  //   const valorInicial = [{ id: "homens", value: 1 }];
  //   const [numHomens, setNumHomens] = useState(valorInicial);
  //   const numeroMaximo = [{ id: "homens", label: "Homens:", min: 0, max: 20 }];

  return (
    <S.Body>
      <Header />
      <Button label="Criar" />
      <S.CriarContainer>
        <S.Container>
          <S.Input
            placeholder="Nome do Xurras"
            maxLength={20} />
          <S.SubTitle>Quantidade de Pessoas</S.SubTitle>
          <S.SubContainer>
            <S.Column>
              <S.Label>Homens:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0" placeholderTextColor='#ef233c' />
            </S.Column>
            <S.Column>
              <S.Label>Mulheres:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0" placeholderTextColor='#ef233c' />

            </S.Column>
            <S.Column>
              <S.Label>Crianças:</S.Label>
              <S.InputNumber
                maxLength={2}
                placeholder="0" placeholderTextColor='#ef233c' />
            </S.Column>
          </S.SubContainer>
          <S.Divider />
          <S.SubContainer>
            <S.SubTitle>Cortes</S.SubTitle>
            <CheckBox
              isChecked={isChecked}
              onPress={() => {setIsCkecked(!isChecked)}}
              checkedIcon='checkbox-outline'
              uncheckedColor="red"
              checkedColor="red"
              
            />
          </S.SubContainer>
        </S.Container>
      </S.CriarContainer>
    </S.Body>
  );
}