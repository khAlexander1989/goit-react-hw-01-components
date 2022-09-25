import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]};

  width: 250px;

  border-radius: ${({ theme }) => theme.radii.normal};

  background-color: ${({ theme }) => theme.colors.bgPrimary};

  box-shadow: 2px 0px 3px 0px rgba(0, 0, 0, 0.1),
    -2px 0px 3px 0px rgba(0, 0, 0, 0.1), 0px 4px 3px 0px rgba(0, 0, 0, 0.2);

  :not(:first-child) {
    margin-top: ${({ theme }) => theme.space[3]};
  }
`;
