import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  // Hook to dynamically update the width and height based on the current device
  const { width, height } = useWindowDimensions();

  // Determines if the current game is over
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // Updates resets number boundaries when starting a new game
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  // Param direction => "lower" || "greater"
  function nextGuessHandler(direction) {
    // Validate user input
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know this answer is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousGuessRounds) => [
      newRandomNumber,
      ...previousGuessRounds,
    ]);
  }

  // Dynamically tracks this vaule
  const guessRoundListLength = guessRounds.length;

  // Dynamic styles
  const cardWidth = width < 380 ? 0 : 300;
  const cardMarginHorizontal = width < 380 ? 0 : 18;
  const screenPadding = width < 425 ? 18 : 32;
  const listContainerPadding = width < 380 ? 0 : 0;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card
        style={[{ width: cardWidth, marginHorizontal: cardMarginHorizontal }]}
      >
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.inputButtonsContainer}>
          <View style={styles.inputButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.inputButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  // Creates widescreen content
  if (width > 500) {
    content = (
      <>
        <View style={styles.inputButtonsContainerWide}>
          <View style={styles.inputButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.inputButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.screen, { padding: screenPadding }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={[styles.listContainer, { padding: listContainerPadding }]}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  inputButtonsContainer: {
    flexDirection: "row",
  },
  inputButtonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputButtonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
