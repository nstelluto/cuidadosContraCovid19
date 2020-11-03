import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import axios from 'axios';


export default function CardHistorico() {
    const [response, setResponse] = useState("");

    async function Historico() {
        await axios.get('https://apiappcovid.000webhostapp.com/history?login_key=1644666', {
        })
            .then(function (response) {
                setResponse(response.data);
            })
            .catch(function (error) {
            });
    }
    useEffect(() => {
        Historico();
    }, [response]);

    return (
        <View style={{ width: "100%", flexDirection: "column-reverse", alignItems: "center", justifyContent: "center", marginTop: 25, marginBottom: 5, paddingBottom: 10 }}>
            {response !== '' ?
                response.map(dados => (
                    <View style={styles.containerHistory}>
                        <View>
                            <Image
                                source={require('../../../../assets/img/mascara.png')}
                                style={{ width: 30, height: 30, marginRight: 20 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>{dados.title}</Text>
                            <Text style={styles.textInfo}>{dados.date} ás {dados.hour}</Text>
                        </View>
                    </View>
                ))
                :
                <Text style={styles.textTitle}>Sem histórico</Text>
            }
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
        marginBottom: "5%"
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