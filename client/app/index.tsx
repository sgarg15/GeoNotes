import { registerRootComponent } from "expo";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Link href="/user/about" asChild>
				<Pressable
					onPress={() => {
						console.log("About pressed");
					}}
				>
					<Text>ABOUT</Text>
				</Pressable>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

registerRootComponent(HomeScreen);
