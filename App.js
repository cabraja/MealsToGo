import { Platform, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.searchContainer}>
					<Text>Search</Text>
				</View>

				<View style={styles.mainContainer}>
					<Text>Main content</Text>
				</View>
			</View>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchContainer: {
		backgroundColor: "#ACC5FF",
		justifyContent: "center",
		padding: 20,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	mainContainer: {
		flex: 1,
		backgroundColor: "#dfe9ff",
		justifyContent: "center",
		alignItems: "center",
	},
});
