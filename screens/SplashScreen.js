import React,{useState, useEffect} from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen({navigation}) {

    function goToLibrary(event) {
        // navigation.navigate('Library')
    //! Faire un écran sans fleche de retour
        navigation.reset({
          index : 0,
          routes: [
            {name: 'Library'}
          ]
      })
    }

    useEffect(() => {
        Font.loadAsync({
            'comfortaa': require('../assets/fonts/Comfortaa-VariableFont_wght.ttf')
            });
      }, []);

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['white', 'green']}
                style={styles.background,styles.container}
                >
                
                <Text style={styles.bBookName}><Entypo name="open-book" style={styles.bBookLogo} />Book & B</Text>

                
                <Button
                    style={styles.seeMore}
                    title="See more"
                    color="green"
                    onPress={goToLibrary}
                />

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
      width: '100%'
    },
    bBookName: {
        fontSize : 50,
        color : "green",
        fontFamily:'comfortaa',
        marginTop :60
    },
    bBookLogo : {
        fontSize : 60,
        color : "white",
        backgroundColor:'green',
        padding:15,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 15,
        marginRight:20
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
      },
      seeMore : {
    }
  });
