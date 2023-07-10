import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import LanguageSelector from "../components/LanguageSelector";
import TextInputComponent from "../components/TextInputComponent";
import TranslatedOutput from "../components/TranslatedOutput";

const MainScreen = () => {
  const [inputText, setInputText] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [textInputMargin, setTextInputMargin] = useState(0);
  const [textInputWidth, setTextInputWidth] = useState("100%");
  const [textInputFlex, setTextInputFlex] = useState("1");
  const [translationVisible, setTranslationVisible] = useState(false);
  const [inputTagVisible, setInputTagVisible] = useState(false);
  const [translationTagVisible, setTranslationTagVisible] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);

  const onPressLanguage1 = () => {
    console.log("Button pressed!");
  };

  const onPressLanguage2 = () => {
    console.log("Button pressed!");
  };

  const handleFocus = () => {
    setTextInputWidth("100%");
    setTextInputFlex("1");
    setInputTagVisible(false);
    setIsTranslated(false);
  };

  const handleInputChange = (text) => {
    setInputText(text);
    setTextInputWidth("100%");
    setTextInputFlex("1");
    setTranslationVisible(false);
    setInputTagVisible(false);
    setIsTranslated(false);
  };

  const handleTranslate = () => {
    // Placeholder for translation function
    const result = inputText; // replace with your own translation function
    setTranslatedText(result);
    setTextInputMargin(20); // adjust the TextInput margin
    setTextInputWidth("90%");
    setTextInputFlex("0");
    setTranslationVisible(true);
    setInputTagVisible(true);
    setTranslationTagVisible(true);
    Keyboard.dismiss(); // dismiss the keyboard
    setIsTranslated(true);
  };

  const clearInput = () => {
    setInputText("");
  };

  const handleCopy = () => {
    Clipboard.setString(translatedText);
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Text Copied",
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      backgroundColor: "#FF9700",
      textColor: "#FFF",
      textStyle: {
        textAlign: "center",
      },
      style: {
        borderRadius: 20,
      },
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardStatus(true);
        setTranslationVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardStatus(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
      >
        <StatusBar barStyle="dark-content" />
        <LanguageSelector
          onPressLanguage1={onPressLanguage1}
          onPressLanguage2={onPressLanguage2}
        />
        <TextInputComponent
          inputText={inputText}
          textInputWidth={textInputWidth}
          textInputFlex={textInputFlex}
          inputTagVisible={inputTagVisible}
          handleInputChange={handleInputChange}
          handleFocus={handleFocus}
          keyboardStatus={keyboardStatus}
          clearInput={clearInput}
          handleTranslate={handleTranslate}
          isTranslated={isTranslated}
        />
        <TranslatedOutput
          translatedText={translatedText}
          handleCopy={handleCopy}
          translationVisible={translationVisible}
          textInputMargin={textInputMargin}
          textInputWidth={textInputWidth}
          textInputFlex={textInputFlex}
          translationTagVisible={translationTagVisible}
        />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },
});

export default MainScreen;
