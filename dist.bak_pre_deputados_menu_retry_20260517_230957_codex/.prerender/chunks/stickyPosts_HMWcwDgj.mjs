function stickyIsActive(post, now = Date.now()) {
  if (!post.data.sticky) return false;
  if (!post.data.stickyUntil) return true;
  return post.data.stickyUntil.valueOf() > now;
}
function sortPostsWithSticky(posts) {
  const now = Date.now();
  return [...posts].sort((a, b) => {
    const stickyA = stickyIsActive(a, now);
    const stickyB = stickyIsActive(b, now);
    if (stickyA !== stickyB) return stickyA ? -1 : 1;
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}

export { sortPostsWithSticky as s };
