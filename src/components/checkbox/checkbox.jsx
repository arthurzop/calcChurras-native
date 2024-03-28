import { Checkbox } from "react-native-paper";
import { useState } from "react";
import styled from "styled-components/native";

const Label = styled.Text`
  color: #2b2d42;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  display: flex;
  flex-wrap: nowrap;
`;

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90px;
  height: fit-content;
`;

export default function Check({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <Container
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        color="#ef233c"
        uncheckedColor="#ef233c"
      />
      <Label>{label}</Label>
    </Container>
  );
}
0