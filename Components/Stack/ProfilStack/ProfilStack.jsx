import { createStackNavigator } from "@react-navigation/stack";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import Cam from "../../Page/Cam/Cam";
import EditInfos from "../../Page/EditInfos/EditInfos";
import Profil from "../../Page/Profil/Profil";

const Stack = createStackNavigator();

const ProfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: STYLES_VARIABLES.PRIMARY_COLOR,
        },
        headerTitleStyle: {
          color: STYLES_VARIABLES.LIGHT_COLOR,
          fontSize: 25,
        },
        headerTintColor: STYLES_VARIABLES.LIGHT_COLOR,
      }}
    >
      <Stack.Screen
        options={{
          title: "Votre page de profil",
          headerShown: false,
        }}
        name='profil'
        component={Profil}
      />

      <Stack.Screen
        options={{ title: "Prenez une photo" }}
        name='camera'
        component={Cam}
      />
      <Stack.Screen
        options={{ title: "Modifiez vos informations." }}
        name='edit_infos'
        component={EditInfos}
      />
    </Stack.Navigator>
  );
};

export default ProfilStack;
