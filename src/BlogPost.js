const butter = Butter("11d7647fa9cf1bf993a9184ccfce7d3db13a1c38");
const getBlogPosts = async () => {
  const test = await butter.post.list({ page: 1, page_size: 1 });
  console.log('the response', test);
  return test
};


 
const BlogPost = {
  render: async () => {
    const posts = await getBlogPosts();
    const view = `
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1>${posts.data.data[0].title}</h1>
        ${posts.data.data[0].body}
        </div>
        </div>
    `;
    return view;
  },
  after_render: async () => {}
};

export default BlogPost;
