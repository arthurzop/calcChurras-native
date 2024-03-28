import * as S from "./style.jsx";
import * as R from "react-native";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
// import { CheckBox } from "@rneui/base";
import { useState } from "react";
import Checkbox from "../../components/checkbox/checkbox.jsx";
import beef from "../../../assets/images/beef.png";
import beer from "../../../assets/images/beer.png";
import dish from "../../../assets/images/dish.png";
import fork from "../../../assets/images/fork.png";

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
          <S.Container>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={beef} /> Cortes
            </S.SubTitle>
            <S.CheckboxContainer>
              <Checkbox label="Picanha" />
              <Checkbox label="Cupim" />
              <Checkbox label="Alcatra" />
              <Checkbox label="Tulipa" />
              <Checkbox label="Coração" />
              <Checkbox label="Linguiça" />
              <Checkbox label="Coxa" />
              <Checkbox label="Costela" />
            </S.CheckboxContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={beer} /> Bebidas
            </S.SubTitle>
            <S.CheckboxContainer>
              <Checkbox label="Água (2L)" />
              <Checkbox label="Cerveja (Lata)" />
              <Checkbox label="Refrigerante (2L)" />
              <Checkbox label="Suco (1l)" />
              <Checkbox label="Chá Gelado (1L)" />
              <Checkbox label="Energético (2L)" />
            </S.CheckboxContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={dish} /> Acompanhamentos
            </S.SubTitle>
            <S.CheckboxContainer>
              <Checkbox label="Pão de Alho" />
              <Checkbox label="Queijo Coalho" />
              <Checkbox label="Farofa" />
              <Checkbox label="Vinagrete" />
              <Checkbox label="Pão Francês" />
              <Checkbox label="Arroz" />
            </S.CheckboxContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={fork} /> Suprimentos
            </S.SubTitle>
            <S.CheckboxContainer>
              <Checkbox label="Carvão" />
              <Checkbox label="Copos" />
              <Checkbox label="Guardanapo" />
              <Checkbox label="Pratos" />
              <Checkbox label="Talheres" />
              <Checkbox label="Acendedor" />
            </S.CheckboxContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={fork} /> Detalhes
            </S.SubTitle>
            <S.Form placeholder="Data:"/>
            <S.Form placeholder="Local:"/>
            <S.Form placeholder="Contato do Responsável:" keyboardType="numeric"/>
          </S.Container>
        </S.Container>
      </S.CriarContainer>
    </S.Body>
  );
}
