import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; //Using class ->{Component}
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/*Using a class*/
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  }
})



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
