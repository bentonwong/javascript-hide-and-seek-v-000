function getFirstSelector(selector) {
  let el = document.querySelector(selector);
  return el;
}

function nestedTarget() {
  const els = document.querySelector('div#nested div.target');
  return els;
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
}

function increaseRankBy(n) {
  let children = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < children.length; i++){
   children[i].innerHTML =  parseInt(children[i].innerHTML) + n
  }
  return children;
}
