import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { TouchableOpacity } from 'react-native-web';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';
import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa'; 
import AppLoading from 'expo-app-loading';

const AUDIO_STREAM = "http://direct.radioarmenie.com:9029/stream?type=http&nocache=197416"; 

const callLink=()=>{
  Linking.openURL('tel:0680562492');
}

const mailLink=()=>{
  Linking.openURL('mailto:stefsbk@gmail.com');
}

const Contact=()=>{
  return(
    <View style={styles.content}>
      <Text>Page Contact</Text>
    </View>
  )
}

export default function App() {

  const [page, setPage]=useState('Home');

  const [sound, setSound]=useState(null);

  const[fontLoaded]=useFonts({
    Comfortaa_400Regular
  });
  if (!fontLoaded){
    return <AppLoading/>;
  }

  const homeLink=()=>{
    // Linking.openURL('https://google.com');
    setPage('Home');
  }

  async function playSound(){
    if (sound===null){
      const {sound}=await Audio.Sound.createAsync(
        {uri: AUDIO_STREAM}
      )
      setSound(sound);
      sound.playAsync();
      console.log(sound);
    }else{
      setSound(null);
      sound.stopAsync();
      console.log(sound);
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={homeLink}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{
          color:'orange',
          fontFamily:'Comfortaa_400Regular',
          size:40
        }}>RADIO ARMÉNIE</Text>
        <Ionicons name="person" size={24} color="black" />
      </View>

      {
        (()=>{
          switch(page){
            case 'Contact':
              return <Contact/>
            case 'Home':
              console.log('Switch Case Home');
              return (
                <ImageBackground source={require("./assets/arm.jpg")} style={styles.content}>
                <TouchableOpacity onPress={()=>{playSound()}}>
                  <Ionicons name={
                    sound===null? "play-circle":"pause-circle"
                  }
                  size={240} color="white" />
                </TouchableOpacity>
              </ImageBackground>
              )
          }
        })()
      }
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={callLink}>
          <Ionicons name="call" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="logo-instagram" size={24} color="black" />
        <TouchableOpacity onPress={
          ()=>{
            setPage('Contact');
            }
          }>
          <Ionicons name="mail" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    height:100,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    flexDirection:'row',
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20

  },
  footer:{
    height:100,
    borderTopColor: 'black',
    borderTopWidth: 3,
    flexDirection:'row',
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20
  },
  content:{
    backgroundColor:'blue',
    flex:5,
    padding:20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
