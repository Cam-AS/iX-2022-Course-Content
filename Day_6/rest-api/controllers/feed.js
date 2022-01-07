const Post = require('../models/post');

// exports.getPosts = (req, res, next) => {
//   // 200 success
//   res.status(200).json({
//     posts: [{ title: 'First Post', content: 'This is the first post!!!' }],
//   });
// };

// exports.createPost = (req, res, next) => {
//   const title = req.body.title;
//   const content = req.body.content;
//   // 201 created success
//   res.status(201).json({
//     message: 'Post created successfully!',
//     post: {
//       id: new Date().toISOString(),
//       title: title,
//       content: content,
//     },
//   });
// };

exports.getPosts = (req, res, next) => {
  const postQuery = Post.find();
  let fetchedPosts;
  postQuery
    .then((documents) => {
      fetchedPosts = documents;
      return Post.count();
    })
    .then((count) => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: fetchedPosts,
        maxPosts: count,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Post created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
