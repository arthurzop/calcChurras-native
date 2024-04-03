import * as S from './style.jsx'
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import Card from '../../components/card/card.jsx';

export default function HomePage() {
  return (
    <S.Body>
        <Header />
        <Button label={"Criar Novo"} rota='criar'/>
          <S.CardContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </S.CardContainer>
    </S.Body>
  );
}