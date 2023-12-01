import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import useAppStyle from "../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import * as SQLite from "expo-sqlite"
import { useNavigation, useRoute } from "@react-navigation/native";

const db = SQLite.openDatabase("Lab03.db");

//21520766 -  Đặng Quốc Duy
export default function EditNoteScreen() {
    const styles = useAppStyle();
    const route = useRoute();
    const { itemId } = route.params;
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM Notes WHERE id = ?', 
                [itemId],
                (_, { rows }) => {
                    const data = rows.item(0);
                    setTitle(data.title);
                    setNote(data.note);
                },
                (_, error) => {
                    Alert.alert(error);
                }
            );
        });
    }, [itemId]);
    
    const saveNote = () => {
        if (title) {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE Notes SET title = ?, note = ? WHERE id = ?',
                    [title, note, itemId],
                    (_, { rowsAffected }) => {
                        if (rowsAffected > 0) {
                            navigation.navigate('MainScreen');
                        } else {
                            Alert.alert('Error', 'Failed to update note');
                        }
                    },
                    (_, error) => {
                        Alert.alert(error);
                    }
                );
            });
        } else {
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
            />
            <TextInput
                multiline
                numberOfLines={4}
                style={styles.textInput}
                value={note}
                onChangeText={setNote}
                placeholder="Enter your note"
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