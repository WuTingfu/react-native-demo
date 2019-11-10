import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

export default class MyPage extends PureComponent {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
                    <Text>kjshdfjkdh MyPage </Text>
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