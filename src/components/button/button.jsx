import * as S from './style.jsx'
import { useNavigation } from '@react-navigation/native';

export default function Button() {

  const nav = useNavigation()

  return (
    <S.ButtonContainer>
      <S.Button onPress={() => {nav.navigate('criar')}}>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
}
