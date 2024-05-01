function registrar() {
    // Obtener la fecha del formulario
    var fecha = document.getElementById('fecha').value;

    // Obtener los datos de alimentación
    var desayunoTipo = document.getElementById('desayunoTipo').value;
    var desayunoCantidad = document.getElementById('desayunoCantidad').value;
    var almuerzoTipo = document.getElementById('almuerzoTipo').value;
    var almuerzoCantidad = document.getElementById('almuerzoCantidad').value;
    var colacionTipo = document.getElementById('colacionTipo').value;
    var colacionCantidad = document.getElementById('colacionCantidad').value;
    var meriendaTipo = document.getElementById('meriendaTipo').value;
    var meriendaCantidad = document.getElementById('meriendaCantidad').value;
    var cenaTipo = document.getElementById('cenaTipo').value;
    var cenaCantidad = document.getElementById('cenaCantidad').value;

    // Obtener los datos de vicio, deporte y otros
    var vicioTipo = document.getElementById('vicioTipo').value;
    var vicioCantidad = document.getElementById('vicioCantidad').value;
    var deporteTipo = document.getElementById('deporteTipo').value;
    var deporteCantidad = document.getElementById('deporteCantidad').value;
    var otrosTipo = document.getElementById('otrosTipo').value;
    var otrosCantidad = document.getElementById('otrosCantidad').value;

    // Generar el ticket con la información recopilada
    var informeText = "<h3>Registro de Hábitos Saludables</h3>";
    informeText += "<p><strong>Fecha:</strong> " + fecha + "</p>";
    informeText += "<h4>Alimentación</h4>";
    informeText += "<p><strong>Desayuno:</strong> " + desayunoCantidad + " " + desayunoTipo + "</p>";
    informeText += "<p><strong>Almuerzo:</strong> " + almuerzoCantidad + " " + almuerzoTipo + "</p>";
    informeText += "<p><strong>Colación:</strong> " + colacionCantidad + " " + colacionTipo + "</p>";
    informeText += "<p><strong>Merienda:</strong> " + meriendaCantidad + " " + meriendaTipo + "</p>";
    informeText += "<p><strong>Cena:</strong> " + cenaCantidad + " " + cenaTipo + "</p>";
    informeText += "<h4>Vicio</h4>";
    informeText += "<p><strong>Vicio:</strong> " + vicioCantidad + " " + vicioTipo + "</p>";
    informeText += "<h4>Deporte</h4>";
    informeText += "<p><strong>Deporte:</strong> " + deporteCantidad + " " + deporteTipo + "</p>";
    informeText += "<h4>Otros</h4>";
    informeText += "<p><strong>Otros:</strong> " + otrosCantidad + " " + otrosTipo + "</p>";

    // Mostrar el ticket en el contenedor de informe
    var informeContainer = document.getElementById('informeText');
    informeContainer.innerHTML = informeText;

    // Mostrar el contenedor de informe
    var informeDiv = document.getElementById('informe');
    informeDiv.style.display = 'block';
}
