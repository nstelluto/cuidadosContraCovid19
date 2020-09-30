import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';


export default function Header() {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/img/face-mask.png')}
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                />
                <Text style={styles.textHeader}>Cuidados contra o COVID-19</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#178A8A",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "10%",
        paddingBottom: "5%",
        padding: "5%"
    },
    textHeader: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        marginLeft: "3%"
    }
})