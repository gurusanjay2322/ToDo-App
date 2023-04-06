import React, { useState,  } from "react";
import Header from "./components/Header";
import TodoItem from "./components/todoItem";
import Form from "./components/Form";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Touch Me To Remove !", key: "1" },
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
      
    } else {
      Alert.alert(
        "OOPS!",
        "Todos must be over 3 chars long",
        [
          {
            text: "Understood",
            onPress: () => console.log("alert closed"),
          },
        ]
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
    backgroundColor: "#93BFCF",
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },

});
