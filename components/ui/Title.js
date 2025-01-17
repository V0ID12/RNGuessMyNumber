import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    margin: 24,
    maxWidth: "80%",
    width: 300,
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0, // Alt way to write the style below
    borderWidth: Platform.select({ios: 0 , android: 2}),
    borderColor: "white",
  },
});
