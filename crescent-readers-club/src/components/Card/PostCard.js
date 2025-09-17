import React from 'react';
import './Card.css';
import { truncateText } from '../../utils/truncateText';
import { formatDate } from '../../utils/formatDate';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <img src={post.image} alt={post.title} />
      <div>
        <h3>{post.title}</h3>
        <p className="muted">{formatDate(post.date)}</p>
        <p>{truncateText(post.content, 160)}</p>
        <a className="btn btn-sm" href="/posts/1">Read</a>
      </div>
    </article>
  );
}
