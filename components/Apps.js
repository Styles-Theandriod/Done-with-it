import React from 'react'
import { 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    View 
} from 'react-native';

export default function App() {
    console.log(Dimensions.get());
  return (
    <SafeAreaView>
        <View style={{
            backgroundColor: 'dodgerblue',
            width:'150%',
            height:70,

        }}></View>
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
