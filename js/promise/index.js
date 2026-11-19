let fetchPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let responseData = await response.json();
    console.log(response);
    console.log(responseData);
    responseData.map((value) => {
      let p = document.createElement("p");

      p.innerHTML = value.title;
      document.body.append(p);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchPosts();
