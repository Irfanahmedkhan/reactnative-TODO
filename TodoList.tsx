import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Text,
  Header,
  Body,
  Label,
  Title,
  Content,
  Footer,
  FooterTab,
  Form,
  Item,
  Input,
  Button,
  List,
  ListItem,
  CheckBox,
  Icon,
} from "native-base";

export default function TodoList(props: any) {
  
  const updateStatus = (id: number) => {
  
    const updatedList = props.todoList.map((item: any) => {
      if (item.id == id) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
      });
      props.setTodoList(updatedList);
    };

    const deleteTodo = (id: number) => {
      const updatedList = props.todoList.filter((item: any) => {
        
        return item.id !=id;
      });
      props.setTodoList(updatedList);
    };

  return (
    <List style={styles.box}>
      {props.todoList.map((items: any) => (
        <ListItem key={items.id}>
          <Text style={{ flex: 1 }}>{items.id}</Text>
          <Text style={{ flex: 5 }}>{items.task}</Text>
          <View style={{ flex: 1 }}>
            <CheckBox
              checked={items.status}
              color="blue"
              onPress={() => {
                updateStatus(items.id);
              }}
            />
          </View>
          <Icon
            name="trash"
            style={{ color: "red" }}
            onPress={() => {
              deleteTodo(items.id);
            }}
          ></Icon>
        </ListItem>
      ))}
    </List>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    margin: 20,
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});