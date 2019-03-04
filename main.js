var a = {
  name: "Катя"
};


function isEmpty(obj) {
  for (var key in a) {
    return alert(false);
  }
  return alert(true);
}
isEmpty(a);
