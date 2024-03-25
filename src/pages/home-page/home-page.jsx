import { View, Text } from "react-native"
import Header from "../../components/header/header"
import Button from "../../components/button/button"

export default function HomePage(){
    return(
        <View>
            <Text>
                <Header/>
                <Button label='label'/>
            </Text>
        </View>
    )
}