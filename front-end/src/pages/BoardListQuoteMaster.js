import React from 'react';
import { Route, withRouter } from 'react-router';
import BoardView from 'components/BoardQuoteMaster/BoardView';
import BoardDetail from 'components/BoardQuoteMaster/BoardDetail';
import BoardList from 'components/BoardQuoteMaster/BoardList';

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardList} />
    </>
  );
}

export default withRouter(Board);
