
    function calcularInteres() {
        let capital = document.getElementById('capital').value;
        
        if (capital <= 0 || isNaN(capital)) {
            alert("Por favor, ingresa un valor válido para el capital inicial.");
            return;
        }
        
        let tasaInteres = 0.02;
        let montoFinal = capital * (1 + tasaInteres);
        
        document.getElementById('resultado').innerHTML = 
            "El monto final después de un mes será: $"  + montoFinal.toFixed(2);
    }

    function calcularSalario() {
        let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
        let venta1 = parseFloat(document.getElementById('venta1').value);
        let venta2 = parseFloat(document.getElementById('venta2').value);
        let venta3 = parseFloat(document.getElementById('venta3').value);
    
        if (isNaN(sueldoBase) || sueldoBase <= 0 || isNaN(venta1) || venta1 < 0 || isNaN(venta2) || venta2 < 0 || isNaN(venta3) || venta3 < 0) {
            alert("Por favor, ingresa valores válidos para el sueldo y las ventas");
            return;
        }
    
        let comision = 0.1 * (venta1 + venta2 + venta3);
        let salarioTotal = sueldoBase + comision;
    
        if (!isNaN(salarioTotal)) {
            document.getElementById('resultadoSalario').textContent = "Total de comisiones: $" + comision.toFixed(2) + "Salario total: $" + salarioTotal.toFixed(2);
        } else {
            alert("Error al calcular el salario total. Verifica los valores ingresados.");
        }
    }

    function calcularDescuento() {
        let totalCompra = parseFloat(document.getElementById('totalCompra').value);
    
        if (isNaN(totalCompra) || totalCompra <= 0) {
            alert("Por favor, ingresa un monto de compra válido.");
            return;
        }
    
        let descuento = totalCompra * 0.15;
        let precioFinal = totalCompra - descuento;
    
        document.getElementById('resultadoDescuento').textContent = "Descuento: $" + descuento.toFixed(2) + " Total a pagar: $" + precioFinal.toFixed(2);
    }

function calcularCalificacion() {
    let parcial1 = parseFloat(document.getElementById('parcial1').value);
    let parcial2 = parseFloat(document.getElementById('parcial2').value);
    let parcial3 = parseFloat(document.getElementById('parcial3').value);
    let examenFinal = parseFloat(document.getElementById('examenFinal').value);
    let trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    if (isNaN(parcial1) || parcial1 < 0 || parcial1 > 10 || isNaN(parcial2) || parcial2 < 0 || parcial2 > 10 || isNaN(parcial3) || parcial3 < 0 || parcial3 > 10 || isNaN(examenFinal) || examenFinal < 0 || examenFinal > 10 || isNaN(trabajoFinal) || trabajoFinal < 0 || trabajoFinal > 10) {
        alert("Por favor, ingresa calificaciones válidas entre 0 y 10.");
        return;
    }

    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);

    document.getElementById('resultadoCalificacion').textContent = "Calificación final: " + calificacionFinal.toFixed(2);
}

function calcularEdad() {
    let fechaNacimiento = new Date(document.getElementById('anoNacimiento').value);
    let fechaActual = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
        alert("Por favor, ingresa una fecha de nacimiento válida.");
        return;
    }

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultadoEdad').textContent = "Edad: " + edad + " años.";
}

function palabrasANumeros() {
    let palabras = document.getElementById('palabras').value.split(',');
    let resultado = palabras.map(function(palabra) {
        switch (palabra.trim().toLowerCase()) {
            case 'cero': return 0;
            case 'uno': return 1;
            case 'dos': return 2;
            case 'tres': return 3;
            case 'cuatro': return 4;
            case 'cinco': return 5;
            case 'seis': return 6;
            case 'siete': return 7;
            case 'ocho': return 8;
            case 'nueve': return 9;
            default: return -1;
        }
    });

    document.getElementById('resultadoPalabras').textContent = "Traducción: " + resultado.join(', ');
}

function calcularHorasExtras() {
    let horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    let salarioPorHora = parseFloat(document.getElementById('pagoHora').value);

    if (isNaN(horasTrabajadas) || horasTrabajadas < 0 || isNaN(salarioPorHora) || salarioPorHora <= 0) {
        alert("Por favor, ingresa valores válidos para las horas trabajadas y el salario por hora.");
        return;
    }

    let salarioNormal = Math.min(40, horasTrabajadas) * salarioPorHora;
    let horasExtras = Math.max(0, horasTrabajadas - 40);
    let salarioHorasExtras = 0;

    if (horasExtras > 0) {
        if (horasExtras <= 8) {
            salarioHorasExtras = horasExtras * salarioPorHora * 2;
        } else {
            salarioHorasExtras = (8 * salarioPorHora * 2) + 
                                 ((horasExtras - 8) * salarioPorHora * 3);
        }
    }

    let salarioTotal = salarioNormal + salarioHorasExtras;

    document.getElementById('resultadoHorasExtras').textContent = "Salario total con horas extras: $" + salarioTotal.toFixed(2);
}

function calcularUtilidad() {
    let salarioMensual = parseFloat(document.getElementById('salarioMensual').value);
    let antiguedad = parseFloat(document.getElementById('antiguedad').value);

    if (isNaN(salarioMensual) || salarioMensual <= 0 || isNaN(antiguedad) || antiguedad < 0) {
        alert("Por favor, ingresa valores válidos para el salario y la antigüedad.");
        return;
    }

    let porcentajeUtilidad;
    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05;
    } else if (antiguedad < 2) {
        porcentajeUtilidad = 0.07;
    } else if (antiguedad < 5) {
        porcentajeUtilidad = 0.1;
    } else if (antiguedad < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.2;
    }

    let utilidad = salarioMensual * porcentajeUtilidad;

    document.getElementById('resultadoUtilidad').textContent = "Utilidad anual: $" + utilidad.toFixed(2);
}

function calcularLetraDNI() {
    let dni = parseInt(document.getElementById('dni').value);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Por favor, ingresa un número de DNI válido (entre 0 y 99999999).");
        return;
    }

    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = letras.charAt(dni % 23);

    document.getElementById('resultadoDNI').textContent = "Letra del DNI: " + letra;
}

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let comentarios = document.getElementById('comentarios').value;
    let password = document.getElementById('password').value;
    let aceptoCondiciones = document.getElementById('aceptoCondiciones').checked;

    if (!nombre || !email || !comentarios || !password) {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

    if (comentarios.length > 50) {
        alert("El comentario no debe exceder los 50 caracteres.");
        return false;
    }

    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.");
        return false;
    }

    if (!aceptoCondiciones) {
        alert("Debes aceptar las condiciones del servicio.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
