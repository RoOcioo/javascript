function swap(text) {
    text;
    change = [];
  
    for (i = 0; i < text.length; i++) {
      if (text[i] == text[i].toLowerCase()) {
        change[i] = text[i].toUpperCase();
      }
      else {
        change[i] = text[i].toLowerCase();
      }
    }
    console.log(change.join(""));
  }
  
  swap("Hello World")