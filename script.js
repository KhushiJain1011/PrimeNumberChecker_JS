function checkPrime() {
    let number = document.getElementById('number').value;
    let isPrime = true;
        if(number < 1){
            alert("Enter a valid number");
            return
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            document.getElementById("result").innerText = number + " is a prime number.";
        } else {
            document.getElementById("result").innerText = number + " is not a prime number.";
        }
    }