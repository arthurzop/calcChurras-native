import * as S from "./style.jsx";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import beef from "../../../assets/images/beef.png";
import beer from "../../../assets/images/beer.png";
import dish from "../../../assets/images/dish.png";
import fork from "../../../assets/images/fork.png";
import details from "../../../assets/images/details.png";

export default function Detalhes() {
  return (
    <S.Body>
      <Header />
      <Button label="Confirmar" rota="home" />
      <S.CriarContainer>
        <S.Container>
          <S.Title>Xurras de Teste</S.Title>
          <S.SubTitle>Quantidade de Pessoas</S.SubTitle>
          <S.SubContainer>
            <S.Column>
              <S.Label>Homens:</S.Label>
              <S.NumberContainer>
                <S.NumberText>10</S.NumberText>
              </S.NumberContainer>
            </S.Column>
            <S.Column>
              <S.Label>Mulheres:</S.Label>
              <S.NumberContainer>
                <S.NumberText>10</S.NumberText>
              </S.NumberContainer>
            </S.Column>
            <S.Column>
              <S.Label>Crianças:</S.Label>
              <S.NumberContainer>
                <S.NumberText>10</S.NumberText>
              </S.NumberContainer>
            </S.Column>
          </S.SubContainer>
          <S.Container>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={beef} /> Cortes
            </S.SubTitle>
            <S.FullContainer>
              <S.LeftContainer>
                <S.LeftText>Picanha</S.LeftText>
                <S.LeftText>Cupim</S.LeftText>
                <S.LeftText>Alcatra</S.LeftText>
                <S.LeftText>Lombo</S.LeftText>
                <S.LeftText>Coração</S.LeftText>
                <S.LeftText>Coxa</S.LeftText>
                <S.LeftText>Costela</S.LeftText>
                <S.LeftText>Linguiça</S.LeftText>
              </S.LeftContainer>
              <S.RightContainer>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
              </S.RightContainer>
            </S.FullContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={beer} /> Bebidas
            </S.SubTitle>
            <S.FullContainer>
              <S.LeftContainer>
                <S.LeftText>Água</S.LeftText>
                <S.LeftText>Cerveja</S.LeftText>
                <S.LeftText>Refrigerante</S.LeftText>
                <S.LeftText>Suco</S.LeftText>
              </S.LeftContainer>
              <S.RightContainer>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
              </S.RightContainer>
            </S.FullContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={dish} /> Acompanhamentos
            </S.SubTitle>
            <S.FullContainer>
              <S.LeftContainer>
                <S.LeftText>Pão de Alho</S.LeftText>
                <S.LeftText>Queijo Coalho</S.LeftText>
                <S.LeftText>Farofa</S.LeftText>
                <S.LeftText>Vinagrete</S.LeftText>
                <S.LeftText>Pão Francês</S.LeftText>
                <S.LeftText>Arroz</S.LeftText>
              </S.LeftContainer>
              <S.RightContainer>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
              </S.RightContainer>
            </S.FullContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={fork} /> Suprimentos
            </S.SubTitle>
            <S.FullContainer>
              <S.LeftContainer>
                <S.LeftText>Carvão</S.LeftText>
                <S.LeftText>Copos</S.LeftText>
                <S.LeftText>Guardanapos</S.LeftText>
                <S.LeftText>Pratos</S.LeftText>
                <S.LeftText>Talheres</S.LeftText>
                <S.LeftText>Acendedor</S.LeftText>
              </S.LeftContainer>
              <S.RightContainer>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
                <S.RightText>R$ 100,00</S.RightText>
              </S.RightContainer>
            </S.FullContainer>
            <S.Divider />
            <S.SubTitle>
              <S.Icon source={details} /> Detalhes
            </S.SubTitle>
            <S.DetalhesContainer>
                <S.SubTitle>Data:</S.SubTitle>
                <S.DetalhesText>13/10/2024, 10:00</S.DetalhesText>
                <S.SubTitle>Local:</S.SubTitle>
                <S.DetalhesText>Avenida Paulista, 130</S.DetalhesText>
                <S.SubTitle>Contato do Responsável:</S.SubTitle>
                <S.DetalhesText>+55 (11) 974774332</S.DetalhesText>
            </S.DetalhesContainer>
          </S.Container>
        </S.Container>
      </S.CriarContainer>
    </S.Body>
  );
}
