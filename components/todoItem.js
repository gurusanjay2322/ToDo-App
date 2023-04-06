import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
    View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
export default function TodoItem({ item,pressHandler}) {
    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}> 
        <View style={styles.item}>
            <Text style={styles.text} >{item.text}</Text>
            <MaterialIcons name='delete' size={20} color='coral' />
        </View>
        </TouchableOpacity>
    );
    }
const styles = StyleSheet.create({  
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "coral",
        backgroundColor: "#BDCDD6",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
// Path: App.js