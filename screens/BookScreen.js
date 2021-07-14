import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

export default function BookScreen({route}) {
    const book = route.params;

    return (
        <View style={styles.bookView} >
            <Text style={styles.infosTitle}>Title</Text>
            <Text style={styles.infosGet}>{book.title}</Text>
            <Text style={styles.infosTitle}>Description</Text>
            <Text style={styles.infosGet}>{book.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bookView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infosTitle: {
        fontSize : 24,
        color:"white",
        padding:'2%',
        backgroundColor:'green'
    },
    infosGet: {
        fontSize : 18,
        marginLeft : '5%',
        marginTop : '5%',
        marginBottom : '5%',
    }
  });


