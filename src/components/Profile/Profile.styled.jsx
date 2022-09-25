import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;

  border-radius: ${({ theme }) => theme.radii.normal};
  overflow: hidden;

  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1),
    -1px 0px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;

  margin-left: auto;
  margin-right: auto;

  border: ${({ theme }) => theme.borders.default + theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.radii.round};
`;

export const UserName = styled.p`
  margin-top: ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};

  color: ${({ theme }) => theme.colors.textSecondary};

  text-align: center;
`;

export const UserTag = styled.p`
  margin-top: ${({ theme }) => theme.space[2]};

  font-size: ${({ theme }) => theme.fontSizes[2]};

  color: ${({ theme }) => theme.colors.textPrimary};

  text-align: center;
`;

export const UserLocation = styled(UserTag)`
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const StatItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 3);
  max-height: 50px;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]} 0;

  border: ${({ theme }) => theme.borders.default + theme.colors.borderPaleBlue};
`;

export const StatItemLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StatItemValue = styled.span`
  margin-top: auto;

  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};

  color: ${({ theme }) => theme.colors.textSecondary};
`;
