import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from './Modal';
import axios from 'axios';


export default function Home() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(true);
        trocouMascara();
    };
    const issoAlteraOMeuEstado = (value) => {
        setModalVisible(value);
    };
    async function Login() {


        await axios.post('https://apiappcovid.000webhostapp.com/login', {
            login_key: '1644666',
        })
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
    useEffect(() => {
        Login();
    })

    async function trocouMascara() {
        await axios.post('https://apiappcovid.000webhostapp.com/history', {
            login_key: '1644666',
            title: 'Trocou a máscara'
        })
            .then(function (response) {

            })
            .catch(error => {

            });
    }

    return (
        <ScrollView style={{ width: "100%", padding: "5%", marginTop: 5 }}>
            <View style={styles.envolveText}>
                <Text style={styles.textInicio}>Trocar a máscara</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 50 }}>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.Button}>
                        <Image
                            style={{ width: "100%", height: 230 }}
                            source={require('../../assets/img/mascara3x.png')}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 25 }}>
                <Modal params={isModalVisible} setStateDoPapaizineo={issoAlteraOMeuEstado} />
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/img/up-arrow3x.png')}
                    resizeMode="cover"
                />
                <Text style={styles.textDescription}>Confirme clicando no botão acima que você acabou de trocar a máscara</Text>
            </View>

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
    },
    Button: {
        backgroundColor: "white",
        width: 280,
        height: 280,
        borderRadius: 500,
        borderColor: "#178A8A",
        borderWidth: 6,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 500
    },
    textDescription: {
        color: "#178A8A",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"
    }
})