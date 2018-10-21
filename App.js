import { createStackNavigator } from "react-navigation";

import Splash from "./components/Splash";
import Dash from "./components/Dash";
import Main from "./components/Main";

const App = createStackNavigator(
  {
    Screen: { screen: Main },
    Splash: { screen: Splash },
    Dash: { screen: Dash }
  },
  {
    initialRouteName: "Screen",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: false,
      gesturesEnabled: false
    }
  }
);

export default App;
