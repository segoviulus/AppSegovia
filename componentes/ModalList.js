import { StyleSheet, Text, View, Modal, Pressable, Dimensions } from 'react-native'
import React from 'react'


const ModalList = ({ itemSelected, modalVisible, deleteItem }) => {

  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('La ventana ha sido cerrada')
        }}>
        <View style={styles.viewModal}>

          <Text style={styles.textModal}>Estas por eliminar a {itemSelected.value}</Text>

          <Pressable onPress={deleteItem}>
            <Text style={styles.buttonDelete}>
              ELIMINAR
            </Text>
          </Pressable>

        </View>
      </Modal>
    </View>
  )
}

export default ModalList

const styles = StyleSheet.create({

  viewModal: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",

    marginTop: Dimensions.get('window').height / 2,
    margin: 80,
  },
  buttonDelete: {
    backgroundColor: '#be0000',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    color: '#fafafa'
  },
  textModal: {
    textAlign: "center",
    fomtSize: 15,
  }

})