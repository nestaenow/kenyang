import {
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

const MainScreen = () => {
    const [inputText, setInputText] = useState("");
    const [keyboardStatus, setKeyboardStatus] = useState(false);


  const handlePress = () => {
    console.log("Button pressed!");
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    };
    
    const handleTranslate = () => {
      // handle the translation operation
        console.log("Translate pressed!");
    };

  const clearInput = () => {
    setInputText("");
    };
    
    React.useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
          setKeyboardStatus(true);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.languages}>
          <CustomButton
            textColor="#FFFFFF"
            backgroundColor="#FF9700"
            onPress={handlePress}
            style={styles.language1}
          >
            English
          </CustomButton>
          <CustomButton
            textColor="#FF9700"
            backgroundColor="#FFF0DB"
            onPress={handlePress}
            style={styles.language2}
          >
            Kɛnyaŋ
          </CustomButton>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text"
            value={inputText}
            onChangeText={handleInputChange}
            multiline
            textColor="#5B5B5B"
            onBlur={dismissKeyboard}
          />
          {inputText !== "" && (
            <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
              <Image
                style={styles.clearIcon}
                source={require("../assets/clear.png")}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={
              keyboardStatus
                ? styles.translateButtonKeyboardActive
                : styles.translateButton
            }
            onPress={handleTranslate}
          >
            <Image
              style={styles.translateIcon}
              source={require("../assets/translate.png")}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  languages: {
    flexDirection: "row",
    marginBottom: 20,
  },
  language1: {
    marginRight: 7.5,
  },
  language2: {
    marginLeft: 7.5,
  },
  textInputContainer: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 40,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#FFF7ED",
  },
  textInput: {
    fontSize: 28,
    fontWeight: "700",
    backgroundColor: "#FFF7ED",
    marginHorizontal: 40,
    marginVertical: 40,
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
});

export default MainScreen;
