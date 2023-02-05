const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Lorem ipsum dolor sit amet. Et omnis magnam aut tenetur illum et enim accusamus 33 odio consequatur.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Qui nemo eaque vel quaerat repellendus aut dolor odit est nisi internos eos deleniti illum.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text:
      "Ex harum quidem id voluptates eius non culpa dicta ab sint aspernatur ut quidem voluptatem est maxime consequatur in esse vero.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Quo autem dolorem non incidunt tenetur ut consequatur atque.",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "Ex cupiditate sint rem accusamus internos ad dolore quisquam.",
    user_id: 5,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
