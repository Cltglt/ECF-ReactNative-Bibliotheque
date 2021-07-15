import React,{useState, useEffect} from 'react';
import { ScrollView,View,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import axios from 'axios';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import {REACT_APP_GOOGLE_API_KEY} from '@env';

export default function LibraryScreen({navigation},e) {

    const [book, setBook] = useState([]);
    const [search, setSearch] = useState('');
    const [saveBook, setSaveBook] = useState ([]);

    useEffect(() => {
        Font.loadAsync({
            'comfortaa': require('../assets/fonts/Comfortaa-VariableFont_wght.ttf')
            });
      }, []);

    const updateSearch = (search) => {
        setSearch(search);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${REACT_APP_GOOGLE_API_KEY}`)
        .then(res => {
            setBook(res.data.items);
        })
    };

    function goToDetails(bookTitle,bookDesc) {
        navigation.navigate('Book',{
            title : bookTitle,
            description : bookDesc
        })
    }

    const updateSaveBook = (item) => {
        //! TODO
        console.log(item)
        setSaveBook(item);
        console.log(saveBook)
    }

    const renderItem = ({ item }) => {
        return (
        <ListItem style={styles.listItem} onPress={()=>goToDetails(item.volumeInfo.title,item.volumeInfo.description)}>

            <ListItem.Content >
                <ListItem.Title style={styles.fontTitle}>{item.volumeInfo.title}</ListItem.Title>
                <ListItem.Subtitle>{item.volumeInfo.description}</ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={()=>updateSaveBook(item.volumeInfo)}>
                <AntDesign name="pluscircle" size={24} color="#4C7742" />
            </TouchableOpacity>

            <ListItem.Chevron color="#4C7742"/>
        </ListItem>
        )}

    return (
        <View>
        
            <ScrollView>
                <SearchBar
                    placeholder="Cherchez votre livre..."
                    onChangeText={updateSearch}
                    value={search}
                    style={styles.searchBar}
                    lightTheme
                    round
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={styles.inputContain}
                    placeholderTextColor='#4C7742'
                />
                <FlatList
                    data={book}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
    fontTitle: {
        fontFamily:'comfortaa',
        fontSize:25
    },
    input: {
        borderRadius:20,
        padding:10
    },
    inputContainer: {
        backgroundColor:'white'
    },
    inputContain: {
        backgroundColor:'white'
    },
    listItem: {
        borderBottomColor: '#4C7742',
        borderBottomWidth: 1,
    }
  });

