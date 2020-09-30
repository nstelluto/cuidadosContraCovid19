import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';

function onPress() {
    console.log('fsfjj')
}
export default function Configuracoes() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.envolveConf}>
                        <Text style={styles.textConf}>Som da notificação</Text>
                        <Text style={styles.textConfSelect}>Hello</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.envolveConf}>
                        <Text style={styles.textConf}>Modo de notificação</Text>
                        <Text style={styles.textConfSelect}>Soar e vibrar</Text>
                    </View>
                </TouchableOpacity>
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