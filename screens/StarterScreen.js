import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import background from "../components/Background";
import imageteste from "../assets/images/gif-combo.gif";

export default class StarterScreen extends React.Component {
  state = {
    text: "",
    tip: []
  };
  addTip = () => {
    let newTip = this.state.text;
    var arr = this.state.tip;
    arr.push(newTip);
    this.setState({ tip: arr, text: "" });
  };
  deleteTip = t => {
    let arr = this.state.tip;
    let pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ tip: arr });
  };
  renderTip = () => {
    return this.state.tip.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.tip}
            onPress={() => {
              this.deleteTip(t);
            }}
          >
            {t}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
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
          <Image
            source={imageteste}
            style={{
              width: 300,
              height: 200,
              alignSelf: "center",
              marginVertical: 20,
              marginHorizontal: 10
            }}
          />

          <View style={styles.wholeStyle}>
            <View style={styles.viewStyle}>
              <Text style={styles.header}>Faça anotações para te auxiliar!</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => this.setState({ text: text })}
                value={this.state.text}
              />
              <Button title="Adicionar!" color="#83d6ab" onPress={this.addTip} />
              <View>
                <Text style={{color: 'white', fontSize: 21}}>Suas anotações:</Text>
              <View>{this.renderTip()}</View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

StarterScreen.navigationOptions = {
  header: null
};

const styles = {
  wholeStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    borderColor: "#f0f0f0",
    borderWidth: 2,
    width: 100,
    color: 'white',
    justifyContent: 'center'
  },
  header: {
    color: "#f0f0f0",
    fontSize: 16,
    fontWeight: "bold"
  },
  tip: {
    fontSize: 14,
    color: "#f0f0f0"
  }
};
