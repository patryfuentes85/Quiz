document.querySelector("form[name='preguntas']").addEventListener('submit',function(event){
    event.preventDefault();

    const radio = event.target.city.value;
    const radio2 = event.target.mascota.value;
    const radio3 = event.target.monica.value;
    const radio4 = event.target.multi.value;
    const radio5 = event.target.joey.value;

    if (radio==='nyc'){
        const span = document.createElement('span')
        const spantext = document.createTextNode('Respuesta Correcta!!')
        span.appendChild(spantext)
        const label = document.querySelector('label[for="nyc-field"]')
        label.appendChild(span)
    
    } else {
        const span = document.createElement('span')
        const spantext = document.createTextNode('Uppss')
        span.appendChild(spantext)
        const label = document.querySelector(`label[for='${radio}-field']`)
        label.appendChild(span)
    } 
//// 2da pregunta 

    if (radio2==='mono'){
        const span = document.createElement('span')
        const spantext = document.createTextNode('Respuesta Correcta!!')
        span.appendChild(spantext)
        const label = document.querySelector('label[for="mono-field"]')
        label.appendChild(span)
    
    } else {
        const span = document.createElement('span')
        const spantext = document.createTextNode('Uppss')
        span.appendChild(spantext)
        const label = document.querySelector(`label[for='${radio2}-field']`)
        label.appendChild(span)
    } 
//// 3ra pregunta

    if (radio3==='cocina'){
        const span = document.createElement('span')
        const spantext = document.createTextNode('Respuesta Correcta!!')
        span.appendChild(spantext)
        const label = document.querySelector('label[for="cocina-field"]')
        label.appendChild(span)
    
    } else {
        const span = document.createElement('span')
        const spantext = document.createTextNode('Uppss')
        span.appendChild(spantext)
        const label = document.querySelector(`label[for='${radio3}-field']`)
        label.appendChild(span)
    } 

  /// 4ta pregunta

    if (radio4==='italy'){
        const span = document.createElement('span')
        const spantext = document.createTextNode('Respuesta Correcta!!')
        span.appendChild(spantext)
        const label = document.querySelector('label[for="italy-field"]')
        label.appendChild(span)
    
    } else {
        const span = document.createElement('span')
        const spantext = document.createTextNode('Uppss')
        span.appendChild(spantext)
        const label = document.querySelector(`label[for='${radio4}-field']`)
        label.appendChild(span)
    } 

   // 5ta pregunta

    if (radio5==='food'){
        const span = document.createElement('span')
        const spantext = document.createTextNode('Respuesta Correcta!!')
        span.appendChild(spantext)
        const label = document.querySelector('label[for="food-field"]')
        label.appendChild(span)
    
    } else {
        const span = document.createElement('span')
        const spantext = document.createTextNode('Uppss')
        span.appendChild(spantext)
        const label = document.querySelector(`label[for='${radio5}-field']`)
        label.appendChild(span)
    } 



})


