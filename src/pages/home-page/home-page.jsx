import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/header/header";
import Button from "../../components/button/button";

export default function HomePage() {
  return (
    <View style={style.body}> 
        <Button />
    </View>
  );
}

const style = StyleSheet.create({
    body: {
        height: '100%',
        width:  '100%',
        display: 'flex'
    }
})
