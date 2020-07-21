import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Layout } from './assets/Layout'
import { Navigation } from './assets/Navigation'
import { Jumbotron } from './assets/Jumbotron'
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Articles from './components/Articles'
import Art1 from './components/articles/art1'
import Art2 from './components/articles/art2'
import Art3 from './components/articles/art3'
import Places from './components/Places'

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route path='/articles' exact component={Articles} />
            <Route path='/articles/art1' component={Art1} />
            <Route path='/articles/art2' component={Art2} />
            <Route path='/articles/art3' component={Art3} />
            <Route path='/places' component={Places} />
            <Route exact path='/about' component={About} />
            {/* <Route component={NoMatch}></Route> */}
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </div>
  );
};


// import React, { Component } from 'react';
// import { HashRouter, Route, Link } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <HashRouter basename="/">
//         <div>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>

//           <hr />
  
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </div>
//       </HashRouter>
//     );
//   }
// }

// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>

// export default App;