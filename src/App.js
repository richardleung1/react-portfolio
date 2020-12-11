import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/routes/Home'
import Contact from './components/routes/Contact'
import Skills from './components/routes/Skills'
import Projects from './components/routes/Projects'
import Nav from './components/Nav'
import ProjectDetails from './components/routes/ProjectDetails'
import Weather from './components/routes/Weather'
import Github from './components/routes/Github'

import './App.css';

function App() {
  const skillsList = ['HTML', 'CSS', 'Javascript', 'Python', 'Command Line'
]
  const projectsList = [
    {
      name: 'Frogger',
      id: 1,
      description: 'Classic Fun'
    },
    {
      name: 'Favorite Recipe',
      id: 2,
      description: 'Useful'
    }
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route
          exact
          path="/skills"
          render={() => { return <Skills skillsList={skillsList} /> }}
        />
        <Route
          exact
          path="/projects"
          render={() => { return <Projects projectsList={projectsList} /> }}
        />

        <Route
          path="/projects/:id"
          render={(routeProps) => {
            const id = routeProps.match.params.id
            const targetProject = projectsList.find((p) => p.id === parseInt(id))
            return <ProjectDetails project={targetProject} />
          }}
        />
        <Route path="/github" component={Github} />
        <Route path="/weather" component={Weather} />
      </div>
    </BrowserRouter>
  );
}

export default App;