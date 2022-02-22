document.querySelector("form[name='preguntas']").addEventListener('submit', function (event) {
    event.preventDefault();

    const radio = event.target.city.value;
    const radio2 = event.target.mascota.value;
    const radio3 = event.target.monica.value;
    const radio4 = event.target.multi.value;
    const radio5 = event.target.joey.value;

    const parrafos = document.querySelectorAll('p');
    if (parrafos.length > 0) {
        [...parrafos].map(p => p.remove())
    }

    if (radio === 'nyc') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Correcta!!')
        parr.appendChild(parrtext)
        parr.classList.add('correct-parr')
        const legend = document.querySelector(`label[for="${radio}-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')
    }

    else if (radio === '') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('*** Debes seleccionar una opción ***')
        parr.appendChild(parrtext)
        parr.classList.add('empty-parr')
        const legend = document.querySelector(`label[for="nyc-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('empty-legend')
    }
    else {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Uppss')
        parr.appendChild(parrtext)
        parr.classList.add('incorrect-parr')
        const legend = document.querySelector(`label[for='${radio}-field']`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')
    }
    //// 2da pregunta 

    if (radio2 === 'mono') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Correcta!!')
        parr.appendChild(parrtext)
        parr.classList.add('correct-parr')
        const legend = document.querySelector(`label[for='${radio2}-field`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')

    } else if (radio2 === '') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('*** Debes seleccionar una opción ***')
        parr.appendChild(parrtext)
        parr.classList.add('empty-parr')
        const legend = document.querySelector(`label[for="mono-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('empty-legend')
    }

    else {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Incorrecta!!')
        parr.appendChild(parrtext)
        parr.classList.add('incorrect-parr')
        const legend = document.querySelector(`label[for='${radio2}-field']`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')
    }
    //// 3ra pregunta

    if (radio3 === 'cocina') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Correcta!!')
        parr.appendChild(parrtext)
        parr.classList.add('correct-parr')
        const legend = document.querySelector(`label[for="${radio3}-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')
    }
    else if (radio3 === '') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('*** Debes seleccionar una opción ***')
        parr.appendChild(parrtext)
        parr.classList.add('empty-parr')
        const legend = document.querySelector(`label[for="cocina-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('empty-legend')
    }
    else {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Incorrecta!!')
        parr.appendChild(parrtext)
        parr.classList.add('incorrect-parr')
        const legend = document.querySelector(`label[for='${radio3}-field']`).parentElement.childNodes[1]
        legend.appendChild(parr)
        legend.classList.add('incorrect-legend')
    }

    /// 4ta pregunta

    if (radio4 === 'italy') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Correcta!!')
        parr.appendChild(parrtext)
        parr.classList.add('correct-parr')
        const legend = document.querySelector(`label[for="${radio4}-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')

    }
    else if (radio4 === '') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('*** Debes seleccionar una opción ***')
        parr.appendChild(parrtext)
        parr.classList.add('empty-parr')
        const legend = document.querySelector(`label[for="italy-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('empty-legend')
    }
    else {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Incorrecta!!')
        parr.appendChild(parrtext)
        parr.classList.add('incorrect-parr')
        const legend = document.querySelector(`label[for='${radio4}-field']`).parentElement.childNodes[1]
        legend.appendChild(parr)
        legend.classList.add('incorrect-legend')
    }

    // 5ta pregunta

    if (radio5 === 'food') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Correcta!!')
        parr.appendChild(parrtext)
        parr.classList.add('correct-parr')
        const legend = document.querySelector(`label[for="${radio5}-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('correct-legend')
    }
    else if (radio5 === '') {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('*** Debes seleccionar una opción ***')
        parr.appendChild(parrtext)
        parr.classList.add('empty-parr')
        const legend = document.querySelector(`label[for="food-field"]`).parentElement.childNodes[1];
        legend.appendChild(parr)
        legend.classList.add('empty-legend')
    }
    else {
        const parr = document.createElement('p')
        const parrtext = document.createTextNode('Respuesta Incorrecta!!')
        parr.appendChild(parrtext)
        parr.classList.add('incorrect-parr')
        const legend = document.querySelector(`label[for='${radio5}-field']`).parentElement.childNodes[1]
        legend.appendChild(parr)
        legend.classList.add('incorrect-legend')
    }

    document.documentElement.scrollTop = 0;
})

const restartBtn = document.querySelector('#restart-btn');

restartBtn.addEventListener('click', function () {
    let parrafos = document.querySelectorAll('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].remove()
    }
})