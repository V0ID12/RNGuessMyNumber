import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  // Hook to dynamically update the width and height based on the current device
  const { width, height } = useWindowDimensions();

  // Dynamic styles
  const paddingDistance = width < 380 ? 12 : 6;
  const marginDistance = width < 380 ? 12 : 6;
  const dynamicFontSize = width < 380 ? 28 : 32;

  return (
    <View
      style={[
        styles.container,
        { padding: paddingDistance, margin: marginDistance },
      ]}
    >
      <Text style={[styles.numberText, { fontSize: dynamicFontSize }]}>
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
