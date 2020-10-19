const formatDate = date => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const stripHtml = html => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export { formatDate, stripHtml };
