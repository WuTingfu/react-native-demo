import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';

export default class ImPage extends PureComponent {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                    <Text>kjshdfjkdh ImPage </Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})