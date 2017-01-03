export class Issue {
  id: string;
  labels: string[];
  web_url: string;
  title: string;

  assignee: {
    avatar_url: string,
    id: number,
    name: string,
    state: string,
    username: string,
    web_url: string,
  };
  author: {
      avatar_url: string,
      id: number,
      name: string,
      state: string,
      username: string,
      web_url: string,
  };
  confidential: string;
  created_at: string;
  description: string;
  downvotes: string;
  due_date: string;
  iid: string;
  milestone: string;
  project_id: number;
  state: string;
  subscribed: string;
  updated_at: string;
  upvotes: string;
  user_notes_count: string;
}