import React from 'react';

// importar os componentes
// 'View' , 'StyleSheet' , 'Text' , 'TextInput', 'Buttom'

import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TextInput
} from 'react-native';

export default function Home()
{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Soma</Text>
            <Text style={styles.titulo}>José</Text>

            <TextInput style={styles.campo}
                placeholder="Digite um valor"
            />

            <TextInput style={styles.campo}
                placeholder="Digite um valor"
            />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
} // fecha função 'Home'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgreen', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo:{
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },

    campo:{
        backgroundColor: 'yellow',
        fontSize: 30,
        marginTop: 30,
        borderRadius: 20,
        padding: 15,
    },

    botao:{
        backgroundColor: 'blue',
        marginTop: 40,
        borderRadius: 10,
        padding: 15,
        width: 200,
        alignItems: 'center'
    },

    botao_texto:{
        fontSize: 20,
        color: 'white',
        fontWeight: 40
    }

});

