import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import MainScreen from "./screens/MainScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second delay
  }, []);

  return (
    <>
      {isLoading ? <SplashScreen /> : <MainScreen />}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
