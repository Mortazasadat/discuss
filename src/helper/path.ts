const paths = {
  homePath() {
    return "/";
  },
  topicShowPath(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreatePath(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShowPath(topicSlug: string, postId: number) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
