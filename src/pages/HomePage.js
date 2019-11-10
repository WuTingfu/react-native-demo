import React, {PureComponent} from 'react';
import {SafeAreaView,StyleSheet,} from 'react-native';

import HomeBottomNavigator from '../navigator/HomeBottomNavigator'
import NavUtil from '../navigator/NavUtil'
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import ImPage from '../ImPage';
// import MyPage from '../MyPage';
// import SummaryPage from '../SummaryPage';

export default class HomePage extends PureComponent {
    constructor(props){
        super(props);
    }
    
    render(){
        NavUtil.navigation = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <HomeBottomNavigator />
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});