import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Header , Body, Label, Title, Content, Footer, FooterTab, Form, Item, Input,Button  } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import TodoList from "./TodoList";

const initialData = [
  {
    id: 1,
    task: "task1",
    status: false,
  },
  {
    id: 2,
    task: "task2",
    status: true,
  },
  {
    id: 3,
    task: "task3",
    status: false,
  },
];

export default function App() {
const [isReady, setIsReady] = useState(false)
const [todoList, settodoList] = useState(initialData)
const [text, setText] = useState('')
const [counter, setCounter] = useState(4)
  useEffect(() => {
    (
      async () => {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          ...Ionicons.font,
        });
      }
    )()
    setIsReady(true)
  }, [])
  if (!isReady) {
    return <Text> Loading... </Text> ;    }

  const addTodo= (text: string) => {
    
  const newItem = {
    id : counter,
    task : text,
    status: false
  }
  settodoList ( [...todoList, newItem])
  setCounter (counter+1)
  setText('')

  }


  return (
    <Container>
      <Header>
        <Body
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Title>TODO APP.</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Task</Label>
            <Input onChangeText={setText} value={text} />
          </Item>
          <Button
            primary
            full
            style={{ margin: 30, borderRadius: 10 }}
            onPress={() => {
              addTodo(text);
            }}
          >
            <Text> Add Todo </Text>
          </Button>
        </Form>

        <TodoList todoList={todoList} setTodoList={settodoList} />
      </Content>

      <Footer>
        <FooterTab
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Title>react Native</Title>
        </FooterTab>
      </Footer>
    </Container>
  );
}


