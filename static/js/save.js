async function save(){
  grecaptcha.ready(function() {
    grecaptcha.execute('6Lf1KMsUAAAAAPHRKkpoZ1-WOImtTLopW0vP9kAu', {action: 'homepage'}).then(function(token) {
       console.log(token);
    });
});
  $('#wait').modal('show')
  await connect()
}

async function connect(){
  event.preventDefault();
  // const url = 'http://localhost:5000/'
  const url = 'https://musik-back.herokuapp.com/'

  const nome = document.querySelector('#nome')
  const email = document.querySelector('#email')
  const emailme = document.querySelector('#emailme')
  const check = document.querySelector('#check')

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //           "Content-type": "application/JSON; charset=UTF-8"
  //       },
  //   mode: 'no-cors',
  //   body:JSON.stringify({nome:nome, email:email, emailme:emailme, check:check})
  // }).then((res) => {
  //   console.log(res)
  // })
  // .catch((err)=>console.log(err))

  // console.log(nome.value);

  let dados = JSON.stringify({nome:nome.value, email:email.value, emailme:emailme.value, check:check.value})
  console.log(dados);

  $.ajax({
    url:url,
    contentType: 'application/json; charset=utf-8',
    type: "POST",
    data: dados,
    dataType: 'json',
    success: (e)=>{
      if (e.status == 'ok'){
        window.location.href = e.msg
      }

      if (e.status == 'err'){
        $('#wait').modal('hide')
        let msg_erro = document.querySelector('#msg-erro')
        let p = document.createElement('p')
        p.innerText = e.msg
        msg_erro.appendChild(p)
        $('#erro').modal('show')
      }
    }
  })
}
