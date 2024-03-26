import * as R from 'react-native'
import * as S from './style.jsx'
import Header from "../../components/header/header";
import Button from "../../components/button/button";

export default function HomePage() {
  return (
    <S.Body>
        <Header />

        <Button />
    </S.Body>
  );
}