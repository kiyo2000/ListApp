import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; //Using class ->{Component}
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';//Add Flatlist
// third party components
import RNPickerSelect from 'react-native-picker-select';
// custom components
import {Item} from './components/Item'; // How to import another js file.


/*Using a class*/
export default class App extends Component {
  state ={
    expenseAmount : 0,
    expenseCategory: '',
    updating: false,
  }

  listData = []
  // ListData = [
  //   { id: '1', amount: 50, category: 'food'},
  //   { id: '2', amount: 150, category: 'gorceries'},
  // ]

  dropdownItems =[
    { label: 'Food' , value: 'food'},
    { label: 'Transport' , value: 'transport'},
    { label: 'Rent' , value: 'rent'},
    { label: 'Grocery' , value: 'grocery'},
    { label: 'Bill' , value: 'entertainment'}
  ]

  render() {
    return (
      <SafeAreaView >
        <View style={styles.main}>
          <Text>Add your expense</Text>
          <TextInput
                style={styles.input}
                placeholder="$ amount" 
                onChangeText={ text => this.setState({ expenseAmount: parseFloat
                (text) }) }
                keyboardType="number-pad"/>
          {/* <TextInput
            style={styles.input}
            placeholder="category"
            onChangeText={ text => this.setState({ expenseCategory: text }) }
          /> */}
          {/* <Button title="Add" onPress={this.addItem()} /> */}
          <RNPickerSelect 
            items = { this.dropdownItems }
            value = { this.state.expenseCategory }
            onValueChange = { value => this.setState({expenseCategory: value})  }
            useNativeAndroidPickerStyle = { false }
            style={pickerStyle}
            placeholder = {pickerPlaceholder}
          />
        </View>
        {/* wrap the button in view*/}
        <View>
          <TouchableOpacity style={styles.button} onPress={this.addItem}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
            data = {this.listData}
            renderItem = {this.renderList}
            keyExtractor = { item => item.id }
            extraData = {this.state.expenseAmount}
        />
      </SafeAreaView>
    )
  }
  renderList = ({item}) => (
    <Item amount={item.amount} category={item.category} />
  )
  addItem = () => {
    if( 
      isNaN(this.state.expenseAmount) || 
      this.state.expenseAmount == 0 ||
      this.state.expenseCategory == ''){
      return;
    }
    let itemId = new Data().getTime().toString()
    let listitem = {
      id: itemId,
      amount: this.state.expenseAmount,
      category: this.state.expenseCategory
    }
    this.listData.push(listItem)
    this.setState({expenseAmount:0, expenseCategory: null, validInput: false })
    this._textInput.clear()
    this._textInput.focus()
  }
}

const colors = {
  primary : '#03fcba'//'hsla(330, 38%, 65%, 1)'
}

const pickerPlaceholder = {
  label: 'Select category', value: null, color: 'black'
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
  input: {
    width:'100%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15
  },
  button: {
    marginTop: 10,
    padding: 20,
    backgroundColor: colors.primary
  },
  buttonText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
})

const pickerStyle = StyleSheet.create({
  inputIOS:{
  padding: 10,
  borderColor: 'black',
  borderWidth: 1,
},
  inputAndroid: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
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
