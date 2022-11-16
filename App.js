import { ImageBackground, Dimensions, TextInput, View, StyleSheet, Text, FlatList, Modal, Alert, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ModalList from "./componentes/ModalList";
import ElementList from "./componentes/ElementList"


export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const [itemId, setItemId] = useState(0);

  const onHandleChangeItem = (textUser) => {
    setTextItem(textUser)
  };

  const addItem = () => {
    setItemList(
      currentItems => [
        ...currentItems,
        { id: Math.random().toString(), value: textItem }
      ])
    setTextItem('')
  }

  const selectedItem = (id) => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setItemList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id),
    )
    setItemSelected({}),
      setModalVisible(false)

  }

  const renderItem = ({ item }) => (
    <ElementList item={item} selectedItem={selectedItem}></ElementList>
  )


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Grupo de amigos ⚽</Text>
      <View style={styles.itemContainer}>
        <TextInput
          value={textItem}
          style={styles.input}
          placeholder='Ingresar usuario'
          onChangeText={onHandleChangeItem}
        />
        <Pressable
          style={styles.button}
          onPress={addItem}
        >
          <Text style={styles.textButton}>
            Agregar
          </Text>
        </Pressable>

      </View>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <ModalList itemSelected={itemSelected} modalVisible={modalVisible} deleteItem={deleteItem}></ModalList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    width: 200,
    marginRight: 10,
  },
  items: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5,
    padding: 12,
    backgroundColor: '#5ccb5f',
    borderRadius: 25,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    margin: 15,
    fontSize: 25,
  },
  button: {
    backgroundColor: '#009929',
    padding: 10,
    borderRadius: 25,
    color: 'white',
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  background: {
    position: 'relative',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})




{/*<View>
        {itemList.map((item) => (
          <View style={styles.items}>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>*/}