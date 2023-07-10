import React from "react";
import CustomButton from "./CustomButton";
import { View, StyleSheet } from "react-native";

const LanguageSelector = ({ onPressLanguage1, onPressLanguage2 }) => {
  return (
    <View style={styles.languages}>
      <CustomButton
        textColor="#FFFFFF"
        backgroundColor="#FF9700"
        onPress={onPressLanguage1}
        style={styles.language1}
      >
        English
      </CustomButton>
      <CustomButton
        textColor="#FF9700"
        backgroundColor="#FFF0DB"
        onPress={onPressLanguage2}
        style={styles.language2}
      >
        Kɛnyaŋ
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  languages: {
    flexDirection: "row",
    marginBottom: 15,
  },
  language1: {
    marginRight: 7.5,
  },
  language2: {
    marginLeft: 7.5,
  },
});

export default LanguageSelector;