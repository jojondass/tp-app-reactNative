import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

const GOT_GET_URL = "https://thronesapi.com/api/v2/Characters";

const GOT = () => {
  const [listPersos, setListPersos] = useState([]);

  useEffect(() => {
    axios.get(GOT_GET_URL).then((reponse) => {
      console.log(reponse.data);
      setListPersos(reponse.data);
    });
  }, []);

  const sizes = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      {listPersos.map((perso, index) => {
        return (
          <View key={index} style={styles.persoContainer}>
            <Text style={styles.fullName}>{perso.fullName}</Text>
            <Image
              style={[
                styles.persoImage,
                { width: sizes.width, height: sizes.width },
              ]}
              source={{ uri: perso.imageUrl }}
            />
            <Text style={styles.title}>{perso.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  persoContainer: {
    margin: 20,
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: STYLES_VARIABLES.PRIMARY_COLOR,
    padding: 20,
  },
  persoImage: {
    maxWidth: "100%",
  },
  title: {
    fontSize: 30,
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    textAlign: "center",
    margin: 10,
  },
  fullName: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default GOT;
