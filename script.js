document.addEventListener('keydown', function(event) {
  // Obtener el valor numérico o operador asociado a la tecla presionada
  var valorTecla = obtenerValorTecla(event.key);

  // Si se obtiene un valor válido, agregarlo a la calculadora
  if (valorTecla !== null) {
      event.preventDefault(); // Evitar comportamiento predeterminado de las teclas
      agregarAlResultado(valorTecla);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      calcular();
  }
});

function obtenerValorTecla(tecla) {
  // Mapear teclas numéricas y operadores
  var teclasValidas = {
      '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
      '+': '+', '-': '-', '*': '*', '/': '/',
      '.': '.' // Puedes agregar más teclas según sea necesario
  };

  return teclasValidas[tecla] || null;
}

function agregarAlResultado(valor) {
  document.getElementById('resultado').value += valor;
}

function agregarNumero(numero) {
  document.getElementById('resultado').value += numero;
}

function agregarOperador(operador) {
  document.getElementById('resultado').value += operador;
}

function agregarDecimal() {
  var resultado = document.getElementById('resultado').value;
  if (resultado.indexOf('.') === -1) {
      document.getElementById('resultado').value += '.';
  }
}

function limpiar() {
  document.getElementById('resultado').value = 0;
}

function calcular() {
  try {
      var resultado = eval(document.getElementById('resultado').value);
      resultado ? document.getElementById('resultado').value = resultado: document.getElementById('resultado').value  = 0;
      
  } catch (error) {
      document.getElementById('resultado').value = 'Error';
  }
}
