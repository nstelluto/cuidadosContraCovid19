import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function CardHistorico() {
    return (
        <View style={{ width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 25 }}>
            <View style={styles.containerHistory}>
                <View>
                    <Image
                        source={require('../../../../assets/img/mascara.png')}
                        style={{ width: 30, height: 30, marginRight: 20 }}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <Text style={styles.textTitle}>Você trocou de máscara</Text>
                    <Text style={styles.textInfo}>27/09/2020 ás 17:00</Text>
                </View>
            </View>
        </View>
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
    },
    containerHistory: {
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        borderRadius: 6,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5%",
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#676767",
        marginBottom: 2
    },
    textInfo: {
        fontSize: 18,
        fontWeight: "100",
        color: "#676767",
    }
})