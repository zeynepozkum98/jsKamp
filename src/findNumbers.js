//1-) JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir 
//fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...numbers) {
   
    let primes=[]
    let nonPrimes=[]
    for(let i=0;i<numbers.length;i++)
    {
        var isPrime=true;

        for(let j=2;j<numbers[i];j++)
        {
            if(numbers[i]%j==0)
            {
                isPrime=false;
            }
        }

        if(isPrime)
        {
            primes.push(numbers[i])
        }

        else
        {
            nonPrimes.push(numbers[i])
        }
    }

    console.log("Asal sayılar : ", ...primes)
    console.log("Asal olmayan sayılar : ", ...nonPrimes)
    
}

findPrime(2,3,5,7,6,8,10)