import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import {
  Container,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatItem,
  StatItemLabel,
  StatItemValue,
} from './Profile.styled';

export function Profile(props) {
  const { username, tag, location, avatarUrl, followers, views, likes } = props;

  return (
    <Container>
      <Box bg="bgPrimary" p={4}>
        <Avatar src={avatarUrl} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Box>

      <Box as="ul" display="flex" bg="bgSecondary">
        <StatItem>
          <StatItemLabel>Followers</StatItemLabel>
          <StatItemValue>{followers}</StatItemValue>
        </StatItem>
        <StatItem>
          <StatItemLabel>Views</StatItemLabel>
          <StatItemValue>{views}</StatItemValue>
        </StatItem>
        <StatItem>
          <StatItemLabel>Likes</StatItemLabel>
          <StatItemValue>{likes}</StatItemValue>
        </StatItem>
      </Box>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
