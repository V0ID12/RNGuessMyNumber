import { StyleSheet, useWindowDimensions, View } from "react-native";

import Colors from "../../constants/colors";

function Card({ children, style }) {
  // Hook to dynamically update the width and height based on the current device
  const { width, height } = useWindowDimensions();

  // Dynamic styles
  const marginTopDistance = height < 380 ? 30 : 10;

  return (
    <View style={[styles.card, { marginTop: marginTopDistance }, style]}>
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // This is an Android specific property to apply shadow affect
    shadowColor: "black", // This is an iOS specific property to apply shadow affect
    shadowOffset: { width: 0, height: 2 }, // This is an iOS specific property to apply shadow affect
    shadowRadius: 6, // This is an iOS specific property to apply shadow affect
    shadowOpacity: 0.25, // This is an iOS specific property to apply shadow affect
  },
});
