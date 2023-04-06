import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";
export default function Form({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="Add Your Todo Here :)"
        style={styles.input}
        onChangeText={changeHandler}
      />

      <TouchableOpacity>
        <Text style={styles.button} onPress={() => submitHandler(text)}>
            Add Task! 
        </Text>
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
    button: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        padding: 2,
        backgroundColor: "#EEE9DA",
        
    },

});
