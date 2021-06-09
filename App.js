import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";

export default function App() {

  const [todos, setTodos]=useState([
    {text:"Buy Coffee", key:"1"},
    {text:"Create an App", key:"2"},
    {text:"Play on Switch", key:"3"},
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key != key);
    });
  }

  const submitHandler=(text)=>{

    if(text.length > 3){
      setTodos((prevTodos)=>{
      return [
          {text:text, key:Math.random().toString() },
          ...prevTodos
      ]
    })
    }else{
      Alert.alert('OOPS', "Todos must be over 3 characters long", [
        {
          text:"Understood",
          onPress: ()=>console.log("Alert Closed")
        }
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
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
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
});
