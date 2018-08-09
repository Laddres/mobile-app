import React from "react";
import { BackHandler, Platform } from "react-native";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import { indexOf } from "lodash";
import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { DEFAULT_NAVIGATION_CONFIG } from "./NavigationConfig";

class ReduxNavigation extends React.Component {
  shouldCloseApp(routeName) {
    return indexOf(DEFAULT_NAVIGATION_CONFIG.exitRoutes, routeName) !== -1;
  }

  componentWillMount() {
    if (Platform.OS === "ios") return;
    BackHandler.addEventListener("hardwareBackPress", () => {
      const { dispatch, nav } = this.props;
      console.log(this.shouldCloseApp(nav.routes[0].routeName));
      if (this.shouldCloseApp(nav.routes[0].routeName)) return false;
      dispatch({ type: "Navigation/BACK" });
      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === "ios") return;
    BackHandler.removeEventListener("hardwareBackPress");
  }

  render() {
    const { dispatch, nav } = this.props;
    const EnhancedAppNavigation = reduxifyNavigator(AppNavigation, "root");
    return <EnhancedAppNavigation dispatch={dispatch} state={nav} />;
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
