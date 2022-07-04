// rnfc: React Native Functional Component
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Button from "../../UI/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import InputWithError from "../../UI/InputWithError/InputWithError";
const Login = () => {
  //1- Créer les variables d'etats:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2- Créer les fonctions qui changent les variables:
  function handleEmail(text) {
    setEmailError("");
    setEmailInput(text);
  }

  function handlePassword(text) {
    setPasswordError("");
    setPasswordInput(text);
  }

  //3- Créer la fonction pour valider le formulaire:
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion avec succes! Email: " + emailInput);
      setEmailInput("");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
    }
  }

  //TWO WAY BINDING: LIAISON DANS LE DEUX SENS

  //4- Mettre les composants en place et les lier avec la variables et les fonctions:
  return (
    <View style={styles.container}>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <Button label='Connexion' action={login}>
        <AntDesign
          name='login'
          size={20}
          color={STYLES_VARIABLES.LIGHT_COLOR}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
