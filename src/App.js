import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const imagePorfile = 'https://avatars.githubusercontent.com/u/23039598?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#ff33f6';
const urlaGithub = 'https://github.com/leandroESS';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.openURL(urlaGithub);
        if (res) {
            console.log('link aprovado');
            await Linking.openURL(urlaGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            {/* coluna 0 */}
            <View style={style.content}>
                <Image style={style.avatar} source={{ uri: imagePorfile }} />
                <Text style={[style.defaultText, style.name]}>Leandro Andrade</Text>
                <Text style={[style.defaultText, style.nickName]}>leandroESS</Text>
                <Text style={[style.defaultText, style.descricao]}>blablablablalbal
                    jsjssusujsjusjusjusjus
                    dsididdjisidjsijdijdsjids
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
            {/* colune 1 */}
            {/* <View style ={style.content}>
                <Image style={style.avatar} source={{ uri: imagePorfile }} />
            </View> */}
        </SafeAreaView>);
};

export default App;

const style = StyleSheet.create({
    container: { //colunas
        backgroundColor: colorGithub,
        flex: 1, // expande para a tela inteira
        justifyContent: 'center', // no meio
        //flexDirection: 'row', // coloca em linhas, um item do lado do outro
    },

    content: {
        alignItems: 'center', // é empregada para alinhar os elementos ao centro
        padding: 50,
    },

    avatar: {
        height: 150, //para adiconar foto é obg a colocar as dimensões
        width: 150,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 3,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub
    },

    descricao: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 30,
        marginTop: 20
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold'
    },



});

// o safeview proteje seus componentes de não sair para uma área que não tem acesso
// StatusBar é um componente usado para mostrar os indicadores como bateria, sinal de rede, notificação, etc.
// cada view é uma posição da coluna
// a tag de estilos recebe um array de estilos