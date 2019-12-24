import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import background from "../components/Background";
import Anchor from "../components/LinkAnchor";

export default class GlossarioScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("http://10.11.33.44:1337/glossarios")
      .then(response =>
        response.json().then(responseJson => {
          console.log(responseJson);
          this.setState({
            isLoading: false,
            dataSource: responseJson
          });
        })
      )
      .catch(error => {
        console.log(`O erro foi: ${error}`);
      });
  }

  render() {
    const state = this.state;
    return (
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
          }}
        >
          {!this.state.isLoading ? (
            <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
              <View style={styles.table}>
                <View style={styles.headerTable}>
                  <Text style={styles.textHeader}>Termo</Text>
                  <Text style={styles.textHeader}>Significado</Text>
                </View>
                {this.state.dataSource.map(row => {
                  return (
                    <View style={styles.rowTable} key={row.id}>
                      <Text style={styles.textRow}>{row.termo}</Text>
                      <Text style={styles.textRow}>{row.significado}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={{flex: 1, marginBottom: 5}}>
                <Anchor href="http://ifms.edu.br">Clique aqui para entrar em contato!</Anchor>
              </View>
            </ScrollView>
          ) : (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text style={{color: '#fff', fontSize: 21, fontWeight: 'bold', }}>Carregando o Glossário!</Text></View>
          )}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
GlossarioScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, paddingTop: 2, width: 120 },
  head: { height: 40, backgroundColor: "#7852ff" },
  text: {
    textAlign: "justify",
    margin: 6,
    color: "#fff",
    fontSize: 14,
    alignSelf: "center"
  },
  scrollView: { marginHorizontal: 20 },
  table: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    marginVertical: 30
  },
  headerTable: {
    flex: 1,
    flexDirection: "row"
  },
  rowTable: {
    flex: 1,
    flexDirection: "row"
  },
  textHeader: {
    color: '#f0f0f0',
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    borderWidth: 0.7,
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    backgroundColor: '#7852ff',
    textAlign: 'center'
  },
  textRow: {
    color: '#f1f1f1',
    flex: 1,
    padding: 5,
    borderWidth: 0.7,
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    textAlign: "center",
  }
});
