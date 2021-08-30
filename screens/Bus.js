import * as React from 'react';
import {useState} from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';



import { Shapes } from 'react-native-background-shapes';

export default function Bus({navigation}) {
const [text, setText] = useState('')
const H221 = "H221";
const Hovey = "Hovey";
const TMC = "TMC";
  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          marginTop: 30,
          zIndex: 1,
          elevation: 100,
          paddingHorizontal: 20,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>
          Bus
        </Text>
      </View>
      <View>
        <Shapes
          primaryColor="#416DF8"
          secondaryColor="#2F53D5"
          height={4}
          borderRadius={30}
          figures={[
            {name: 'cutDiamond', position: 'baseline', axis: 'left', size: 170},
            {name: 'triangle', size: 60, position: 'baseline', axis: 'left'},
            {name: 'diamondNarrow', position: 'center', axis: 'bottom', size: 80},
          ]}
        />
      </View>

      <View style={styles.cardContainer}>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Schedule', {name: H221})}>
        <View style={styles.cards}>
          <View style={styles.itemsInside}>
            <Image
            style = {styles.tinyLogo}
            source = {{
              uri: "https://thumbs.dreamstime.com/b/bus-icon-isolated-white-background-black-vector-185767060.jpg"
            }}
            />
            <Text style={styles.cardText}>{H221}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Schedule', {name: Hovey})}>
        <View style={styles.cards}>
          <View style={styles.itemsInside}>
            <Image
            style = {styles.tinyLogo}
            source = {{
              uri: "https://thumbs.dreamstime.com/b/bus-icon-isolated-white-background-black-vector-185767060.jpg"
            }}
            />
            <Text style={styles.cardText}>{Hovey}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Schedule', {name: TMC})}>
        <View style={styles.cards}>
          <View style={styles.itemsInside}>
            <Image
            style = {styles.tinyLogo}
            source = {{
              uri: "https://thumbs.dreamstime.com/b/bus-icon-isolated-white-background-black-vector-185767060.jpg"
            }}
            />
            <Text style={styles.cardText}>{TMC}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    top: 150,
    paddingHorizontal: 20
  },
  cards: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 140,
    width: '38%',
    borderRadius: 15,
    borderColor: 'white',
    top: -70,
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemsInside: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  }
});
