import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/notes'
import Create from './pages/create'
import { createTheme,ThemeProvider } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import Layout from './components/layout';

const theme = createTheme({
  palette:{
    primary:{
      main: "#fefefe"
    },
    secondary: blue
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
