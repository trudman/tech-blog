const { Post } = require("../models");

const postData = [
  {
    title: "Est placeat modi At quia nihil est eveniet nobis.",
    post_text:
      "Ut omnis aperiam qui quas accusantium 33 explicabo facilis est quia voluptas sit delectus sint qui quibusdam sequi.",
    user_id: 1,
  },
  {
    title: "Ut libero nemo aut repellat facilis et aliquid totam.",
    post_text: "Ut aliquam reiciendis aut modi aspernatur qui eveniet sint et minima nostrum!",
    user_id: 2,
  },
  {
    title: "Et placeat magnam nam perspiciatis facilis vel.",
    post_text:
      "Nam esse consequatur ut voluptas animi non Quis fugiat ea beatae laborum vel cumque excepturi.",
    user_id: 3,
  },
  {
    title: "Ea possimus dolores vel similique voluptates vel voluptatem.",
    post_text:
      "Et omnis distinctio sit deleniti voluptates est dolor assumenda 33 neque error qui nostrum officia.",
    user_id: 4,
  },
  {
    title: "Est exercitationem officiis et asperiores quia aut sequi.",
    post_text:
      "Est dolor exercitationem et magni error eos sapiente similique ut officiis commodi ut aliquid illo qui rerum nostrum qui ipsum totam.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
