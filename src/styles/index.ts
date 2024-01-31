import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 20px;
  font-family: Arial, sans-serif;

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      cursor: pointer;
      background-color: #f2f2f2;
    }

    th:hover {
      background-color: #ddd;
    }

    th:active {
      background-color: #c6c6c6;
    }

    tr:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  input {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #333;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  margin: 15px 0px;
`;

export const NotFoundUserWrapper = styled.h3`
  text-align: center;
  font-size: 23px;
  font-style: oblique;
`;

export const NotFoundButtonWrapper = styled.div`
  text-align: center;
  button {
    background-color: rgb(40, 196, 219, 1);
    border: none;
    border-radius: 4px;
    padding: 10px 25px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;
