import "../styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { Provider } from "react-redux";
import store from "@/redux/store";
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);
export default MyApp;
