import styled from 'styled-components/native';

export const TextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: -5px;
`;

export const Body = styled.View`
  width: 100%;
  height: 120px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
`;

export const subContainer = styled.View`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;

`

export const Text1 = styled.Text`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Text2 = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Divider = styled.View`
  width: 100%;
  border-color: #8d99ae;
  border-width: 0.2px;
  margin-top: 20px;
`;
