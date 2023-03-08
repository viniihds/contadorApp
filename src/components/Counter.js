import { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

export default class Counter extends Component {
    state = {
        count: 0,
        step: 2,
    };
    incrementar(){
        this.setState({ count: this.state.count + this.state.step});
    }
    decrementar(){
        this.setState({ count: this.state.count - this.state.step});
    }
    alteraStep2(text){
        this.setState({
            step: parseInt(text)
        })
    }
    render() {
        return (
            <View style={StyleSheet.contador}>
            <TextInput value={this.state.step.toString} onChangeText={(text) => this.alteraStep2(text)} inputMode='numeric' keyboardType='numeric'/>
            <Text>Contador: {this.state.count}</Text>
            <Button onPress={() => this.incrementar()} title='+'/>
            <Button onPress={() => this.decrementar()} title='-'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alingItems: 'center',
    },
   
);