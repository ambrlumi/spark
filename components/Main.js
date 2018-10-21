import React from "react";
import { Dimensions, View } from "react-native";
import Dash from "./Dash";
import Splash from "./Splash";

import Platform from "../services/orientation";

import styles from "../styles";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: Platform.isPortrait() ? "portrait" : "landscape"
    };
    Dimensions.addEventListener("change", () => {
      this.setState({
        orientation: Platform.isPortrait() ? "portrait" : "landscape"
      });
    });
  }

  render() {
    const { orientation } = this.state;
    return (
      <View style={styles.wrapper}>
        {orientation === "portrait" ? <Splash /> : <Dash />}
      </View>
    );
  }
}
