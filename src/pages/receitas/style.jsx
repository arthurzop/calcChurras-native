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

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`

export const ReceitaContainer = styled.View`
    width: 90%;
    height: fit-content;
    display: flex;
    align-self: center;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ReceitaTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

export const ReceitaSubtitle = styled.Text`
    font-size: 18px;
    font-weight: 500;
`

export const ReceitaItem = styled.Text`
    
`

export const ReceitaImg = styled.Image`
    align-self: center;
`

export const Divider = styled.View`
    width: 100%;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: #8d99ae;
    border-width: .5px;

`