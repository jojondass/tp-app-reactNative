import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Page/Auth/Auth";
import { UserContext } from "./contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import GlobalDrawer from "./Components/Drawer/GlobalDrawer";
export default function App() {
  const fakeUser = { email: "inoubli.adame@gmail.com", username: "Inoubli Adame" };
  const [user, setUser] = useState(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        <NavigationContainer>
          {user ? <GlobalDrawer /> : <Auth />}
        </NavigationContainer>

        <StatusBar style='auto' />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
