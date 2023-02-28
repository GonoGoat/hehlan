import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider,makeStyles } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from "./theme.js";
import './index.scss';

import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import {GalleryPagePicture2022, GalleryPagePicture2019, GalleryPagePicture2018,
GalleryPagePicture2015, GalleryPagePicture2013, GalleryPagePicture2012,
GalleryPagePicture3, GalleryPagePicture5, GalleryPagePicture7, GalleryPagePicture8
}  from "./components/GalleryPagePicture";
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
                <Route path="/gallery2022" exact element={<GalleryPagePicture2022/>} />
                {/*<Route path="/gallery/2019" exact element={<GalleryPagePicture2019/>} />
                <Route path="/gallery/2018" exact element={<GalleryPagePicture2018/>} />
                <Route path="/gallery/2015" exact element={<GalleryPagePicture2015/>} />
                <Route path="/gallery/2013" exact element={<GalleryPagePicture2013/>} />
                <Route path="/gallery/2012" exact element={<GalleryPagePicture2012/>} />
                <Route path="/gallery/3" exact element={<GalleryPagePicture3/>} />
                <Route path="/gallery5" exact element={<GalleryPagePicture5/>} />
                <Route path="/gallery7" exact element={<GalleryPagePicture7/>} />
                <Route path="/gallery8" exact element={<GalleryPagePicture8/>} />*/}
              </Routes>
            <Footer brand={props.name}/>
          </main>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
