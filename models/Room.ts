import Message from './Message';
import Song from './Song';
import User from './User';

interface Room {
  name: string;
  queuedSongs: Song[];
  owner: User;
  users: User[];
  messages: Message[];
}

export default Room;