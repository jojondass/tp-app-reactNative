import { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";
import Card from "../../HOC/Card/Card";

const EditInfos = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  console.log(user.email);

  const [inputs, setInputs] = useState({
    email: {
      holder: "Email",
      value: user.email,
      error: "",
      test: function () {
        return this.value.includes("@");
      },
      handleError: function () {
        return !this.test() ? "Email invalide!" : "";
      },
    },
    username: {
      holder: "Username",
      value: user.username,
      error: "",
      test: function () {
        return this.value.length >= 3 && this.value.length <= 12;
      },
      handleError: function () {
        return !this.test() ? "Min. 3 et Max. 12" : "";
      },
    },
    description: {
      holder: "Description",
      value: user.description ? user.description : "",
      error: "",
      test: function () {
        return true;
      },
      handleError: function () {
        return !this.test() ? "Une future erreur a implementer" : "";
      },
    },
  });

  function handleInputs(name, text) {
    setInputs({
      ...inputs,
      [name]: {
        ...inputs[name],
        value: text,
        error: "",
      },
    });
  }

  function goBackProfil() {
    if (navigation.canGoBack()) {
      navigation.pop();
    }
  }

  function testInputs() {
    const { email, username, description } = inputs;
    return email.test() && username.test() && description.test();
  }
  function saveInfos() {
    const { email, username, description } = inputs;
    if (testInputs()) {
      setUser({
        ...user,
        email: email.value,
        username: username.value,
        description: description.value,
      });
      goBackProfil();
    } else {
      setInputs({
        email: {
          ...email,
          error: email.handleError(),
        },
        username: {
          ...username,
          error: username.handleError(),
        },
        description: {
          ...description,
          error: description.handleError(),
        },
      });
    }
  }

  return (
    <View style={styles.container}>
      <Card title='Modifier' content='vos informations'>
        <InputWithError
          holder={inputs.email.holder}
          valeur={inputs.email.value}
          action={(value) => {
            handleInputs("email", value);
          }}
          errorMessage={inputs.email.error}
          type='adress-email'
        />

        <InputWithError
          holder={inputs.username.holder}
          valeur={inputs.username.value}
          action={(value) => {
            handleInputs("username", value);
          }}
          errorMessage={inputs.username.error}
          type='default'
        />

        <InputWithError
          holder={inputs.description.holder}
          valeur={inputs.description.value}
          action={(value) => {
            handleInputs("description", value);
          }}
          errorMessage={inputs.description.error}
          type='default'
        />
        <Button
          label='Annuler'
          action={goBackProfil}
          danger
          outline
        ></Button>
        <Button label='Enregistrer' action={saveInfos} success></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EditInfos;
