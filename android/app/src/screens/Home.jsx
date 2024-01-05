import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet,
    View,
    Text,
    TextInput,
    Alert
} from "react-native";

export default function Home({navigation}){

    const [name, setName] = useState("");

    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        try{
            AsyncStorage.getItem("UserName")
            .then(
                value=>{
                    if(value !== null){
                        setName(value);
                    }
                }
            )

        }
        catch (error){
            console.log(error);
        }
    }

    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>Dobrodošli {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#063887',
    },
    text:{
        color:'#fff',
        padding:30,
        fontSize:30,
        justifyContent:"center",
    },
    input:{
        width:300,
        borderWidth:1,
        borderColor:"#555",
        borderRadius:10,
        backgroundColor:"#fff",
        textAlign:'center',
        fontSize:20,
        marginTop:10,
        marginBottom:10,
    }
})