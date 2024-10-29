import { ThemedText } from "@/components/ThemedText";
import { generateRandomRgbColor } from "@/utils/generateRandomRgbColor";
import { MotiView } from "moti";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState(generateRandomRgbColor());

  const handleClick = () => {
    setBgColor(generateRandomRgbColor());
  };

  return (
    <SafeAreaView style={styles.flex}>
      <TouchableWithoutFeedback onPress={handleClick} style={styles.flex}>
        <View style={styles.flex}>
          <MotiView
            style={styles.colorContainer}
            animate={{ backgroundColor: bgColor }}
          >
            <View style={styles.mainText}>
              <Text>Hello there</Text>
            </View>

            <Text style={styles.text}>Current RGB color: {bgColor}</Text>
          </MotiView>
          <ThemedText>Mateusz Roth - mateusz.roth@gmail.com</ThemedText>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  colorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "black",
  },
  mainText: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
  },
  text: {
    color: "black",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 6,
  },
});
