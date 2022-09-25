import PropTypes from 'prop-types';

import {
  FrinedStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <FrinedStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt={`${name} avatar`} />
      <FriendName>{name}</FriendName>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
