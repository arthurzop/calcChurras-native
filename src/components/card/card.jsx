import * as S from "./style.jsx";

export default function Card() {
  return (
    <S.Body activeOpacity={.8}>
      <S.topContainer>
        <S.Title>Titulo</S.Title>
        <S.Container>
          <S.SubTitle>Data:</S.SubTitle>
          <S.Text>13/02/24</S.Text>
        </S.Container>
      </S.topContainer>
      <S.BottomContainer>
        
          <S.Column>
            <S.Info>
              Homens: <S.Text>10</S.Text>
            </S.Info>
            <S.Info>
              Mulheres:<S.Text>10</S.Text>
            </S.Info>
            <S.Info>
              Crianças:<S.Text>10</S.Text>
            </S.Info>
            <S.Info>
              Total: <S.Text>10</S.Text>
            </S.Info>
          </S.Column>
        
          <S.Column2>
            <S.Info>
              Preço Total: <S.Text>R$ 1.000</S.Text>
            </S.Info>
            <S.Info>
              Preço por Pessoa: <S.Text>R$ 45.00</S.Text>
            </S.Info>
            <S.Info>
              Local: <S.Text>Avenida Paulista, 130</S.Text>
            </S.Info>
            <S.Info>
              Contato: <S.Text> 55+ 13 97234-4001</S.Text>
            </S.Info>
          </S.Column2>
      </S.BottomContainer>
    </S.Body>
  );
}
