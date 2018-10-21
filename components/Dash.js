import React from "react";
import { Camera, Location, Permissions } from "expo";

import styles from "../styles";

import blaze from "../services/blaze";

export default class Dash extends React.Component {
  componentDidMount = async () => {
    await this.takePicture();
    // this.interval = setInterval(async () => {
    //   this.takePicture();
    // }, 10000);
  };

  componentWillUnmount = () => clearInterval(this.interval);

  waitSeconds = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

  takePicture = async () => {
    try {
      console.log("Taking pic");
      const data = await this.camera.takePictureAsync({ base64: true });
      const base64 = `data:image/jpg;base64,${data.base64}`;
      this.check(base64);
    } catch (e) {
      this.takePicture();
      console.log(e);
    }
  };

  cap = async () =>
    new Promise(async (resolve, reject) => {
      try {
        if (this.camera) {
          const data = await this.camera.takePictureAsync({ base64: true });
          const base64 = `data:image/jpg;base64,${data.base64}`;
          resolve(base64);
        }
      } catch (e) {
        reject(e);
      }
    });

  check = async base64 => {
    try {
      const blz = await blaze.check(base64);
      if (blz) {
        const loc = await this.getCoordinates();
        const { latitude, longitude } = loc.location.coords;

        const payload = {
          ...blz,
          lat: latitude,
          lng: longitude
        };

        blaze.create(payload);
        this.takePicture();
      } else {
        console.log("No case to open");
        this.takePicture();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  getCoordinates = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    return { location };
  };

  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.dashcamera}
        type="back"
      />
    );
  }
}
