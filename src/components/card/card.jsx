import * as S from "./style.jsx";

export default function Card() {
  return (
    <S.Body>
      <S.topContainer>
        <S.Title>Titulo</S.Title>
        <S.Container>
          <S.SubTitle>Data:</S.SubTitle>
          <S.Text>13/02/24</S.Text>
        </S.Container>
      </S.topContainer>
      <S.BottomContainer>
        <S.SubColumn>
          <S.Column>
            <S.Info>Homens:</S.Info>
            <S.Info>Mulheres:</S.Info>
            <S.Info>Crianças:</S.Info>
            <S.Info>Total: </S.Info>
          </S.Column>
          <S.Column>
            <S.Text>10</S.Text>
            <S.Text>8</S.Text>
            <S.Text>6</S.Text>
            <S.Text>24</S.Text>
          </S.Column>
        </S.SubColumn>
        <S.SubColumn>
          <S.Column>
            <S.Info>Homens:</S.Info>
            <S.Info>Mulheres:</S.Info>
            <S.Info>Crianças:</S.Info>
            <S.Info>Total: </S.Info>
          </S.Column>
          <S.Column>
            <S.Text>10</S.Text>
            <S.Text>8</S.Text>
            <S.Text>6</S.Text>
            <S.Text>24</S.Text>
          </S.Column>
        </S.SubColumn>
      </S.BottomContainer>
    </S.Body>
  );
}
