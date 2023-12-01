import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAppStyle from "../styles";

export default function Note({ title, note, deleteNote, editNote }) {
    const styles = useAppStyle();
    return (
        <TouchableOpacity style={styles.noteContainer} onPress={editNote} >
            <View style={styles.noteContent}>
                <Text style={styles.noteTitle}>
                    {title}
                </Text>
                <Text style={styles.noteText}>
                    {note}
                </Text>
            </View>
            <TouchableOpacity onPress={deleteNote}>
                <Icon name="trash-can-outline" style={styles.deleteIcon} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}