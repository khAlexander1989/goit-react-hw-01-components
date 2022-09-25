import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { TaskTitle } from './Task.styled';

export function Task({ title, children }) {
  return (
    <Box
      py={4}
      display="flex"
      flexDirection="column"
      borderBottom="default"
      borderColor="borderPaleBlue"
    >
      {title && <TaskTitle>{title}</TaskTitle>}
      {children}
    </Box>
  );
}

Task.propTypes = {
  title: PropTypes.string,
};
