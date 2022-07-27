import React from 'react';
import { Route, withRouter } from 'react-router';
import BoardView from 'components/BoardPlayground/BoardView';
import BoardDetail from 'components/BoardPlayground/BoardDetail';

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardView} />
      <Route exact path={`${match.path}/:boardId`} component={BoardDetail} />
    </>
  );
}

export default withRouter(Board);
