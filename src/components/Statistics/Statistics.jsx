import PropTypes from 'prop-types';

import { getRandomHexColor } from 'utils/getRandomHexColor';
import { Box } from 'components/Box';
import {
  Container,
  StatItem,
  Title,
  StatItemName,
  StatItemValue,
} from './Statistics.styled';

export function Statistics({ stats, title }) {
  return (
    <Container>
      <Box p={4}>{title && <Title>{title}</Title>}</Box>

      <Box as="ul" display="flex">
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} itemColor={getRandomHexColor()}>
            <Box display="flex" flexDirection="column">
              <StatItemName>{label}</StatItemName>
              <StatItemValue>{percentage}%</StatItemValue>
            </Box>
          </StatItem>
        ))}
      </Box>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
