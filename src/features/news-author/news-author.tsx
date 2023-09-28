interface NewsAuthorProps {
  createUserLink: (arg: string) => string;
  authorName: string;
}
export const NewsAuthor = (props: NewsAuthorProps) => {
  const { createUserLink, authorName } = props;
  return <a href={createUserLink(authorName)}>{authorName}</a>;
};
