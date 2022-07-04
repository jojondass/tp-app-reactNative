import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonLink = (props) => {
  return (
    <TouchableOpacity onPress={props.action} style={styles.container}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "royalblue",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
});

export default ButtonLink;
