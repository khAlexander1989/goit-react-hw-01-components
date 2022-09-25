import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { FriendListItem } from 'components/FriendListItem';
import { Item } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Box as="ul" mx="auto">
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Item key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </Item>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
