import React from "react";
import { View, Text } from "react-native";
import useAppStyle from "../styles";

export default function Header() {
    const styles = useAppStyle();
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Note App</Text>
        </View>
    )
}