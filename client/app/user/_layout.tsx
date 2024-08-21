import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Tabs } from "expo-router";

export default function _layout() {
	const dimensions = useWindowDimensions();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				screenOptions={{
					headerShown: true,
					drawerType: dimensions.width >= 768 ? "permanent" : "front",
					headerTitleAlign: "center",
					headerStyle: {
						height: 60, // Set the height of the header
						backgroundColor: "#fff",
					},
					headerTitleStyle: {
						fontWeight: "bold",
						fontSize: 24,
					},
				}}
			>
				<Drawer.Screen
					name="login" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Login",
						title: "Login",
					}}
				/>
				<Drawer.Screen
					name="signup" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Sign Up",
						title: "Sign Up",
					}}
				/>

				<Drawer.Screen
					name="home" // Hide the Home Tab
					options={{
						drawerLabel: "Home",
						title: "Home",
						drawerItemStyle: { display: "none" },
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
