import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Home />
        </Grid>
        <Grid item xs={1}>
        </Grid>

      </Grid>
      {/* <Home /> */}
    </div>
  );
}

export default App;
