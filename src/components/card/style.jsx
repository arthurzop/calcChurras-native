import styled from "styled-components/native";

export const Body = styled.TouchableOpacity`
  width: 90%;
  height: fit-content;
  margin: 20px;
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  elevation: 5;

`;

export const topContainer = styled.View`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: #8d99ae;
  border-bottom-style: solid;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Text = styled(SubTitle)`
  font-weight: 400;
  color: #ef233c;
  text-align: right;

`;

export const Info = styled(Text)`
  color: #585f6b;
  text-align: left;
`;

export const BottomContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;
  gap: -15px;
`;

export const Column = styled.View`
  /* background-color: #888; */
  display: flex;
  gap: 8px;
  width: 49%;

`;

export const Column2 = styled.View`
  display: flex;
  gap: 8px;
  width: 100%;
`
