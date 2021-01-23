import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';


const ListItem = ({item, deleteItem}) => {
 

  return(
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>Name:{item.text}</Text>
          <Text style={styles.listItemText}>Prix:{item.prix}</Text>
          <Text style={styles.listItemText}>qte:{item.qte}</Text>
          <Button title="x" name="remove" color="firebrick" onPress={() => deleteItem(item.id)}>x</Button>
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
    listItem : {
        padding : 15,
        backgroundColor : '#f8f8f8',
        borderBottomWidth : 1,
        borderColor : "#eee"},

    listItemView :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'center',
    },

    listItemText : {
        fontSize : 18,
    },

  
});

export default ListItem;