function convert(source) {
    if (source === 'celsius') {
      // Convert Celsius to Fahrenheit and Kelvin
      const celsius = parseFloat(document.getElementById('celsius').value);
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;

      document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit;
      document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin;

    } else if (source === 'fahrenheit') {
      // Convert Fahrenheit to Celsius and Kelvin
      const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
      const celsius = (fahrenheit - 32) * 5/9;
      const kelvin = (fahrenheit - 32) * 5/9 + 273.15;

      document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius;
      document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin;

    } else if (source === 'kelvin') {
      // Convert Kelvin to Celsius and Fahrenheit
      const kelvin = parseFloat(document.getElementById('kelvin').value);
      const celsius = kelvin - 273.15;
      const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

      document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius;
      document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit;
    }
  }