let content = document.getElementById("content");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");

let url = "https://type.fit/api/quotes";

async function fetchData(urlkey) {
  try {
    let random = Math.floor(Math.random() * 16);
    let response = await fetch(urlkey);
    const result = await response.json();
    console.log(result[random]);
    content.innerHTML = `"${result[random].text}"`;
    author.innerHTML = `~${result[random].author}`;
  } catch (error) {
    console.log(error.message);
  }
}

fetchData(url);
