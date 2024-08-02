const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  console.log(mySrc)
  if (mySrc === "pack-icon.png") {
    myImage.setAttribute("src", "pack-icon2.png");
  } else {
    myImage.setAttribute("src", "pack-icon.png");
  }
};
