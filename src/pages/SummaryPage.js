import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button
} from 'react-native';
import NavUtil from '../navigator/NavUtil';

export default class SummaryPage extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text>this is SummaryPage</Text>
                    <Text>this is SummaryPage</Text>
                    <Text>this is SummaryPage</Text>
                    <Text>this is SummaryPage</Text>
                    <Button
                        title='go to Login' 
                        onPress={()=>{
                            NavUtil.goPage({},'Login');
                        }} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})