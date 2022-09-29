import "./styles.css";
const add = document.getElementById("submit-data");
add.onclick = function () {
  getUsers();
  return false;
};
async function getUsers(event) {
  var show = document.getElementById("input-show").value;
  var as = "https://api.tvmaze.com/search/shows?q=" + show;
  const url = as;
  const usersPromise = await fetch(url);
  const user = await usersPromise.json();
  for (var i = 0; i < 10; i++) {
    var d1 = document.createElement("div");
    d1.className = "show-data";
    try {
      var imgscr = user[i].show.image.medium;
    } catch (error) {
      console.log(error);
    }
    let t = document.createElement("img");
    t.src = imgscr;

    let d = document.createElement("div");
    d.className = "show-info";
    try {
      var title = user[i].show.name;
      var summary = user[i].show.summary;
    } catch (error) {
      console.log(error);
    }
    d.innerHTML = "<h1>" + title + "<h1>" + summary;
    d1.appendChild(t);
    d1.appendChild(d);
    document.body.appendChild(d1);
  }
  return false;
}
