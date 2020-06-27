import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Theme from "./src/themes/theme"
import { Table } from "./src/components/Table"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  font-family: ${props => props.theme.fonts.main};
  height: 100%;
  background-color: ${props => props.theme.colors.light1};
}
`
// This resolves table scrolling issue with smaller windows
const components = {
  table: Table,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
