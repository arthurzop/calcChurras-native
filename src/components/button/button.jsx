import * as S from './style.jsx'
import { useNavigation } from '@react-navigation/native';

export default function Button({label, rota}) {

  const nav = useNavigation()

  return (
    <S.ButtonContainer>
      <S.Button onPress={() => {nav.navigate(rota)}}>
        <S.ButtonText>{label}</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
}
