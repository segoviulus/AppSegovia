import { useState } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ElementList = ({ item, selectedItem }) => {

  const [confirmar, setConfirmar] = useState("Confirmar?")


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.items}>
          <TouchableOpacity onPress={() => selectedItem(item.id)}>
            <Text style={styles.textlist}>{item.value}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setConfirmar("Confirmado ⚽") }}>
            <Text style={styles.confirmar}>{confirmar}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ElementList

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 5
  },
  innerContainer: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#5ccb5f',
    borderRadius: 50,
    width: 310
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },
  textlist: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 5,
    color: '#fafafa',
  },
  confirmar: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 5,
    color: '#fafafa',
  },

})