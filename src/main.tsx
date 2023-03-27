import React from "react"
import ReactDOM from "react-dom/client"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"

const GlobalStyle = createGlobalStyle`
  ${reset}
`

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
