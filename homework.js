// Exercise switch
/**
 * 
    En el archivo weather.js
    Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
 *
 */

    let clima = prompt('¿Cómo esta el clima actualmente?', 'soleado, lluvioso, nevando, nublado')
    let celsius = []* 9/5 + 32 
    //let clima = 
//if( celsius === null ) {
    //console.log('Temperatura incorrecta')
//} else {
   // let far = parseInt(celsius) 
    //console.log 'La temperatura actual es ${far}' °F
    //window.alert(messafeToShow)
    switch (clima){
        case soleado : 
            console.log(`El clima en tu ciudad es ${soleado} y la temperatura en °F es ${celsius}`)
            break;        
        case lluvioso :
            console.log(`El clima en tu ciudad es ${lluvioso} y la temperatura en °F es ${celsius}`)
            break;
        case nevando :
            console.log(`El clima en tu ciudad es ${nevando} y la temperatura en °F es ${celsius}`)
            break;
        case nublado :
            console.log(`El clima en tu ciudad es ${nublado} y la temperatura en °F es ${celsius}`)
            break;
        }