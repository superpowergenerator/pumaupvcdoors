fetch("/footer.html")
  .then(res => {
    if (!res.ok) throw new Error("Footer not found");
    return res.text();
  })
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  })
  .catch(err => console.error(err));
