document.addEventListener('DOMContentLoaded', function() {
    const contadorElement = document.getElementById('contador');
    const voltarBtn = document.getElementById('voltarBtn');
    let contador = 10;

    // Redirecionar ao clicar no botão
    voltarBtn.addEventListener('click', () => {
        window.location.href = '/';
    });

    // Contador regressivo e redirecionamento automático
    const interval = setInterval(() => {
        contador--;
        contadorElement.textContent = contador;

        if (contador <= 0) {
            clearInterval(interval);
            window.location.href = '/';
        }
    }, 1000);
}); 