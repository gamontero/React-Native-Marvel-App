import * as React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';

export default function CharacterCard({image, name}) {
  return (
    <View style={styles.container}>
	    <Image style={styles.image} source={image}/>
        <Text style={styles.font}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      alignItems: 'center'
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });