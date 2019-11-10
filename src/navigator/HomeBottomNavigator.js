import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import ImPage from '../pages/ImPage';
import MyPage from '../pages/MyPage';
import SummaryPage from '../pages/SummaryPage';

const BOTTOM_TABS = { // 配置页面底部路由
    SummaryPage: {
        screen: SummaryPage,
        navigationOptions:{
            tabBarLabel: '概况',
            tabBarIcon: ({tintColor,focused})=>(
                <AntDesign
                    name={'appstore-o'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),  
        }
    },
    ImPage: {
        screen: ImPage,
        navigationOptions:{
            tabBarLabel: '客服',
            tabBarIcon: ({tintColor,focused})=>(
                <AntDesign
                    name={'customerservice'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),  
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor,focused})=>(
                <FontAwesome
                    name={'user-o'}
                    size={26}
                    style={{color: tintColor}}
                />
            ), 
        }
    }
}

export default class HomeBottomNavigator extends React.Component {
    constructor(props){
        super(props);
    }

    _bottomNavigator(){
        return createAppContainer(createBottomTabNavigator(BOTTOM_TABS,{
            tabBarOptions: {
                activeTintColor: 'blue'
            }
        }));
    }

    render(){
        const BottomTab = this._bottomNavigator();
        return <BottomTab />
    }
}
