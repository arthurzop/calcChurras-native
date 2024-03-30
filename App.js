import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
const Stack = createNativeStackNavigator();

import SplashScreen from "./src/pages/splash-screen/splash-screen";
import HomePage from "./src/pages/home-page/home-page";
import Criar from "./src/pages/criar-churras/criar";

export default function App() {

  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ title: null }}
          />
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{ title: null }}
          />
          <Stack.Screen
            name="criar"
            component={Criar}
            options={{ title: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
