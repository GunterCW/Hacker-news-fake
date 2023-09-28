interface SiteFromNewsWasTakenProps {
  url: string;
  createCommentaryForkLink: (id: number) => string;
  createCroppedURL: (url: string, id: number) => string;
  id: number;
}

export const SiteFromNewsWasTaken = (props: SiteFromNewsWasTakenProps) => {
  const { url, createCommentaryForkLink, createCroppedURL, id } = props;
  return (
    <a href={url || createCommentaryForkLink(id)}>
      {createCroppedURL(url, id)}
    </a>
  );
};
