import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  type,
  isPassword,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  console.log(Platform);
  function toggleIsPasswordHidden() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  const outline = Platform.OS === "web" ? { outlineStyle: "none" } : null;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor:
              errorMessage === ""
                ? STYLES_VARIABLES.PRIMARY_COLOR
                : STYLES_VARIABLES.DANGER_COLOR,
          },
        ]}
      >
        <TextInput
          style={[
            {
              color:
                errorMessage === ""
                  ? "black"
                  : STYLES_VARIABLES.DANGER_COLOR,
            },
            outline,
          ]}
          placeholder={holder}
          value={valeur}
          onChangeText={action}
          keyboardType={type}
          secureTextEntry={isPassword && isPasswordHidden}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.icon}
            onPress={toggleIsPasswordHidden}
          >
            <Entypo
              name={isPasswordHidden ? "eye-with-line" : "eye"}
              size={24}
              color={
                isPasswordHidden
                  ? STYLES_VARIABLES.SUCCESS_COLOR
                  : STYLES_VARIABLES.DANGER_COLOR
              }
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: STYLES_VARIABLES.LIGHT_COLOR,
    marginVertical: 10,
    padding: 7,
    borderRadius: 5,
    alignItems: "center",
    borderBottomWidth: 2,
  },
  icon: {
    position: "absolute",
    right: 7,
  },
  error: {
    color: STYLES_VARIABLES.DANGER_COLOR,
    fontSize: 13,
  },
});

export default InputWithError;
