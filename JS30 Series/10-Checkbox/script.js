const checkboxs = document.querySelectorAll('.content input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxs.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
checkboxs.forEach(e => e.addEventListener("click", handleCheck));
