import React, {PureComponent} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './navigator/AppNavigators';
import ImPage from './pages/ImPage'

export default class App extends PureComponent {
    render(){
        return (
            <SafeAreaView style={styles.container}>
               
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});