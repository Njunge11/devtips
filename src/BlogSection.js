const butter = Butter("11d7647fa9cf1bf993a9184ccfce7d3db13a1c38");
const getBlogPosts = async () => {
  const test = await butter.post.list({ page: 1, page_size: 1 });
  console.log('the response', test);
};

const BlogSection = {
  render: async () => {
    const posts = await getBlogPosts();
    const view = ``;
    return view;
  },
  after_render: async () => {}
};

export default BlogSection;
