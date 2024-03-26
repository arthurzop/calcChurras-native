import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: #d90429;
  width: 150px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: fixed;
  elevation: 10;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  top: 780px;
  width: 100%;
  position: absolute;
  z-index: 2;

`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
