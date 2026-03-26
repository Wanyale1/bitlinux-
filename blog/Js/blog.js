const postsContainer = document.getElementById("posts-container")

const posts = [
{
title:"HTML Basics",
description:"Learn the basics of HTML structure.",
image:"images/html.png",
link:"post.html?id=html-basics"
},

{
title:"CSS Flexbox Guide",
description:"Learn how Flexbox layouts work.",
image:"images/css.jpeg",
link:"post.html?id=css-flexbox"
},

{
title:"JavaScript Variables",
description:"Understanding variables in JavaScript.",
image:"images/js.png",
link:"post.html?id=javascript-variables"
}
]

posts.forEach(post => {

const card = document.createElement("div")
card.classList.add("post-card")

card.innerHTML = `
<img src="${post.image}">
<h3>${post.title}</h3>
<p>${post.description}</p>
<a href="${post.link}">Read More →</a>
`

postsContainer.appendChild(card)

})
