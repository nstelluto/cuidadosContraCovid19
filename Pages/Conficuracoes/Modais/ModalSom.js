import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalTester(params) {
    const [isModalVisibleS, setModalVisibleS] = useState(params.params);

    const hideModalS = () => {
        setModalVisibleS(false);
        params.setModalSom(false)
    };
    useEffect(() => {
        setModalVisibleS(params.params);
    },
        [params],
    );
    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={isModalVisibleS}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTitle}>Som da notificação</Text>
                    <View style={{ width: "100%", height: 400 }}>
                        <ScrollView>
                            <TouchableOpacity style={styles.listOption}>
                                <Text style={styles.modalDescription}>Hello</Text>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../../assets/img/check.png')}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listOption}>
                                <Text style={styles.modalDescription}>Clear</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listOption}>
                                <Text style={styles.modalDescription}>Dream</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.btnHistorico} onPress={hideModalS}>
                        <Text style={styles.btnHistoricoText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFechar} onPress={hideModalS}>
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
        flexDirection: "column",
        height: "100%"
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
