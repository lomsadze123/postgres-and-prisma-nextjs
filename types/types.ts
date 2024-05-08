export interface PostTypes {
  title: string;
  content: string | null;
  author: string | null | undefined;
  id: string;
}

declare module "next-auth" {
  interface User {
    username: string;
  }
  interface Session {
    user: User & {
      username: string;
    };
    token: {
      username: string;
    };
  }
}
