import { StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import useAuth from "../hooks/useAuth";
import MatchScreen from "../screens/MatchScreen";
import VehicleData from "../screens/VehicleDataScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user, userCreated  } = useAuth();

  console.log(userCreated);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          {userCreated ? (
            <Stack.Group>
              <Stack.Screen name="VehicleData" component={VehicleData} /> 
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
          
          {/* <Stack.Group>
            <Stack.Screen name="VehicleData" component={VehicleData} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
            
          </Stack.Group> */}
          {/* <Stack.Group
            screenOptions={{
              presentation: "modal",
              ...TransitionPresets.ModalPresentationIOS,
            }}
          >
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group> */}
          {/* <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              ...TransitionPresets.ModalPresentationIOS,
            }}
          >
            <Stack.Screen name="Match" component={MatchScreen} />
          </Stack.Group> */}
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
