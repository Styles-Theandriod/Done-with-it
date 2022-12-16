import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform } from 'react-native';

export default function App() {
  const handlePreess = () => console.log('Text Pressed');

  return (
    <SafeAreaView style={[containerStyle, styles.container]}>
       <Text numberOfLines={1} onPress={handlePreess()}>Hello React Native - A really really long Text. Bow I want to make this even longer and see what happens.</Text>
      <TouchableNativeFeedback onPress={()=> console.log('Image Tapped')}>
        <View style={{ width: '100%', height:100, backgroundColor:"dodgerblue"}}>

        </View>

        

      </TouchableNativeFeedback>


      <Button 
      color='orange'
      title='Click Me' 
      onPress={()=> 
        // Alert.alert("Cookies", "Do You wish to accept cookies?",[
        //   {text: "Yes", onPress:() =>console.log('Yes')},
        //   {text: "No", onPress:() => console.log("No")},
        // ])

        Alert.prompt("My title", "My Message", text => console.log(text))
      }/>
    </SafeAreaView>
  );
}


const containerStyle = {backgroundColor:"orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.curentHeight : 0, 
  },
});
