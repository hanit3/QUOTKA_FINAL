import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';
import Auth from 'library/utils/auth';
import BoardListQuoteMaster from 'pages/BoardListQuoteMaster';

const Main = loadable(() => import('pages/Main'));
const Login = loadable(() => import('pages/Login'));
const Register = loadable(() => import('pages/Register'));
const QuoteMaster = loadable(() => import('pages/BoardQuoteMaster'));
const BoardDetailQuoteMaster = loadable(() =>
  import('components/BoardQuoteMaster/BoardDetail'),
);
const BoardListsQuoteMaster = loadable(() =>
  import('pages/BoardListQuoteMaster'),
);
const Playground = loadable(() => import('pages/BoardPlayground'));
const BoardDetailPlayground = loadable(() =>
  import('components/BoardPlayground/BoardDetail'),
);
const BoardListsPlayground = loadable(() =>
  import('pages/BoardListPlayground'),
);

const MyPage = loadable(() => import('pages/MyPage'));
const Post = loadable(() => import('pages/PostPage'));

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Auth(Main, false)} />
            <Route exact path="/login" component={Auth(Login, false)} />
            <Route exact path="/register" component={Auth(Register, false)} />
            <Route exact path="/home" component={Auth(Main, true)} />
            <Route
              exact
              path="/quotemaster/board"
              component={Auth(QuoteMaster, true)}
            />
            <Route
              exact
              path="/quotemaster/boardlist"
              component={Auth(BoardListsQuoteMaster, true)}
            />
            <Route
              exact
              path="/quotemaster/board/:boardId"
              component={Auth(BoardDetailQuoteMaster, true)}
            />
            <Route
              exact
              path="/playground/board"
              component={Auth(Playground, true)}
            />
            <Route
              exact
              path="/playground/boardlist"
              component={Auth(BoardListsPlayground, true)}
            />
            <Route
              exact
              path="/playground/board/:boardId"
              component={Auth(BoardDetailPlayground, true)}
            />
            <Route path="/mypage" component={Auth(MyPage, true)} />
            <Route path="/post" component={Auth(Post, false)} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}

export default App;
