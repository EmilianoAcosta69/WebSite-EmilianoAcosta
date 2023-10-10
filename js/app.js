const form = document.querySelector('#formContacto');
const buttonMail = document.querySelector('#mailSend');

form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    const formulario = new FormData(this)
    buttonMail.setAttribute('href',`mailto:emilianoac14@gmail.com?subject=
    ${formulario.get('name')} ${formulario.get('email')}
    &body=${formulario.get('message')}`)
    buttonMail.click()
    formContacto.reset();
}