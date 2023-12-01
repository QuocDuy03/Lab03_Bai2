import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import useAppStyle from "../styles";
import Header from "../components/Header";
import AddNote from "../components/AddNote";
import Note from "../components/Note";
import * as SQLite from "expo-sqlite"
import { useNavigation } from "@react-navigation/native";
const db = SQLite.openDatabase('Lab03.db')
//21520766 -  Đặng Quốc Duy
export default function Home() {
    const styles = useAppStyle();
    const [noteList, setNoteList] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM Notes', [], (_, { rows }) => {
                const data = rows._array;
                setNoteList(data);
            },)
        })
    }, [db, noteList])
    const deleteNote = (id) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM Notes WHERE id = ?", [id], (_, result) => {
                    console.log("Deleted note successfully");
                }
            )
        })
    }

    const editNote = (id) => {
        navigation.navigate('EditNoteScreen', { itemId: id});
    }

    return (
        <View style={styles.container}>
            <Header />
            <AddNote />
            {
                noteList.map((item) => (
                    <Note
                        key={item.id}
                        title={item.title}
                        note={item.note}
                        deleteNote={() => deleteNote(item.id)}
                        editNote={() => editNote(item.id)}
                    />
                ))
            }
        </View>

    )
}