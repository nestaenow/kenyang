import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
} from "react-native";

const TextInputComponent = ({
  inputText,
  textInputWidth,
  textInputFlex,
  inputTagVisible,
  handleInputChange,
  handleFocus,
  keyboardStatus,
  clearInput,
  handleTranslate,
  isTranslated,
}) => {
  const EnglishImage = require("../assets/English.png");
  const ClearImage = require("../assets/clear.png");
  const TranslateImage = require("../assets/translate.png");

  return (
    <View
      style={[
        styles.textInputContainer,
        { width: textInputWidth, flex: textInputFlex },
      ]}
    >
      <Image
        source={EnglishImage}
        style={[
          styles.tagImage,
          { display: inputTagVisible ? "flex" : "none" },
        ]}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        value={inputText}
        onChangeText={handleInputChange}
        multiline
        color="#5B5B5B"
        onBlur={() => Keyboard.dismiss()}
        onFocus={handleFocus}
      />
      {keyboardStatus && inputText !== "" && (
        <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
          <Image style={styles.clearIcon} source={ClearImage} />
        </TouchableOpacity>
      )}
      {!isTranslated && (
        <TouchableOpacity
          style={
            keyboardStatus
              ? styles.translateButtonKeyboardActive
              : styles.translateButton
          }
          onPress={handleTranslate}
        >
          <Image style={styles.translateIcon} source={TranslateImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 10,
    paddingHorizontal: 40,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#FFF7ED",
  },
  textInput: {
    fontSize: 28,
    fontWeight: "700",
    backgroundColor: "#FFF7ED",
    marginTop: 35,
    marginBottom: 40,
    width: "100%",
    borderRadius: 10,
    color: "#5B5B5B",
  },
  clearButton: {
    width: 14,
    height: 14,
    position: "absolute",
    top: 20,
    right: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  clearIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  translateButton: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  translateButtonKeyboardActive: {
    width: 46,
    height: 46,
    position: "absolute",
    right: 24,
    bottom: 20.74,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
  },
  translateIcon: {
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

export default TextInputComponent;
