import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export default function Configuracoes() {
    const [isEnabled, setIsEnabled] = useState("");

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);

    };
    useEffect(() => {
        PushNotification();

    }, [isEnabled]);
    useEffect(() => {
        Notificacao();
    }, []);
    async function PushNotification() {
        await axios.post('https://apiappcovid.000webhostapp.com/configuration', {
            login_key: "1644666",
            notification: isEnabled
        })
            .then(function (response) {
            })
            .catch(function (error) {

            });
    }
    async function Notificacao() {
        await axios.get('https://apiappcovid.000webhostapp.com/configuration?login_key=1644666', {
        })
            .then(function (response) {
                let enable = response.data.notification;
                if (enable == 1) {
                    setIsEnabled(true)
                } else {
                    setIsEnabled(false)
                }
            })
            .catch(error => {
            });
    }

    return (
        <ScrollView style={{ width: "100%", padding: "5%" }}>
            <View style={styles.envolveText}>
                <Text style={styles.textInicio}>Configurações</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "column", justifyContent: "center", marginTop: 30 }}>
                <View style={styles.envolveConf}>
                    <Text style={styles.textConf}>Notificação</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#178A8A" }}
                        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                        onValueChange={toggleSwitch}

                        value={isEnabled}
                        accessibilityLabel="Notificação"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    envolveInicio: {
        padding: "5%",
        height: "100%",
        flexDirection: 'row',
    },
    envolveText: {
        flex: 1
    },
    textInicio: {
        fontSize: 25,
        color: "#676767",
        fontWeight: "700",
        textAlign: "left",
        flex: 1
    },
    envolveConf: {
        borderBottomWidth: 1,
        borderColor: "#D6D6D6",
        width: "100%",
        padding: "2%",
        paddingBottom: "3%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    textConf: {
        fontSize: 18,
        fontWeight: "100",
        color: "#676767",
    },
    textConfSelect: {
        fontSize: 16,
        fontWeight: "100",
        color: "#178A8A",
    }

})