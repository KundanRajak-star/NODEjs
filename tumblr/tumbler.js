const request = require("request");
const { SAVEDATA } = require("./mongodb");

// const url = "https://cannibalchicken.tumblr.com/api/read/json";

required = ["name", "timezone", "title", "description", "posts", "posts-total"];

function BlogUrl(blogName, starts, number) {
  return `https://${blogName}.tumblr.com/api/read/json?start=${starts}&num=${number}`;
}

function readBlog(url) {
  let BlogData;

  return new Promise((resolve, reject) => {
    request(url, function (error, { body }) {
      if (error) {
        reject("invalid url");
      }

      // console.log("type", typeof body, body);
      try {
        BlogData = JSON.parse(
          body.substring(body.indexOf("{"), body.lastIndexOf("}") + 1)
        );
        // console.log("title::", BlogData.tumblelog.title);
        resolve(BlogData);
      } catch (error) {
        reject("please enter a valid BLOG-NAME");
      }
    });
  });
}

function extractData(required, BlogData) {
  blog = {};
  blogPosts = [];
  postimg = [];
  for (require of required) {
    if (require === "posts") {
      for (post of BlogData.posts) {
        if (post["photos"] && post.photos.length > 0) {
          for (photo of post.photos) {
            if (photo["photo-url-1280"]) {
              postimg.push(photo["photo-url-1280"]);
            }
          }
          bg = {
            postId: post.id,
            postType: post.type,
            postImage: postimg,
          };
          postimg = [];
          blogPosts.push(bg);
        } else if (post["photo-url-1280"]) {
          postimg.push(post["photo-url-1280"]);

          bg = {
            postId: post.id,
            postType: post.type,
            postImage: postimg,
          };
          postimg = [];
          blogPosts.push(bg);
        }
      }
    } else if (require in BlogData) {
      blog[require] = BlogData[require];
    } else if (require in BlogData.tumblelog) {
      blog[require] = BlogData.tumblelog[require];
    } else {
      console.log(`${require} not found`);
    }
    blog["Posts"] = blogPosts;
  }
  // console.log("blog=>", blog);

  SAVEDATA(blog);
}

function wantMore(blogName, start, number) {
  console.log("start::", start, "number", number);
  const blogUrl = BlogUrl(blogName, starts, number);
  data = readBlog(blogUrl);

  data
    .then((data) => {
      // console.log(data);
      extractData(required, data);
    })

    .catch((e) => {
      console.log("error", e);
    });
}
let starts = 0;
let number = 50;
let blogName = process.argv[2];

let blogUrl = BlogUrl(blogName, starts, number);

let data = readBlog(blogUrl);
data.then((data) => {
  while (starts < data["posts-total"]) {
    wantMore(blogName, starts, number);
    starts += 50;
    number += 50;
    // console.log("count", data);
  }
});
