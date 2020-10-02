import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalTester(params) {
    const [isModalVisibleM, setModalVisibleM] = useState(params.params);

    const hideModalM = () => {
        setModalVisibleM(false);
        params.setModalModo(false)
    };
    useEffect(() => {
        setModalVisibleM(params.params);
    },
        [params],
    );
    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={isModalVisibleM}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTitle}>Escolha o modo de notificação</Text>
                    <View style={{ width: "100%" }}>
                        <TouchableOpacity style={styles.listOption}>
                            <Text style={styles.modalDescription}>Soar e vibrar</Text>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require('../../../assets/img/check.png')}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listOption}>
                            <Text style={styles.modalDescription}>Somente vibrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listOption}>
                            <Text style={styles.modalDescription}>Somente exibir</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnHistorico} onPress={hideModalM}>
                        <Text style={styles.btnHistoricoText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFechar} onPress={hideModalM}>
                        <Text style={styles.btnFecharText}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );

}
const styles = StyleSheet.create({

    modalTitle: {
        color: "#676767",
        fontSize: 18,
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
    listOption: {
        borderBottomColor: "#DCDCDC",
        borderBottomWidth: 1,
        marginBottom: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "2%"

    }
})
