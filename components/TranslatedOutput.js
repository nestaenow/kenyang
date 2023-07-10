import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const TranslatedOutput = ({
  translatedText,
  handleCopy,
  translationVisible,
  textInputMargin,
  textInputWidth,
  textInputFlex,
  translationTagVisible,
}) => {
  return (
    translationVisible && (
      <View
        style={[
          styles.translationContainer,
          {
            marginTop: textInputMargin,
            width: textInputWidth,
            flex: textInputFlex,
          },
        ]}
      >
        <View style={styles.translationContent}>
          <Text style={styles.translatedText}>{translatedText}</Text>
        </View>
        <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
          <Image
            style={styles.copyIcon}
            source={require("../assets/copy.png")}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/Kɛnyaŋ.png")}
          style={[
            styles.tagImage,
            { display: translationTagVisible ? "flex" : "none" },
          ]}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  translationContainer: {
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingBottom: 20,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#FFF7ED",
    marginBottom: 40,
  },
  translatedText: {
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 40,
    color: "#FF9700",
    width: "100%",
  },
  translationContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  copyButton: {
    width: 46,
    height: 46,
    position: "absolute",
    left: 20,
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  copyIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  tagImage: {
    position: "absolute",
    top: 20,
    right: 20,
    height: 15,
    width: 50,
    resizeMode: "contain",
  },
});

export default TranslatedOutput;