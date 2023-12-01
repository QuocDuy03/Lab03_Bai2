import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import useAppStyle from "../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import * as SQLite from "expo-sqlite"
import { useNavigation, useRoute } from "@react-navigation/native";


const db = SQLite.openDatabase("Lab03.db");

//21520766 -  Đặng Quốc Duy
export default function AddNoteScreen() {
    const styles = useAppStyle();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const navigation = useNavigation();
    const saveNote = () => {
        if (title) {
            db.transaction(tx => {
                tx.executeSql(
                    "INSERT INTO Notes (title, note) VALUES (?, ?)",
                    [title, note],
                    (_, { rowsAffected }) => {
                        if (rowsAffected > 0) {
                            navigation.navigate('MainScreen');
                        } else {
                            Alert.alert('Error', 'Failed to add note');
                        }
                    },
                    (_, error) => {
                        Alert.alert('Error', `Failed to add note: ${error}`);
                    }
                );
            });
        }
        else {
            Alert.alert('Warning', 'Please enter a title');
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter your title"
                placeholderTextColor={styles.textInput.color}
            />
            <TextInput
                multiline
                numberOfLines={4}
                style={styles.textInput}
                value={note}
                onChangeText={setNote}
                placeholder="Enter your note"
                placeholderTextColor={styles.textInput.color}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                    <Icon name="close-circle" style={styles.iconCancel} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => saveNote()}>
                    <Icon name="check-circle" style={styles.iconConfirm} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

