import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  console.log(
    "Quand le composant et mis dans le DOM: counter = ",
    counter
  );

  function add() {
    console.log("Dans add, avant changement: counter = ", counter);
    setCounter(counter + 1);
    console.log("Dans add, apres changement: counter = ", counter);
    setDoubleCounter(counter * 2);
  }
  function sub() {
    console.log("Click sub");
    console.log("counter ", counter);
    setCounter(counter - 1);
  }

  function test(number) {
    setCounter(number);
  }
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Text>Double Counter: {doubleCounter}</Text>
      <Button
        onPress={() => {
          test(counter - 1);
        }}
        title='-1'
        color='red'
      />
      <Button
        onPress={() => {
          test(counter + 1);
        }}
        title='+1'
      />
    </View>
  );
}

//Clone de useState
function myState(intialValue) {
  let value = intialValue;

  function setValue(newValue) {
    value = newValue;
  }

  return [value, setValue];
}
const [counter2, setCounter2] = myState(0);
////////////////////
