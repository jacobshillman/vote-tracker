var items = [
  {name:'The Beatles',image:'beatlesjpg'},
  {name:'Pink Floyd',image:'floyd.jpg'},
  {name:'Led Zeppelin',image:'led.jpg'},
  {name:'Radiohead',image:'radiohead.jpg'},
  {name:'Pavement',image:'pavement.jpg'},
  {name:'Johnny Cash',image:'cash.jpg'},
  {name:'Explosions in the Sky',image:'explosions.jpg'},
  {name:'Miles Davis',image:'davis.jpg'},
  {name:'John Coltrane',image:'coltrane.jpg'},
  {name:'Beach House',image:'bh.jpg'},
];
var list = document.getElementsByTagName('div')[0];
for(i = 0; i < 3; i++) {
  // Choose a random item and remove it from the array
  var item = items.splice(Math.floor(Math.random() * items.length), 1)[0];

  // Create the image element and set its src attribute
  var image = document.createElement('img');
  image.src = item.image;

  // Add it to your container element
  list.appendChild(image);
  list.appendChild(document.createElement('br'));
  list.appendChild(document.createTextNode('\n'));
}

// Output resulting html
var node = document.createTextNode(list.innerHTML.toString());
var text = document.createElement('div');
text.appendChild(node);
document.getElementById('source').innerHTML = text.innerHTML;
