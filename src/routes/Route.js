import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Navigation from "../components/Navigation";

import { Box, Switch } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { switchToLight, switchToDark } from "../store/modules/theme/actions";
const DefaultLayout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);
const AuthLayout = ({ children }) => <>{children}</>;

const ThemeSwitcher = React.memo((props) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  function handleSwitchTheme() {
    if (mode === "dark") {
      dispatch(switchToLight());
    } else {
      dispatch(switchToDark());
    }
  }

  return (
    <Box position="absolute" top="1rem" right="1rem">
      <Switch
        color="primary"
        checked={mode === "dark"}
        onChange={handleSwitchTheme}
      />
    </Box>
  );
});

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = useSelector((state) => state.auth);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          <ThemeSwitcher />
          <Layout>
            <Component {...props} />
          </Layout>
        </>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
