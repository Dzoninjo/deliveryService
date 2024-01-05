import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Dimensions, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage"

const windowWidth = Dimensions.get('window').width;

export default function Login({ navigation }) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const setData = async() => {
        if( name.length === 0 || password.length === 0){
            Alert.alert("Upozorenje","Korisničko ime ili lozinka ne smeju da budu prazni")
        }
        else{
            try{
              await AsyncStorage.setItem("UserName", name);
              navigation.navigate("Home");
            }
            catch (error){
              console.log(error);
            }
        }
    }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Dobrodošli u aplikaciju za kućnu dostavu</Text>
      <View style={styles.credentials}>
        <View style={styles.labelContainer}>
          <Text style={styles.labels}>Korisničko ime</Text>
          <TextInput style={[styles.input, { textAlign: 'center', width: windowWidth - 40 }]}
          placeholder="Unesite Vaše korisničko ime" 
          onChangeText={(value) =>setName(value)}/>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labels}>Lozinka</Text>
          <TextInput style={[styles.input, { textAlign: 'center', width: windowWidth - 40 }]} secureTextEntry={true} 
          placeholder="Unesite Vašu lozinku"
          onChangeText={(value) =>setPassword(value)}/>
        </View>
        <TouchableOpacity style={[styles.button, { width: windowWidth * 0.75 }]}
        onPress= {setData}
        >
          <Text style = {styles.buttonText}>Uloguj se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#063887',
  },
  text: {
    color: '#fff',
    padding: 30,
    fontSize: 30,
    justifyContent: "center",
    textAlign :"center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  credentials: {
    flex: 1,
    marginTop: '20%',
    alignItems: 'center',
    backgroundColor: '#063887',
    paddingHorizontal: 20,
  },
  labelContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
  },
  labels: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#ffcb3f",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: 'center', 
    marginTop : "10%",
  }, 
  buttonText : {
    color : "#063887",
    fontSize : 20,
    fontWeight : "bold",
    fontStyle : "italic"
  }
});
