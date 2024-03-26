import * as S from "./style.jsx";
import Header from "../../components/header/header";
import Button from "../../components/button/button";

export default function Criar() {
  return (
    <S.Body>
      <Header />
      <Button label="Criar" />
      {/* <S.CriarContainer>
        <S.SubContainer>
          <S.Input>Nome do Xurras</S.Input>
          <S.SubTitle>Quantidade de Pessoas</S.SubTitle>
          <S.Container>
            <S.Column>
              <S.Text>Homens</S.Text>
              <S.NumberInput></S.NumberInput>
            </S.Column>
            <S.Column>
              <S.Text>Homens</S.Text>

              <S.NumberInput></S.NumberInput>
            </S.Column>
            <S.Column>
              <S.Text>Homens</S.Text>

              <S.NumberInput></S.NumberInput>
            </S.Column>
          </S.Container>
          <S.Divider />
          <S.Container>
            <S.Title>i Cortes</S.Title>
            <S.CheckboxContainer>
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
              <S.Checkbox />
            </S.CheckboxContainer> 
          </S.Container>
        </S.SubContainer>
      </S.CriarContainer> */}
    </S.Body>
  );
}
