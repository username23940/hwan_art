
  const logo = document.querySelector('.logo-first');

  if (location.pathname.includes('press')) {
    logo.style.color = 'blue';
  } else if (location.pathname.includes('exhibitions')) {
    logo.style.color = '#EC9F53';
  } else if (location.pathname.includes('index')) {
    logo.style.color = 'red';
  }
