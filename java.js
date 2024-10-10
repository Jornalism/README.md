onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      document.querySelector('.message').style.display = 'block';
      clearTimeout(c);
    }, 6000); // wait 6 seconds before showing the message
  };
