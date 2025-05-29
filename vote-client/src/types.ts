export type Poll = {
  id: number;
  title: string;
  votes: Vote[];
};

export type Vote = {
  id: number;
  poll_id: number;
  option: string;
};

const polls: Poll[] = [
  {
    id: 1,
    title: "What is your favorite language?",
    votes: [
      { id: 1, poll_id: 1, option: "Ruby" },
      { id: 2, poll_id: 1, option: "JavaScript" },
      { id: 3, poll_id: 1, option: "Python" }
    ]
  },
  {
    id: 2,
    title: "What is your favorite framework?",
    votes: [
      { id: 4, poll_id: 2, option: "Ruby on Rails" },
      { id: 5, poll_id: 2, option: "React" },
      { id: 6, poll_id: 2, option: "Django" }
    ]
  },
  {
    id: 3,
    title: "What is your favorite database?",
    votes: [
      { id: 7, poll_id: 3, option: "PostgreSQL" },
      { id: 8, poll_id: 3, option: "MySQL" },
      { id: 9, poll_id: 3, option: "SQLite" }
    ]
  },
  {
    id: 4,
    title: "What is your favorite programming paradigm?",
    votes: [
      { id: 10, poll_id: 4, option: "Object-Oriented" },
      { id: 11, poll_id: 4, option: "Functional" },
      { id: 12, poll_id: 4, option: "Procedural" }
    ]
  },
  {
    id: 5,
    title: "What is your OS",
    votes: [
      { id: 13, poll_id: 5, option: "Linux" },
      { id: 14, poll_id: 5, option: "Windows" },
      { id: 15, poll_id: 5, option: "MacOS" }
    ]
  } ]