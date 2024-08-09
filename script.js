// 1.
// function expo(number, power, callback) {
//   if (power === 0) {
//     return 1;
//   } else if (power === 1) {
//     return callback(number);
//   } else {
//     return callback(number * expo(number, power - 1, callback));
//   }
// }
// function identity(x) {
//   return x;
// }

// const result = expo(5, 3, identity);
// console.log(result);

// 2;
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     const postsContainer = document.getElementById("posts-container");

//     posts.forEach((post) => {
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");

//       const titleElement = document.createElement("h2");
//       titleElement.textContent = post.title;

//       const bodyElement = document.createElement("p");
//       bodyElement.textContent = post.body;

//       postElement.appendChild(titleElement);
//       postElement.appendChild(bodyElement);

//       postsContainer.appendChild(postElement);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3.
// async function deepCopyAsync(obj) {
//   return new Promise((resolve, reject) => {
//     if (typeof obj !== "object") {
//       return reject(new Error("its not an object"));
//     }
//     function deepCopy(item) {
//       if (item === null) return null;
//       if (Array.isArray(item)) {
//         return item.map(deepCopy);
//       }
//       if (typeof item === "object") {
//         const copy = {};
//         for (let key in item) {
//           if (item.hasOwnProperty(key)) {
//             copy[key] = deepCopy(item[key]);
//           }
//         }
//         return copy;
//       }
//       return item;
//     }
//     try {
//       const copy = deepCopy(obj);
//       resolve(copy);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// const originalObj = { a: 1, b: { c: 2 }, d: [3, 4] };
// deepCopyAsync(originalObj)
//   .then((copy) => {
//     console.log(copy);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
