import './styles.css';
import HomePage from './pages/homepage/homepage.component';
import Content from './components/content/content.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:titleParam' component={Content} />
      </Switch>
    </div>
  );
}
