import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableWithoutFeedback,ScrollView, Image, Animated } from 'react-native';

import { Shapes } from 'react-native-background-shapes';
import Arrow from 'react-native-arrow'



export default function Schedule({route, navigation}){
    const {name} = route.params;
    const stops = ["Burger King", "DFAC", "Thunder Academy", "Carey Gym", "Hovey Cut", "Hovey Gym", "Spartan DFAC", "Swimming Pool","Burger King", "DFAC", "Thunder Academy", "Carey Gym", "Hovey Cut", "Hovey Gym", "Spartan DFAC", "Swimming Pool"]

    const times = ["02", "10", "24", "40", "55"]
    const [translation, setTranslation] = useState(0);
    
    var korea = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"})

    dayKorea = new Date(korea);
    var dayofweek = dayKorea.getDay(); //get the Day of Week

    var date = korea.split(", ")[0]; //To get the Current Date
    var time = korea.split(", ")[1].slice(0,-3); //To get the Current Month10 17
    var ampm = korea.split(", ")[1].slice(-2);

    if (ampm == "PM"){
      var hour = parseInt(time.split(":")[0]) + 12
      time = hour.toString()+time.slice(-6)
    }

    var month = date.split("/")[0]; //To get the Current Month
    var day = date.split("/")[1]; //To get the Current Month
    var year = date.split("/")[2]; //To get the Current Month    
    var hours = time.split(":")[0]; //To get the Current Hours
    var min = time.split(":")[1]; //To get the Current Minutes
    var sec = time.split(":")[2]; //To get the Current Seconds

    useEffect(() => {
    for (let i = 0; i < 2000; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 1 * i);
    }
  }, []);

    return (
        <ScrollView style = {styles.container} contentContainerStyle={{flexDirection:'column'}}>
            <View style = {{flex: 1}}>
                <Shapes
                primaryColor="#52D017"
                secondaryColor="#FFE5B4"
                height={6}
                borderRadius={30}
                figures={[
                    {name: 'cutDiamond', position: 'baseline', axis: 'left', size: 70},
                    {name: 'triangle', size: 20, position: 'baseline', axis: 'left'},
                    {name: 'diamondNarrow', position: 'center', axis: 'bottom', size: 40},
                ]}
                />
            </View>

            <View style = {styles.busTitle}>
                <Text style = {{color: "#f0f0f0", fontWeight: "bold", fontSize: 40}}>{JSON.stringify(name).replace(/\"/g,"")}</Text>
            </View>

            <View style = {styles.timeContainer}>
                <Text style = {styles.currentBus}>2 buses running</Text>
            </View>

          <View style = {styles.bottomContainer}>


            <View style = {styles.wayContainer}>
              <Text style = {styles.way}>Gate->H221</Text>
              <Text style = {styles.way}>H221->Gate</Text>
            </View>
            
            {/* https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx */}
            <View style = {styles.scheduleContainer}>
                {stops.map(stop => ( 
                <View style = {styles.stops}>
                 <View style = {styles.arrowContainer}>
                  <Arrow size={10} color={'green'} />
                 </View>
                  <View style = {styles.busText}>
                  <Text>{stop}</Text>
                  </View>
                <View style = {styles.reversearrowContainer}>
                  <Arrow size={10} color={'green'} />
                 </View>
                </View>
                ))}

                {times.map(t => (
                  <View style = {{position:"absolute"}}>
                  {t==sec ? <View style = {{transform: [{ translateY: translation }],}}>
                  <Image
                    style = {styles.tinyLogo}
                    source = {{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWstohUbksEmMUr8r2OHbmx-paeJwIhVdisw&usqp=CAU"
                    }}
                  />
                  </View>
                  :<Text> i </Text>}
                  </View>
                ))}
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    arrowContainer:{
      transform: [{ rotate: '270deg'}],
      left: 10.9,
    },
    bottomContainer:{
      paddingTop: 10,
      backgroundColor: "#FDFDFD",
    },
    reversearrowContainer:{
      right: 11.3,
      transform: [{ rotate: '90deg'}],
    },
    container:{
        backgroundColor: '#F5F5F5',
        flex: 1,
        },
    busTitle: {
        height: 130,
        justifyContent: "center",
        paddingHorizontal: 25
    },
    timeContainer :{
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        marginTop:6,
        marginBottom: 3,
    },
    currentBus:{
        fontSize: 13
    },
    scheduleContainer:{

    },
    way: {
      borderWidth: 2,
      borderColor: "#F0F0F0",
      marginHorizontal:33   
    },
    wayContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      // borderTopWidth: 2,
      // borderTopColor: "#F0F0F0"
    },
    stops:{
        flexDirection: "row",
        position: "relative",
        backgroundColor: "#FDFDFD",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        borderRadius: 20,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
    },
    busText:{
        fontSize: 15,
        fontWeight: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 240,
        height: "100%",
        borderRightWidth: 3.3,
        borderLeftWidth: 3.3,
        borderColor: "green",

    },
    tinyLogo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    zIndex: 1,
    // position: "absolute",
    borderRadius: 50,
    marginHorizontal: 10,
    marginTop: 10,
  },
});