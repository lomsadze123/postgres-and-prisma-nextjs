export interface TypesForDelete {
  id: string;
  authorId: string;
}

export interface PostTypes {
  title: string;
  content: string | null;
  author: string | null | undefined;
  id: string;
  authorId: string | null;
}
