import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import defaultAvatar from "../../../assets/default_avatar.png";
import { useWindowDimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../UI/Button/Button";

export default function Profil({ route, navigation }) {
  console.log(navigation);
  const { user, setUser } = useContext(UserContext);

  const sizes = useWindowDimensions();

  async function pickImage() {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!image.cancelled) {
      //Object spreading
      setUser({
        ...user,
        avatar: image,
      });
    }
  }

  function goCamera() {
    navigation.push("camera");
  }
  function goEditInfos() {
    navigation.push("edit_infos");
  }
  return (
    <ScrollView style={{ width: "100%" }}>
      <View>
        <Image
          style={[
            styles.image,
            { width: sizes.width, height: sizes.width },
          ]}
          source={user.avatar ? user.avatar : defaultAvatar}
        />

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons
              name='photo-library'
              size={50}
              color={STYLES_VARIABLES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goCamera}>
            <MaterialIcons
              name='photo-camera'
              size={50}
              color={STYLES_VARIABLES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infosContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Username:</Text>
          <Text style={styles.info}>{user.username}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Description:</Text>
          <Text style={styles.info}>
            {user.description
              ? user.description
              : "Veuillez entrer une description..."}
          </Text>
        </View>
        <Button label={"Modifier vos informations"} action={goEditInfos}>
          <Ionicons
            name='settings'
            size={24}
            color={STYLES_VARIABLES.LIGHT_COLOR}
          />
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    margin: 20,
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 150,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  infosContainer: {
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: STYLES_VARIABLES.PRIMARY_COLOR,
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
  },
  infoContainer: {
    borderBottomWidth: 2,
    borderColor: STYLES_VARIABLES.DARK_GRAY_COLOR,
    padding: 5,
    margin: 5,
  },
  infoLabel: {
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: STYLES_VARIABLES.DARK_COLOR,
  },
});
