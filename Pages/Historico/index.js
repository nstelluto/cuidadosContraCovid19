import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CardHistorico from './components/cardHistory';


export default function Historico() {
    return (
        <ScrollView style={{ width: "100%", padding: "5%", marginTop: 5 }}>
            <View style={styles.envolveText}>
                <Text style={styles.textInicio}>Histórico</Text>
            </View>
            <CardHistorico />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    envolveText: {
        flex: 1
    },
    textInicio: {
        fontSize: 25,
        color: "#676767",
        fontWeight: "700",
        textAlign: "left",
        flex: 1
    }
})