import { registerRootComponent } from "expo";
import { Link } from "expo-router";
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import NotesBackground from "../assets/notes_background.svg";
import Icon from "react-native-vector-icons/Feather";

export default function MainScreen() {
	return (
		<View style={styles.container}>
			<NotesBackground
				width={Dimensions.get("window").width}
				height={Dimensions.get("window").height}
				style={styles.backgroundSvg}
			/>
			<View style={styles.logoContainer}>
				<Text style={styles.logoText}>GeoNotes</Text>
				<Icon name="map-pin" size={50} color="#000" />
			</View>
			<View style={styles.buttonContainer}>
				<Link href="/user/home" asChild replace={true}>
					<TouchableOpacity
						style={styles.getStartedButton}
						onPress={() => console.log("Get Started")}
					>
						<Text style={styles.getStartedText}>Get Started</Text>
					</TouchableOpacity>
				</Link>
				<Link href="/user/login" asChild>
					<TouchableOpacity onPress={() => console.log("login")}>
						<Text style={styles.loginText}>Login</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between", // Distribute space between items
		backgroundColor: "#ffffff", // Set background color to white
	},
	backgroundSvg: {
		position: "absolute",
		top: 0,
		left: 0,
	},
	logoContainer: {
		flexDirection: "row", // Align items in a row
		alignItems: "center", // Center items vertically
		marginTop: 190, // Adjust margin to move it down
	},
	logoText: {
		fontSize: 50,
		fontWeight: "400",
		color: "#000",
		marginRight: 10, // Add space between text and icon
	},

	buttonContainer: {
		marginBottom: "20%",
		width: "90%", // Make it slightly less than the width of the screen
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
	},

	getStartedButton: {
		backgroundColor: "#fdfd96",
		paddingVertical: 12,
		borderRadius: 10,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 2,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		width: "90%", // Make it slightly less than the width of the screen
	},
	getStartedText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	loginButton: {
		alignSelf: "center",
	},
	loginText: {
		fontSize: 20,
		fontWeight: "700", // Make the login text bolder
		color: "#000",
	},
});

