import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    // Validates user input
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invaild Number!",
        "Number has to be between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    console.log("Valid number confirmed!");
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.inputButtonsContainer}>
        <View style={styles.inputButtonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.inputButtonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // This is an Android specific property to apply shadow affect
    shadowColor: "black", // This is an iOS specific property to apply shadow affect
    shadowOffset: { width: 0, height: 2 }, // This is an iOS specific property to apply shadow affect
    shadowRadius: 6, // This is an iOS specific property to apply shadow affect
    shadowOpacity: 0.25, // This is an iOS specific property to apply shadow affect
  },
  inputButtonsContainer: {
    flexDirection: "row",
  },
  inputButtonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 55,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
  },
});
