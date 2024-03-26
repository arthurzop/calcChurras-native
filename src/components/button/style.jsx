import styled from 'styled-components/native'


export const Button = styled.TouchableOpacity`
  background-color: #d90429;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 20px;
  z-index: 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
