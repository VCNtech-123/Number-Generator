

const numInput = document.getElementById('numInput');
const numButton = document.getElementById('numButton');
const warning = document.querySelector('.warning');
const generatedNumbers = document.querySelector('.generatedNumbers');

const isPrime = (n) => {
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n === 2) return true; // 2 is the only even prime
    if (n % 2 === 0) return false; // excludes all other even numbers

    // Check odd divisors up to the square root of n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

numInput.addEventListener('blur', () =>{
        warning.textContent = 'Enter a number value to generate numbers';
        warning.style.color = 'red';
})

numButton.addEventListener('click', () => {
    const numValue = Number(numInput.value);
    
    for (let i = 1; i <= numValue; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = i;
        newElement.style.fontSize = '40px';
        newElement.style.display = 'flex';
        newElement.style.justifyContent = 'center';
        newElement.style.alignContent = 'center';
        newElement.style.gap = '15px'; 
        newElement.style.padding = '10px 30px';
        newElement.style.width = '70px';
        newElement.style.color = 'white';
        newElement.style.margin = '0px';



        if (isPrime(i)) {
            newElement.style.backgroundColor = '#eb695b';
        }
        else if (i % 2 === 0) {
            newElement.style.backgroundColor = '#5bbc7a';
        }
        else {
            newElement.style.backgroundColor = '#f7dc5c';
        }

        generatedNumbers.appendChild(newElement);
    }
})

