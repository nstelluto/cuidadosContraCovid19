import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inicio from '../../Pages/Inicio';
import Historico from '../../Pages/Historico';
import Configuracao from '../../Pages/Conficuracoes';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: "100%" }}>
            <Inicio />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View>
            <Configuracao />
        </View>
    );
}

function History() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: "100%" }}>
            <Historico />
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Início') {
                            iconName = 'ios-home';
                        } else if (route.name === 'Configurações') {
                            iconName = 'ios-settings';
                        }
                        else if (route.name === 'Histórico') {
                            iconName = 'ios-clock';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#178A8A',
                    inactiveTintColor: 'gray',
                }}
            >

                <Tab.Screen name="Início" component={HomeScreen} />
                <Tab.Screen name="Histórico" component={History} />
                <Tab.Screen name="Configurações" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



