import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Home } from '../screens'

import { COLORS, icons, FONTS } from '../constants'

const Tab = createBottomTabNavigator()

// TabBarCustomButton
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected

    if(isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                {children}
                <View style={{
                    width: 8,
                    height: 8,
                    backgroundColor: COLORS.main,
                    borderRadius: 100,
                    top: -10
                }}></View>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
            style={{
                flex: 1,
                height: 60,
                backgroundColor: COLORS.white
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
        )
    }
}

// custom tabbar

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "#fff",
                    elevation: 0,
                    height: 100,
                    borderRadius: 20
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.main : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="mvp"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.mvp}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? COLORS.main : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="user"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.main : COLORS.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="cart"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 70,
                                height: 50,
                                backgroundColor: COLORS.main,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                right: 10
                            }}
                        >
                            <Image
                                source={icons.shoppingCart}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.black,
                                    right: 5
                                }}
                            />
                            <Text
                                style={{
                                    ...FONTS.h2,
                                    left: 5
                                }}
                            >4</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs