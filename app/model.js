//  export every function in the file
// remove export from all functions and say export { function1, function2 }

var homeContent = `<img class="waveformGif" src="./images/waveform.gif" alt="" />
<div class="home-header">Lossless Listening</div>
<div class="tile-container">
  <div class="row">
    <div class="tile">New Music</div>
    <div class="tile">Current Hits</div>
  </div>
  <div class="row">
    <div class="tile">Classics</div>
    <div class="tile">'80s</div>
  </div>
</div>
<footer>Copyright &copy; 2022 Lossless Land</footer>`;

var aboutContent = `<div class="about-container">
<div class="about-header">What is Lossless Audio?</div>
<div class="about-content">
  Lossless compression is a class of data compression that allows the
  original data to be perfectly reconstructed from the compressed data
  with no loss of information. Lossless compression is possible because
  most real-world data exhibits statistical redundancy. Lossless Audio
  sounds better because it is able to transmit more data than a compressed
  audio codec such as mp3. Lossles audio codecs include ALAC, FLAC, and DSD.
</div>
</div>
<div class="comparison"></div>
<footer>Copyright &copy; 2022 Lossless Land</footer>`;

var productsContent = `<div class="productHeader">Products</div>
<div class="top">
  <div class="product">
    <img class="productImage" src="./images/hifiman.png" alt="" />
    <div class="productDescription">Hifiman Sundara</div>
    <div class="flavor">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      quasi, ratione consequatur vel vitae ut eveniet enim quo possimus
      maiores fugit? Cum delectus molestias nisi, illum ipsa in autem qui?
    </div>
  </div>
  <div class="product">
    <img class="productImage" src="./images/hiby.webp" alt="" />
    <div class="productDescription">Hiby R3</div>
    <div class="flavor">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      quasi, ratione consequatur vel vitae ut eveniet enim quo possimus
      maiores fugit? Cum delectus molestias nisi, illum ipsa in autem qui?
    </div>
  </div>
</div>
<footer>Copyright &copy; 2022 Lossless Land</footer>`;

var contactContent = `<div class="contact-top">Contact Us</div>
<div class="officeImage"></div>
<div class="contact-form">
  <input class="fName" type="text" placeholder="First Name">
  <input class="lName" type="text" placeholder="Last Name">
  <input class="email" type="text" placeholder="Email">
  <input class="message" type="text" placeholder="Tell us something!">
  <button class="submit">Submit</button>
</div>
<footer>Copyright &copy; 2022 Lossless Land</footer>`;

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
  //   $("#app").html(`<p>${pageID}</p>`);
}

function getLastName(lastName) {
  //   console.log(`<p>${lastName}</p>`);
}

export { setCurrentPageContent };
