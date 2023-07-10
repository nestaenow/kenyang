import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  const TokLogo = require("../assets/logo.png");
  const Waves = require("../assets/waves.png");

  return (
    <View style={styles.container}>
      <Image source={TokLogo} style={styles.logo} />
      <Image source={Waves} style={styles.waves} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBC000",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 174,
    height: 65,
    marginBottom: 20,
  },
  waves: {
    width: "100%",
    height: 171.38,
    position: "absolute",
    bottom: 0,
  },
});

export default SplashScreen;
