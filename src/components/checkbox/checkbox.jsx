import { Checkbox } from "react-native-paper";
import { useState } from "react";
import styled from 'styled-components/native'

const Label = styled.Text`
    color: #2b2d42;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
`

const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90px;
    height: fit-content;
`

export default function Check({label}){
const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
            setChecked(!checked);
          }}
        color='#ef233c'
        uncheckedColor="#ef233c"
      />
      <Label>{label}</Label>
    </Container>
  );
}
