import { ImageBackground, TextInput, View, StyleSheet, Text, FlatList, Modal, Alert, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const bgImage = { url: './assets/bgsoccer.jpg'}

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

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
    <TouchableOpacity style={styles.items} onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}></ImageBackground>
      <Text
        style={styles.title}
      >
        Grupo de amigos ⚽</Text>
      <View style={styles.itemContainer}>
        <TextInput
          value={textItem}
          style={styles.input}
          placeholder='Ingresar usuario'
          onChangeText={onHandleChangeItem}
        />
        <TouchableOpacity onPress={addItem} style={styles.button} >
          <Text>Agregar al prode</Text>
        </TouchableOpacity>



      </View>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('La ventana ha sido cerrada');
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ backgroundColor: '#00614' }}>
            <Text>Quieres eliminar este usuario de la lista?</Text>
            <Pressable onPress={() => deleteItem()} style={styles.buttonDelete} >
              <Text>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  image: {
    flex: 1,
    justifyContent: "center"
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
  buttonDelete: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
})




{/*<View>
        {itemList.map((item) => (
          <View style={styles.items}>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>*/}