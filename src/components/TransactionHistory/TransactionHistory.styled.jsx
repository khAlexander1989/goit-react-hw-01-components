import styled from 'styled-components';

export const Transactions = styled.table`
  width: 500px;

  margin: 0 auto;

  border-collapse: collapse;
  border-radius: ${({ theme }) => theme.radii.normal};
  overflow: hidden;

  box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const Transaction = styled.tr`
  height: 30px;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.textSecondary};

  :nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }
  :nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
  }
`;

export const TransactionFields = styled.tr`
  height: 30px;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const FieldName = styled.th`
  :not(:first-child) {
    border-left: ${({ theme }) =>
      theme.borders.default + theme.colors.borderWhite};
  }
`;

export const FieldValue = styled.td`
  text-align: center;
  vertical-align: center;

  :not(:first-child) {
    border-left: ${({ theme }) =>
      theme.borders.default + theme.colors.borderPaleBlue};
  }
`;
