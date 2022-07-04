import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "../Container/Navbar/Navbar";
import GOT from "../Page/GOT/GOT";
import News from "../Page/News/News";
import ProfilStack from "../Stack/ProfilStack/ProfilStack";

const Drawer = createDrawerNavigator();

const GlobalDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <Navbar {...props} />,
      }}
    >
      <Drawer.Screen
        name='news'
        component={News}
        options={{ title: "Articles" }}
      />

      <Drawer.Screen
        name='profilstack'
        component={ProfilStack}
        options={{ title: "Profil" }}
      />

      <Drawer.Screen
        name='got'
        component={GOT}
        options={{ title: "Personnages de GOT" }}
      />
    </Drawer.Navigator>
  );
};
export default GlobalDrawer;
