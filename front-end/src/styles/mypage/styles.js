import styled from 'styled-components';

export const MyPageBox = styled.div`
  font-family: 'SCDream';
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .profile {
    width: 55px;
    height: 55px;
    margin-left: 46%;
  }

  .id {
    margin: 0 auto;
    font-weight: 800;
    margin-top: 5px;
  }
`;

export const MyPageTitle = styled.li`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding-top: 3px;
  font-weight: bold;
  color: Green;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const MyPagefollow = styled.li`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: black;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;

  div {
    margin-right: 5px;
    margin-left: 8px;
  }
`;

export const MyInform = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding-top: 3px;
  font-weight: 600;
  color: black;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;
`;

export const MyChange = styled.div`
  margin-bottom: 10px;

  ul {
    list-style: none;
    justify-content: center;
    display: flex;
    margin-top: 10px;
  }
  li {
    box-shadow: 0 0 0.1px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: #c5ad81;
    color: #fff;
    padding: 7px;
    font-size: 12px;
    float: left;
    margin-right: 10px;
  }
`;

export const MyPageList = styled.div`
  box-shadow: 0 0 0.1px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #eee;
`;

export const MenuList = styled.div`
  .menu-list {
    display: flex;
    padding: 7px;
    font-size: 14px;
  }

  .submenu {
    margin-right: 25px;
    cursor: pointer;
    font-weight: 600;
  }

  .submenu:hover {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }

  .focused {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }
`;
