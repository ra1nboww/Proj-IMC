function validate()
{
    const peso   = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border   = 'none';
    altura.style.border = 'none';
    if(!peso.value || !altura.value)
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '3px solid #c53b1c';
            altura.style.border = '3px solid #c53b1c';
        }
        else if(!peso.value)
        {
            peso.style.border = '3px solid #c53b1c';
        }
        else
        {
            altura.style.border = '3px solid #c53b1c';
        }
    }
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        if(imc < 18.5)
        {
            console.log('Magreza | Peso Normal');
            result.style.color = 'FFF2E7';
            result.innerHTML = 'Magreza | Normal: 0';
        }
        else if(imc >= 18.5 && imc < 25)
        {
            console.log('Normal | Pré obeso');
            result.style.color = 'FFF2E7';
            result.innerHTML = 'Normal | Pré obeso';
        }
        else if(imc >= 25 && imc < 30)
        {
            console.log('Sobrepeso | Obesidade: I');
            result.style.color = 'FFF2E7';
            result.innerHTML = 'Sobrepeso | Obesidade: I';
        }
        else if(imc >= 30 && imc < 40)
        {
            console.log('Obesidade: I | Obesidade: II');
            result.style.color = 'FFF2E7';
            result.innerHTML = 'Obesidade: I | Obesidade: II';
        }
        else
        {
            console.log('Obesidade grave | Obesidade: III');
            result.style.color = 'FFF2E7';
            result.innerHTML = 'Obesidade grave | Obesidade: III';
        }
    }
}