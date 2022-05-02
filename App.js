import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { TouchableOpacity } from 'react-native-web';

const homeLink=()=>{
  Linking.openURL('https://google.com');
}

const callLink=()=>{
  Linking.openURL('tel:0680562492');
}

const mailLink=()=>{
  Linking.openURL('mailto:stefsbk@gmail.com');
}

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={homeLink}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <Text>WEB RADIO</Text>
        <Ionicons name="person" size={24} color="black" />
      </View>
      
      <View style={styles.content}>
        <Text>CONTENT</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={callLink}>
          <Ionicons name="call" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="logo-instagram" size={24} color="black" />
        <TouchableOpacity onPress={mailLink}>
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
    padding:20
  }
});
