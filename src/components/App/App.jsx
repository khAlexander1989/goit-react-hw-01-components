import { Box } from '../Box';
import { Task } from 'components/Task';
import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FiendList';
import { TransactionHistory } from '../TransactionHistory';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <Box p={3} display="flex" flexDirection="column">
      <Task title="1 - Профиль социальной сети">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatarUrl={user.avatar}
          stats={user.stats}
        />
      </Task>

      <Task title="2- Секция статистики">
        <Statistics title="Upload Stats" stats={data} />
      </Task>

      <Task title="3 - Список друзей">
        <FriendList friends={friends} />
      </Task>

      <Task title="4 - История транзакций">
        <TransactionHistory items={transactions} />
      </Task>
    </Box>
  );
};
