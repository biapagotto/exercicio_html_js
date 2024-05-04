const form = document.getElementById('form-comparacao');
        const campoA = document.getElementById('campo-a');
        const campoB = document.getElementById('campo-b');
        let formEValido = false;

        form.addEventListener('submit', function(e){
            e.preventDefault();

            const mensagemSucesso = 'O número B é maior que o número A.';

            formEValido = parseInt(campoB.value) > parseInt(campoA.value);
            if (formEValido) {
                const containerMensagemSucesso = document.querySelector('.success-message');
                containerMensagemSucesso.textContent = mensagemSucesso;
                containerMensagemSucesso.style.display = 'block';

                campoA.value = '';
                campoB.value = '';
            } else {
                document.querySelector('.error-message').style.display = 'block';
            }
        });