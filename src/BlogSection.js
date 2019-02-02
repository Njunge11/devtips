const butter = Butter("11d7647fa9cf1bf993a9184ccfce7d3db13a1c38");
const getBlogPosts = async () => {
  const test = await butter.post.list({ page: 1, page_size: 1 });
  console.log("the response", test);
  return test;
};
//
//
//
const BlogSection = {
  render: async () => {
    const posts = await getBlogPosts();
    const view = `
    <div class="row blog">
    <div class="col-md-10 mx-auto">
    <div class="row">
    <div class="col-md-8 mx-auto">
    <div class="text-center">
    <h1 class="blog-title">Blog</h1>
    <p class="blog-desc"> Thoughts, notes, tips & tricks on web development and other
    areas of software development I find interesting.</p>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-6">
      <div class="card text-white">
        <img src=${posts.data.data[0].featured_image} class="card-img" alt="image" />
        <div class="card-img-overlay">
          <p>${posts.data.data[0].categories[0].name.toUpperCase() ||
            "Misc"}</p>
          <h5 class="card-title">${posts.data.data[0].title}</h5>
          <a href="#/posts/${posts.data.data[0].url}" class="card-text">
          <span>Read more </span>
          <span>></span>
          </a>
        </div>
      </div>
      </div>
      </div>
</div>
</div>
    `;
    return view;
  },
  after_render: async () => {}
};

export default BlogSection;
