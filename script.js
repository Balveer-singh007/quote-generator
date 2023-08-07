let content = document.getElementById("content");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");

let url = "https://api.quotable.io/random";

async function fetchData(urlkey) {
  try {
    let response = await fetch(urlkey);
    const result = await response.json();
    content.innerHTML = `"${result.content}"`;
    author.innerHTML = `~${result.author}`;
  } catch (error) {
    console.log(error.message);
  }
}

fetchData(url);
