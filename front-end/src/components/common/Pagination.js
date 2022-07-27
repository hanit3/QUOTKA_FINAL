import React from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
];

const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);

const ManageEvents = ({ match, history }) => {
  const dispatch = useDispatch();

  const { count, page, items } = useSelector(
    ({ event }) => ({
      count: event.count,
      page: event.page,
      itemts: event.items,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(eventActions.getEvents());
  }, []);

  const setPage = useCallback(
    page => {
      dispatch(eventActions.getEvents(page));
    },
    [dispatch],
  );

  return (
    <div>
      <EventList events={items} match={match} />
      <Paging page={page} count={count} setPage={setPage} />
    </div>
  );
};

const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={setPage}
    />
  );
};

export default Paging;
