/* eslint-disable react-native/no-inline-styles */
import { registerRootComponent } from "expo";
import * as React from "react";

import { StyleSheet, View, Image } from "react-native";
import { ResponsiveGrid } from "react-native-flexible-grid";

export default function MyNotes() {
	let idCounter = React.useRef(0);
	interface DataProp {
		id: number;
		widthRatio?: number;
		heightRatio?: number;
		imageUrl: string;
	}

	const getData = () => {
		const originalData = [
			{
				imageUrl: "https://picsum.photos/200/300?random=1",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=2",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=3",
				widthRatio: 2,
				heightRatio: 2,
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=4",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=5",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=6",

				widthRatio: 1,
				heightRatio: 2,
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=7",

				widthRatio: 2,
				heightRatio: 2,
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=8",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=9",
			},
			{
				imageUrl: "https://picsum.photos/200/300?random=10",
			},
		];

		let clonedData: DataProp[] = [];

		for (let i = 0; i < 5; i++) {
			const newData = originalData.map((item) => ({
				...item,
				id: ++idCounter.current,
			}));
			clonedData = [...clonedData, ...newData];
		}

		return clonedData;
	};

	const renderItem = ({ item }: { item: DataProp }) => {
		return (
			<View style={styles.boxContainer}>
				<Image
					source={{ uri: item.imageUrl }}
					style={styles.box}
					resizeMode="cover"
				/>
			</View>
		);
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
			}}
		>
			<ResponsiveGrid
				virtualization={true}
				maxItemsPerColumn={2}
				data={getData()}
				renderItem={renderItem}
				showScrollIndicator={false}
				style={{
					padding: 5,
				}}
				keyExtractor={(item: DataProp) => item.id.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	boxContainer: {
		flex: 1,
		margin: 1,
		padding: 7,
	},
	image: {
		width: 100,
		height: 100,
	},
	box: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
		borderRadius: 10,
	},
	text: {
		color: "white",
		fontSize: 10,
		position: "absolute",
		bottom: 10,
	},
});
