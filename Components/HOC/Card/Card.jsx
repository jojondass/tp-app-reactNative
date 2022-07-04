import { StyleSheet, Text, View } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

export default function Card(props) {
  console.log(props);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>

      <View style={styles.childrenContainer}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
  },
  container: {
    backgroundColor: STYLES_VARIABLES.PRIMARY_COLOR,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 20,
    textAlign: "center",
  },
  childrenContainer: {
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    padding: 20,
  },
});
