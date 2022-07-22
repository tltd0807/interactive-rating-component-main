const selected = document.querySelector(".card-rate");
const result = document.querySelector(".result");
const thanks = document.getElementById("thanks");
const voteCard = document.querySelector(".card");
const submit = document.querySelector(".btn-submit");
selected.addEventListener("click", (e) => {
  // selected trả về ul
  // e.target.textContent (event.target.textContent) sẽ trả về nội dung của element được focus
  console.log(e.target.textContent);
  result.textContent = e.target.textContent;
});
submit.addEventListener("click", () => {
  if (
    result.textContent != "1" &&
    result.textContent != "2" &&
    result.textContent != "3" &&
    result.textContent != "4" &&
    result.textContent != "5"
  ) {
    return;
  } else {
    voteCard.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
});
