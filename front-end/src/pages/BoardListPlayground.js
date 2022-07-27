import React from 'react';
import { Route, withRouter } from 'react-router';
import BoardView from 'components/BoardPlayground/BoardView';
import BoardDetail from 'components/BoardPlayground/BoardDetail';
import BoardList from 'components/BoardPlayground/BoardList';

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardList} />
    </>
  );
}

export default withRouter(Board);
