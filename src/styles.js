import { StyleSheet } from "react-native";
import { useSettings } from "./components/SettingsContext";

export default function useAppStyle() {
    const {isDarkMode, fontSize} = useSettings();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: isDarkMode ?"#000": "#fff",
            paddingHorizontal: 10,
        },
        settingContainer: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: isDarkMode ?"#000": "#fff",
        },
        tabBar: {
            height: 60,
            backgroundColor: isDarkMode ?"#000": "#fff",
        },
        tabLabel: {
            fontSize: 15,
            marginBottom: 5,
            color: isDarkMode ? "#fff" : "#000",
        },
        tabIcon: {
            color:"#000",
            fontSize: 30,
            color: isDarkMode ? "#fff" : "#000",
        },
        tabIconActive: {
            color: "blue",
        },
        header: {
            marginTop: 50,
        },
        headerText: {
            fontSize: fontSize,
            fontWeight: "bold",
            color: isDarkMode ? "blue" : "orange",
        },
        headerStackContainer: {
            backgroundColor: isDarkMode ?"#000": "#fff",
        },
        headerStackText: {
            color: isDarkMode ? "#fff" : "#000",
        },
        addNoteContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
            padding: 20,
        },
        addNoteIcon: {
            fontSize: (34 + fontSize),
            color: isDarkMode ? "blue" : "orange",
        },
        addNoteText: {
            fontSize: fontSize,
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "gray",
        },
        noteContainer: {
            flexDirection: "row",
            width: "100%",
            padding: 20,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            justifyContent: "space-between",
            alignItems: "center",
        },
        noteContent: {
            flexDirection: "column",
            justifyContent: "flex-start",
        },
        noteTitle: {
            fontSize: fontSize,
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "#000",
        },
        noteText: {
            fontSize: fontSize,
            color: isDarkMode ? "#fff" : "#000",
        },
        deleteIcon: {
            fontSize: 14 + fontSize,
            color: isDarkMode ? "#fff" : "#000",
        },
        textInput: {
            width: "100%",
            fontSize: fontSize,
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            color: isDarkMode ? "#fff" : "#000",
        },
        iconContainer: {
            flexDirection: "row",
            gap: 2,
        },
        iconCancel: {
            fontSize: 24 + fontSize,
            color: "red",
        },
        iconConfirm: {
            fontSize: 24 + fontSize,
            color: "green",
        },
        settingTheme: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
        },
        slider: {
            marginHorizontal: 30,
            paddingVertical: 20,
        },
        settingText: {
            fontSize: fontSize,
            color: isDarkMode ? "#fff" : "#000",
        }
    });
    
    return styles;
}

