import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider,makeStyles } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from "./theme.js";
import './index.scss';

import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginBottom: theme.spacing(2)
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Navbar />
          <main className={styles.layout}>
              <Routes>
                <Route path="/" exact element={<HomePage/> } />
                <Route path="/gallery" exact element={<GalleryPage/>} />
              </Routes>
            <Footer brand={props.name}/>
          </main>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
