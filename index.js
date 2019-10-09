window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = 'any text here but required';
})
