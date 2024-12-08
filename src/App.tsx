import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CustomersProvider } from "./state/customersProvider";
import { CustomersSelection } from "./components/CustomersSelection";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 3em;
`;

// Apply theme styles
const theme = createTheme({
  cssVariables: true,
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomersProvider>
        <AppHeader />
        <Main>
          <CustomersSelection />
        </Main>
        <AppFooter />
      </CustomersProvider>
    </ThemeProvider>
  );
};

export default App;
