document.querySelectorAll("input[type='checkbox']").forEach(cb => {
    cb.addEventListener("change", showStats);
});
function showStats() {
    let stats = getStats();
    document.getElementById("result").innerText = `${stats.done} / ${stats.total}`;
}
function getStats() {
    let all = document.querySelectorAll("input[type='checkbox']");
    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    let total = all.length;
    let done = checked.length;
    return { total, done };
}
function toggle(btn) {
  btn.classList.toggle("active");
  let content = btn.nextElementSibling;
  while (content && !content.classList.contains("content")) {
    content = content.nextElementSibling;
  }
  if (!content) return;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  updateParents(btn);
  content.addEventListener("transitionend", function() {
    updateParents(btn);
  }, { once: true });
}
function updateParents(element) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.classList.contains("content")) {
      parent.style.maxHeight = parent.scrollHeight + "px";
    }
    parent = parent.parentElement;
  }
}