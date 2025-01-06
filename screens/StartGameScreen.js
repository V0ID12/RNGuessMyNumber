import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.inputButtonsContainer}>
        <View style={styles.inputButtonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.inputButtonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
