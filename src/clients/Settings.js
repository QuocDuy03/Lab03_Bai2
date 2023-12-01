import React, { useState, useEffect } from "react";
import { View, Text, Switch } from "react-native";
import useAppStyle from "../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Slider from '@react-native-community/slider';
import { useSettings } from "../components/SettingsContext";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("Lab03.db");
//21520766 -  Đặng Quốc Duy
export default function Settings() {
    const styles = useAppStyle();
    const {isDarkMode, setIsDarkMode, fontSize, setFontSize} = useSettings();
    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);
    return (
        <View style={styles.settingContainer}>
            <View style={styles.settingTheme}>
                <Text style={styles.settingText}>
                    Dark mode
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    onValueChange={toggleSwitch}
                    value={isDarkMode}
                />
            </View>
            <View style={styles.settingTheme}>
                <Text style={styles.settingText}>
                    Font size
                </Text>
                <Text style={styles.settingText}>
                    {fontSize}
                </Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={12}
                maximumValue={36}
                step={2}
                value={fontSize}
                onValueChange={(value) => setFontSize(value)}
                minimumTrackTintColor="#FF0000" 
                maximumTrackTintColor={isDarkMode ? "#fff" : "#000000"}
            />
        </View>

    )
}