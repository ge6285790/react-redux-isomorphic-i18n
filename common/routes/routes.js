import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/main/Main';
import Home from '../components/home/Home';
import Article from '../components/article/Article';
import Articles from '../components/article/Articles';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/about/About';
import Admin from '../components/admin/Admin';
import AdminArticleEditor from '../components/admin/AdminArticleEditor';


export default function () {
  return (
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/repos" component={Home} />
      <Route path="/article" component={Articles}>
        <Route path="/article/:id" component={Article} />
      </Route>
      <Route path="/portfolio" component={Portfolio}>
        <Route path="/portfolio/:name" component={Article} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/test/admin/:name" component={Admin} />
      <Route path="/test/admin/article/:id" component={AdminArticleEditor} />
    </Route>
  );
}
