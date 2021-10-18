import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { oauth } from "react-native-force";

export const App = () => {
  const onPressGetAuthCredentials = () => {
    oauth.getAuthCredentials(
      (credentials) => console.log("GAC Success", credentials),
      (gacError) => {
        console.log("GAC Failure", gacError);
        oauth.authenticate(
          (credentials) => console.log("Auth Success", credentials),
          (authError) => console.log("Auth Failure", authError)
        );
      }
    );
  };

  const onPressAuthenticate = () => {
    oauth.authenticate(
      (credentials) => console.log("Auth Success", credentials),
      (authError) => console.log("Auth Failure", authError)
    );
  };

  const onPressLogout = () => {
    oauth.logout(
      () => console.log("Logout Success"),
      (logoutError) => console.log("Logout Failure", logoutError)
    );
  };

  return (
    <View style={{ paddingHorizontal: 32, paddingVertical: 64 }}>
      <TouchableOpacity onPress={onPressGetAuthCredentials}>
        <View
          style={{
            elevation: 4,
            borderRadius: 8,
            padding: 16,
            margin: 16,
            backgroundColor: "#ccddff",
          }}
        >
          <Text>getAuthCredentials then authenticate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAuthenticate}>
        <View
          style={{
            elevation: 4,
            borderRadius: 8,
            padding: 16,
            margin: 16,
            backgroundColor: "#ccddff",
          }}
        >
          <Text>authenticate only</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogout}>
        <View
          style={{
            elevation: 4,
            borderRadius: 8,
            padding: 16,
            margin: 16,
            backgroundColor: "#ccddff",
          }}
        >
          <Text>logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
