
  // Botão de mostrar/ocultar senha
  const btn = document.querySelector('.Entrar'); // Corrigido: classe precisa de aspas e ponto
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Impede envio do form ao clicar no botão

    const inputSenha = document.querySelector('#senha'); // Corrigido: ID precisa existir

    if (inputSenha.getAttribute('type') === 'password') {
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha.setAttribute('type', 'password');
    }
  });

  function Entrar() {
    let usuario = document.querySelector('#usuario');
    let senha = document.querySelector('#senha');
    let msgError = document.querySelector('#msgError');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let userValid = {};

    listaUser.forEach((item) => {
      if (usuario.value === item.user && senha.value === item.senha) {
        userValid = {
          nome: item.nome,
          user: item.user,
          senha: item.senha,
        };
      }
    });

    if (usuario.value === userValid.user && senha.value === userValid.senha) {
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
      location.href = 'log.html';
    } else {
      msgError.style.display = 'block';
      msgError.innerHTML = 'Usuário ou senha incorretos';
      usuario.style.borderColor = 'red';
      senha.style.borderColor = 'red';
      usuario.focus();
    }
  }










