import * as React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import {Shapes} from "react-native-background-shapes";

export default function Base({navigation}) {
  return (
    <SafeAreaView style = {{backgroundColor: "#F5F5F5", flex: 1}}>
      <View style= {{position: "absolute", marginTop: 30, zIndex: 1, elevation: 100, paddingHorizontal: 20 }}>
        <Text style = {{color: "white", fontWeight: "bold", fontSize: 50}}> 
        Base
        </Text>
      </View>
      
      <View>
      <Shapes 
        primaryColor="#FF0066"
        secondaryColor="#FF00FF"
        height={3.5}
        borderRadius={30}
        figures={[
            {name: 'circle', size: 50, position: "flex-start", axis: "right"},
            {name: 'donut', position: 'flex-start', axis: 'top', size: 80},
            {name: 'circle', position: 'center', axis: 'right', size: 100},
        ]}
      />
      </View>
    <View style = {styles.cardContainer}>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Bus')}>
        <View style = {styles.cards}>
            <View style = {styles.itemsInside}>
                <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://images-na.ssl-images-amazon.com/images/I/41ui56NqaNL._SX425_.jpg',
                }}
                />
                <Text style = {styles.cardText}> 
                Casey
                </Text>
                <Image
                style={styles.bigLogo}
                source={{
                uri: 'https://images-na.ssl-images-amazon.com/images/I/41ui56NqaNL._SX425_.jpg',
                }}
                />

            </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Bus')}>
        <View style = {styles.cards}>
            <View style = {styles.itemsInside}>
                <Image
                style={styles.tinyLogos}
                source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/2/27/USAGH-CREST.jpg',
                }}
                />
                <Text style = {styles.cardText}> 
                Humphreys
                </Text>
                <Image
                style={styles.bigLogo}
                source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/2/27/USAGH-CREST.jpg',
                }}
                />
            </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Bus')}>
        <View style = {styles.cards}>
            <View style = {styles.itemsInside}>
                <Image
                style={styles.tinyLogos}
                source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/19thESCshoulder.svg/1039px-19thESCshoulder.svg.png',
                }}
                />
                <Text style = {styles.cardText}> 
                Walker
                </Text>
                <Image
                style={styles.bigLogo}
                source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/19thESCshoulder.svg/1039px-19thESCshoulder.svg.png',
                }}
                />
            </View>
        </View>
      </TouchableWithoutFeedback>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    top: 240
  },
  cards: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "white",
    height: 130,
    borderRadius: 15,
    borderColor: "white",
    top: -70,
    borderWidth: 1,
    margin: 15,
    marginBottom: -1,
    alignItems:"center",
    overflow: "hidden"
  },
  cardText: {
    fontWeight: "500",
    fontSize: 16,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemsInside : {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 15,
    // backgroundColor: "green"
  },
  tinyLogo: {
      position: "relative",
      width: 60,
      height: 60,
      resizeMode: "contain",
      marginRight: 5
  },
    bigLogo: {
      position: "absolute",
      width: 220,
      height: 200,
      right: -100,
      opacity: 0.5
  },
    tinyLogos: {
      width: 50,
      height: 50,
      resizeMode: "contain",
      marginRight: 5
  }
});
