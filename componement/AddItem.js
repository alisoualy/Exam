import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


const AddItem = ({props, addItem}) => {

    const [text, setText] = useState('');
    const [prix, setPrix] = useState('');
    const [qte, setQte] = useState('');

   const onchange = TextValue => setText(TextValue);
   const onchange1 = TextValue => setPrix(TextValue);
   const onchange2 = TextValue => setQte(TextValue);

  return(
    <View>
        <TextInput placeholder = "Nom produit" style={styles.input} onChangeText={onchange}></TextInput>
        <TextInput placeholder = "prix produit" style={styles.input} onChangeText={onchange1}></TextInput>
        <TextInput placeholder = "quantité produit" style={styles.input} onChangeText={onchange2}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => addItem(text,prix,qte)}>
            <Text style={styles.btnText}>Add Item</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 input : {
     height : 60,
     padding : 8,
     fontSize : 16,
 },

 btn : {
     backgroundColor : "#c2bad8",
     padding : 9,
     margin : 5,
 },

 btnText : {
     color : 'darkslateblue',
     fontSize : 20,
     textAlign : 'center',
 }
  
});

export default AddItem;