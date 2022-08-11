import { parseDate, trimString } from '../helpers';

export function PostPreview({ post }) {
  const p = {
    pictureURL: post.featured_media,
    altText: post._embedded['wp:featuredmedia']
      ? post._embedded['wp:featuredmedia'][0].alt_text
      : '',
    title: trimString(post.title.rendered),
    titleLink: post.link,
    authorName: post._embedded.author[0].name,
    authorLink: post._embedded.author[0].link,
    date: parseDate(post.date_gmt),
  };

  return (
    <div className="p-card--highlighted col-4 p-bordertop--accent flex-space-between">
      <div>
        <p className="p-text--x-small-capitalised u-no-padding--top">
          Cloud and server
        </p>
        <hr className="is-muted" />
        <img className="p-card__image" src={p.pictureURL} alt={p.altText} />
        <a href={p.titleLink}>
          <p className="p-heading--3" style={{ fontWeight: 300 }}>
            {p.title}
          </p>
        </a>
      </div>
      <div>
        <p className="p-heading--6">
          By <a href={p.authorLink}>{p.authorName}</a> on {p.date}
        </p>
        <hr className="is-muted" />
        <p className="p-text--small u-no-margin--bottom">Article</p>
      </div>
    </div>
  );
}
