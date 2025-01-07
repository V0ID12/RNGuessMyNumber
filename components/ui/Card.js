import { Dimensions, StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";

function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>
  );
}

export default Card;

// Get the width of the current device
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
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
