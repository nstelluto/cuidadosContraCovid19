import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalTester(params) {
    const [isModalVisible, setModalVisible] = useState(params.params);

    const hideModal = () => {
        setModalVisible(false);
        params.setStateDoPapaizineo(false)
    };
    useEffect(() => {
        setModalVisible(params.params);
    },
        [params],
    );
    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTitle}>Parabéns</Text>
                    <Text style={styles.modalDescription}>Você pode verificar no histórico todas as vezes que você realizou essa atividade!</Text>
                    <TouchableOpacity style={styles.btnHistorico} onPress={hideModal}>
                        <Text style={styles.btnHistoricoText}>Fechar</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btnFechar} onPress={hideModal}>
                        <Text style={styles.btnFecharText}>FECHAR</Text>
                    </TouchableOpacity> */}
                </View>
            </Modal>
        </View>
    );

}
const styles = StyleSheet.create({

    modalTitle: {
        color: "#676767",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15,
        textAlign: "center"
    },
    modalStyle: {
        backgroundColor: "#fff",
        padding: "10%",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    modalDescription: {
        color: "#676767",
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 20,
        textAlign: "center"
    },
    btnFechar: {
        marginTop: "8%"
    },
    btnFecharText: {
        color: "#676767",
        fontSize: 16,
        fontWeight: "500",
    },
    btnHistorico: {
        backgroundColor: "#178A8A",
        padding: "5%",
        borderRadius: 30,
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    btnHistoricoText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
})
