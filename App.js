import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './componement/header';
import  ListItem from './componement/ListItem';
import  AddItem from './componement/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
]);

const deleteItem = (id) =>{
  setItems(prevItems =>{
    return prevItems.filter(item => item.id != id);
  })
};

const addItem = (text) =>{
  if(!text){
    //Alert.alert('Error','please enter an Item', {text : 'OK'} );
  } else{
    setItems(prevItems =>{
      return [{id:5, text }, ...prevItems];
    });
  }
 
}

  return(
    <View style={styles.container}>
      <Header title = 'Shoppig List'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} 
      renderItem={({item}) =>(
       <ListItem item={item} />
       )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {                                         
    flex:1,
  },

  
    
  
});

export default App;