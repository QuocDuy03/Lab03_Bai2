import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAppStyle from "../styles";
import { useNavigation } from '@react-navigation/native';

export default function AddNote() {
    const navigation = useNavigation();
    const styles = useAppStyle();
    return (
        <View style={styles.addNoteContainer} >
            <Text style={styles.addNoteText}>
                Add notes
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddNoteScreen')}>
                <Icon name="plus-circle" style={styles.addNoteIcon} />
            </TouchableOpacity>
        </View>
    )
}