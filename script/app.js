// one event listener for both buttons
document.body.addEventListener("click", handleClick);

function handleClick(event) {
  // let's explore event object (which is passed to this function automatically)
//   console.log(event);

  //how do we find out which button was clicked?
//    we decided to use event.target.innerText
  if (event.target.innerText === "Change Background Color") {
      console.log("change color button clicked")
      changeBG();


  } else if (event.target.innerText === "Submit") {
      console.log("submit clicked")
    // save the data from the form
  }
}

function changeBG()
{
    //change background if the background button is clicked
    //1. define a "class" CSS rule to change background color
    //2. get access to body element
    //3. toggle that class name on the body
    document.body.classList.toggle("lighterBackground")
}
