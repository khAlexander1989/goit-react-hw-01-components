import styled from 'styled-components';

export const TaskTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.textSecondary};

  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;
