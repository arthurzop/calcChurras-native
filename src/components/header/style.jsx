import styled from "styled-components/native";

export const TextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: -5px;
`;

export const Body = styled.View`
  width: 100%;
  height: 140px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  elevation: 10;
`;

export const subContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

export const Text1 = styled.Text`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const Text2 = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
`;

export const Divider = styled.View`
  width: 100%;
  border-color: #8d99ae;
  border-width: 0.2px;
`;
