var a = {
  name: "Катя"
};


function isEmpty(obj) {
  for (var key in a) {
    return alert(true);
  }
  return alert(false);
}
isEmpty(a);