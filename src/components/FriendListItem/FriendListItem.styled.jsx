import styled from 'styled-components';

export const FrinedStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;

  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};

  border-radius: ${({ theme }) => theme.radii.round};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-left: ${({ theme }) => theme.space[2]};
`;

export const FriendName = styled.p`
  margin-left: ${({ theme }) => theme.space[2]};

  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;
