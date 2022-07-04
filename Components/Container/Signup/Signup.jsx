import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { FontAwesome } from "@expo/vector-icons";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import { UserContext } from "../../../contexts/UserContext";

const Signup = ({ changeUser }) => {
  const { user, setUser } = useContext(UserContext);

  //1- Créer les variables d'etats:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //2- Créer les fonctions qui changent les variables:
  function handleEmail(text) {
    setEmailError("");
    setEmailInput(text);
  }

  function handleUsername(text) {
    setUsernameError("");
    setUsernameInput(text);
  }

  function handlePassword(text) {
    setPasswordError("");
    setPasswordInput(text);
  }
  function handleConfirmPassword(text) {
    setConfirmPasswordError("");
    setConfirmPasswordInput(text);
  }

  //3- Créer la fonction pour valider le formulaire:
  function signup() {
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12 &&
      passwordInput.length >= 6 &&
      confirmPasswordInput === passwordInput
    ) {
      setUser({ email: emailInput, username: usernameInput });
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");

      setUsernameError(
        usernameInput.length < 3
          ? "Username trop court!"
          : usernameInput.length > 12
          ? "Username trop long!"
          : ""
      );

      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court !" : ""
      );

      setConfirmPasswordError(
        passwordInput !== confirmPasswordInput
          ? "Les mots de passes ne sont pas identiques !"
          : ""
      );
    }
  }

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
        holder='Username'
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type='default'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <InputWithError
        holder='Confirmer votre mot de passe'
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        errorMessage={confirmPasswordError}
        type='default'
        isPassword
      />

      <Button label='Connexion' action={signup}>
        <FontAwesome
          name='sign-in'
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

export default Signup;
