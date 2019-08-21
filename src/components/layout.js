/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const concat = classes => classes.filter(cls => !!cls).join(" ")

const Button = ({ children, style, href, className, onClick }) => {
  if (href) {
    return (
      <Link to={href} style={style} className={concat(["btn", className])}>
        {children}
      </Link>
    )
  } else {
    return (
      <button
        onClick={onClick}
        style={style}
        className={concat(["btn", className])}
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    let test = null

    if (typeof window !== "undefined") {
      test = window.localStorage.getItem("test")
    }

    return (
      <>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <div>
            {test ? (
              <div className="wrapper">
                <Button
                  href="/account.html"
                  className="account"
                  style={{ marginRight: "15px" }}
                >
                  Account
                </Button>
                <Button onClick={() => {}} className="logout">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="wrapper">
                <Button href="/login.html" className="login">
                  Login
                </Button>
              </div>
            )}
          </div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
