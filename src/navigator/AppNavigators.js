import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}页面`
        })
    },
},
    {
        initialRouteName: 'HomePage',
        mode: 'modal',
        headerMode: 'float',
        transitionConfig: () => ({//自定义页面跳转动画 https://reactnavigation.org/docs/zh-Hans/stack-navigator.html
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const Width = layout.initWidth;
                //沿X轴平移
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [Width, 0, -(Width - 10)],
                });
                //透明度
                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return { opacity, transform: [{ translateX }] };
            }

        })
    })

export default createAppContainer(AppStackNavigator);
