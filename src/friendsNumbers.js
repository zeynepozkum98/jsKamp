//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan 
//programı yazınız. (Arkadaş sayılar için google)
// Arkadaş Sayı: İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara Arkadaş Sayılar denir.
//Örnek:220 ve 284
//220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
//284 : 1 + 2 + 4 + 71 + 142 = 220

function friendNumbers(number1,number2) {

    let divisors=[]
    let num1_divisors_sum=0
    let num2_divisors_sum=0

    for(let i=0;i<number1;i++)
    {
        if(number1%i==0)
        {
            num1_divisors_sum=num1_divisors_sum+i
        }
    }

    for(let i=0;i<number2;i++)
    {
        if(number2%i==0)
        {
            num2_divisors_sum=num2_divisors_sum+i
        }
    }

    if(num1_divisors_sum==number2 && num2_divisors_sum==number1)
    {
       console.log(number1 + " ve " +number2 + " Arkadaş sayılardır. ")
    }

    else
    {
       console.log(number1 + " ve " +number2 + " Arkadaş sayı değillerdir. ")
    }

 
}

friendNumbers(300,200)