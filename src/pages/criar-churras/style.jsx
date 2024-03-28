import styled from "styled-components/native";

export const Body = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FFF;
`;

export const CriarContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 50px;
  gap: 20px;
`;

export const SubContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`

export const Column = styled.View`
  display: flex;
  gap: 15px;
`

export const CheckboxContainer = styled.View`
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
`

export const Input = styled.TextInput`
  font-size: 40px;
  font-weight: bold;
  color: #2b2d42;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  font-size: 24px; 
  font-weight: 500;
  padding: 6px;
`;

export const Label = styled.Text`
  color: #585f6b;
`;

export const InputNumber = styled.TextInput`
  padding-horizontal: 10px;
  padding-vertical: 5px;
  color: #ef233c;
  border-color: #8d99ae;
  border-width: 0.2px;
  text-align: center;
  font-weight: bold;
  font-size: 26px;
`

export const Divider = styled.View`
  width: 75%;
  border-color: #8d99ae;
  border-width: .5px;
`

export const Icon = styled.Image`

`

export const Form = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #d90429;
  width: 70%;
`

