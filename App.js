import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './componement/header';
import  ListItem from './componement/ListItem';
import  AddItem from './componement/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {id: 1, text: 'Milk', prix : 3, qte : 2},
    {id: 2, text: 'Eggs', prix : 4, qte : 2},
    {id: 3, text: 'Bread', prix : 6, qte : 2},
    {id: 4, text: 'Juice', prix : 7, qte : 2},
]);

const deleteItem = id => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id !== id);
  });
};

const addItem = (text,prix,qte) =>{
  if(!text){
    //Alert.alert('Error','please enter an Item', {text : 'OK'} );
  } else{
    setItems(prevItems =>{
      return [{id:5, text, prix, qte }, ...prevItems];
    });
  }
 
}

  return(
    <View style={styles.container}>
      <Header title = 'Shoppig List'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} 
      renderItem={({item}) =>(
       <ListItem item={item}
       deleteItem={deleteItem} />
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