import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; //Using class ->{Component}
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button } from 'react-native';//Add Flatlist

import {Item} from './components/Item'; // How to import another js file.

/*Using a class*/
export default class App extends Component {
  state ={
    expenseAmount : 0,
    expenseCategory: ''
  }
  ListData = [
    { id: '1', amount: 50, category: 'food'},
    { id: '2', amount: 150, category: 'gorceries'},
    { id: '3', amount: 50, category: 'transport'},
  ]

  render() {
    return (
      <SafeAreaView>
        <Text>Add your expense</Text>
        <TextInput
              style={styles.input}
              placeholder="$ amount" 
              onChangeText={ text => this.setState({ expenseAmount: parseFloat
              (text) }) }
              keyboardType="number-pad"/>
        <TextInput
          style={styles.input}
          placeholder="category"
          onChangeText={ text => this.setState({ expenseCategory: text }) }
        />
        <Button title="Add" onPress={this.addItem()} />
        <FlatList
            data={this.listData}
            renderItem={this.renderList}
            keyExtractor={ expense => expense.id }
            extraData={this.state.expenseAmount}
        />
      </SafeAreaView>
    )
  }
  renderList = ({item}) => (
    <Item amount={item.amount} category={item.category} />
  )
  addItem = () => {
    if( isNaN(this.state.expenseAmount) || this.state.expenseAmount == 0){
      return;
    }
    let itemId = new Data().getTime().toString()
    let item = {
      id: itemId,
      amount: this.state.expenseAmount,
      category: this.state.expenseCategory
    }
    this.listData.push(item)
    this.setState({expenseAmount:0})
  }
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
  input: {
    width:'100%',
    padding: 10,
    borderWidth: 1,
    marginVertical: 15
  }
})


/*default*/
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
