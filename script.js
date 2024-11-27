// const span = document.getElementById('span');

// fetch('https://sotbitfront.netlify.app/.netlify/functions/api')
//   .then(res => res.json())
//   .then(commits => span.innerHTML = JSON.stringify(commits));

// console.log(span);

const download = document.getElementById('file');

if (download) {
  download.addEventListener('click', () => {
    console.log(123);
  });
}

if (params.btnSendDisable) {
  document.querySelector(params.btnSendDisable).addEventListener('click', (event) => {
    BX?.showAuthDisableMessage(BX.message('error_disable'));
  })
  return;
}
