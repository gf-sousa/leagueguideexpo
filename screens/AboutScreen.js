import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView
} from "react-native";
import background from "../components/Background";
import logo from "../assets/images/logo.png";

export default function AboutScreen() {
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
        }}
      >
        <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <Text style={styles.textSubtitle}>O projeto materializa uma ferramenta de orientação e promoção do jogo League of Legends.</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h1}>Objetivo do projeto</Text>
          <Text style={styles.textP}>O objetivo geral do projeto é desenvolver uma aplicação mobile para disponibilizar informações catalogadas sobre League of Legends.
          Os objetivos especificos de projeto são: divulgar o gênero do jogo League of Legends; propagar a cultura do esporte eletrônico; esclarecer mecânicas básicas de jogo;
          apresentar orientações sobre o jogo; implementar o glossário básico de jogadores de League of Legends.
          </Text>
          </View>
          <View style={styles.container}>
          <Text style={styles.h1}>Desenvolvedor</Text>
          <Text style={styles.textP}>Gabriel Francisco Araújo Sousa</Text>
          </View>
          <View style={styles.container}>
          <Text style={styles.h1}>Orientador</Text>
          <Text style={styles.textP}>Carlos Vinicius da Silva Figueirdo</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

AboutScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    alignSelf: "center",
    marginVertical: 25
  },
  container: { flexDirection: 'column', margin: 5,  },
  textSubtitle: {
    color: '#fff',
    textAlign: 'center'
  },
  textP: {
    color: '#fff',
    textAlign: 'justify'
  },
  h1: {
    fontSize: 21,
    color: '#f1f1f1',
    fontWeight: 'bold'
  },
  scroll: {
    marginVertical: 20
  }
})
