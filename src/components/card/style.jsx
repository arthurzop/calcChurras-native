import styled from "styled-components/native";

export const Body = styled.ScrollView`
  width: 90%;
  height: fit-content;
  margin: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
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
`;

export const Info = styled(Text)`
  color: #585f6b;
`;

export const BottomContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

export const Column = styled.View`
  background-color: #888;
  width: 50%;
`;

export const SubColumn = styled(Column)`
  display: flex;
  flex-direction: row;
`;
