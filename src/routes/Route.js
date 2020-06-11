import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Navigation from "../components/Navigation";

// import { store } from '../store'
const DefaultLayout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);
const AuthLayout = ({ children }) => <>{children}</>;

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/materials" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      component={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
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
