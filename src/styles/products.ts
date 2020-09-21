import styled from 'styled-components';

export const ScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 50px;

  background-color: #f9f8fc;

  header {
    align-self: flex-start;
    margin-top: 90px;
    margin-left: 137px;

    font-family: 'Rambla', sans-serif;
    font-size: 64px;
    font-weight: bold;
    color: #424347;
  }

  a {
    text-decoration: none;
  }
`;

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 48px;
  margin-top: 104px;

  font-family: 'Roboto', sans-serif;
`;

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 358px;
  height: 508px;

  padding-left: 50px;
  padding-right: 50px;

  border-radius: 50px;
  list-style: none;

  background-color: #fff;

  :hover {
    -webkit-box-shadow: 0px 0px 35px -9px #9489ab;
    -moz-box-shadow: 0px 0px 35px -9px #9489ab;
    box-shadow: 0px 0px 35px -9px #9489ab;
  }

  div.price-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 52px;
    left: 0px;

    width: fit-content;
    height: 57px;

    padding-right: 19px;
    padding-left: 15px;

    border-radius: 0px 15px 15px 0px;

    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: bold;

    background-color: #e2e5ff;
    color: #8c81d0;

    span {
      margin-right: 6.5px;
      font-size: 13px;
      color: #8c8c8c;
    }
  }

  div.img-name {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    margin-top: 140px;
    margin-bottom: 50px;

    img {
      width: 100%;
      height: auto;
    }
    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 36px;
      font-weight: bold;

      color: #424347;
    }
  }
`;