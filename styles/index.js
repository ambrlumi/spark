import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    backgroundColor: "transparent"
  },
  textContainer: {
    position: "absolute",
    top: 100,
    left: 50
  },
  text: {
    textAlign: "center",
    fontSize: 20
  },

  camera: {
    width: width,
    height: height,
    flex: 1
  },
  dashcamera: {
    width: height,
    height: width,
    flex: 1
  },
  overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(255, 74, 10,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },

  /* ----------------------------- */

  splash_icon: {
    height: 90,
    width: 155
  }
});
