const buttons = document.getElementsByClassName("flex_btn");

const flexHandler = ({ target }) => {
  document.getElementById("flex-container").style.flexDirection =
    target.dataset.flexDirection;
  for (const btn of buttons) {
    btn.style.backgroundColor = "#4FC2F8";
    btn.style.color = "initial";
  }
  target.style.backgroundColor = "red";
  target.style.color = "#fff";
};

for (const btn of buttons)  {
  btn.addEventListener('click', flexHandler) 
  
}