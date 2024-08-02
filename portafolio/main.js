const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  console.log(mySrc)
  if (mySrc === "images/pack-icon.png") {
    myImage.setAttribute("src", "images/pack-icon2.png");
  } else {
    myImage.setAttribute("src", "images/pack-icon.png");
  }
};