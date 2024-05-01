import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Render the paragraph
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "olive",
          width: 395,
          height: 300,
        }}
      >
        <View
          style={{
            flexDirection: "row-reverse",
            // flexDirection: 'row',
            backgroundColor: "dodgerblue",
            flex: 1,
            marginLeft: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "green",
              width: 100,
              height: 150,
              marginLeft: 50,
            }}
          />
          <View
            style={{
              backgroundColor: "pink",
              width: 100,
              height: 150,
              marginLeft: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
