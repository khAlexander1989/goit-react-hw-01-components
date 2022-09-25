import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import {
  Transactions,
  Transaction,
  TransactionFields,
  FieldName,
  FieldValue,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Transactions>
      <Box as="thead" border="default" borderColor="skyBlue">
        <TransactionFields>
          <FieldName>Type</FieldName>
          <FieldName>Amount</FieldName>
          <FieldName>Currency</FieldName>
        </TransactionFields>
      </Box>

      <Box
        as="tbody"
        bg="green"
        p={4}
        border="default"
        borderColor="borderPaleBlue"
      >
        {items.map(({ id, type, amount, currency }) => (
          <Transaction key={id}>
            <FieldValue>{type}</FieldValue>
            <FieldValue>{amount}</FieldValue>
            <FieldValue>{currency}</FieldValue>
          </Transaction>
        ))}
      </Box>
    </Transactions>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
