import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;

  border-radius: ${({ theme }) => theme.radii.normal};
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.1),
    -2px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-transform: uppercase;
  text-align: center;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[1]};
  width: 80px;
  height: 80px;

  background-color: ${p => p.itemColor};
`;

export const StatItemName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  text-align: center;

  color: ${({ theme }) => theme.colors.textWhite};
`;

export const StatItemValue = styled(StatItemName)`
  margin-top: ${({ theme }) => theme.space[2]};

  font-size: ${({ theme }) => theme.fontSizes[4]};
`;
