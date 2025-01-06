import { StyleSheet, Text, View } from "react-native";

import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess Component */}
      <View>
        <Text>Higher or lower?</Text>
        {/* Add + & - Buttons */}
      </View>
      <View>{/* Log Rounds Component */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
  },
});
