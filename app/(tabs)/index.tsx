import { ThemedText } from "@/components/ThemedText";
import { generateRandomRgbColor } from "@/utils/generateRandomRgbColor";
import { MotiView } from "moti";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState(generateRandomRgbColor());

  const handleClick = () => {
    setBgColor(generateRandomRgbColor());
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <MotiView
        style={styles.colorContainer}
        animate={{ backgroundColor: bgColor }}
      >
        <View style={styles.button}>
          <Button onPress={handleClick} title="Generate color" />
        </View>

        <Text style={styles.text}>Current RGB color: {bgColor}</Text>
      </MotiView>
      <ThemedText>Mateusz Roth - mateusz.roth@gmail.com</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  colorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 6,
  },
  text: {
    color: "black",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 6,
  },
});
