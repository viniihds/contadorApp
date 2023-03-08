import { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

export default class Counter extends Component {
    state = {
        count: 0,
        step: 2,
    };
    incrementar() {
        this.setState({ count: this.state.count + this.state.step });
    }
    decrementar() {
        this.setState({ count: this.state.count - 1 });
    }
    alteraStep(e) {
        this.setState({ step: parseInt(e.nativeEvent.text) })
    }
    alteraStep2(text) {
        this.setState({ step: parseInt(text) })
    }
    render() {
        return (
            <View style={styles.contador}>
                <TextInput value={this.state.step}
                 onChange={(e) => this.alteraStep(e)}
                 inputMode="numeric"
                 keyboardType='numeric' />
                 <TextInput value={this.state.step}
                 onChangeText={(text) => this.alteraStep2(text)}
                 inputMode="numeric"
                 keyboardType='numeric' />
                <Text>Contador: {this.state.count} - {this.state.step}</Text>
                <Button style={styles.botao} onPress={() => this.incrementar()} title='+'  />
                <Button onPress={() => this.decrementar()} title='-' />
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