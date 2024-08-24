function numberToText(num) {

    const yekan = [
    "",
    "یک",
    "دو",
    "سه",
    "چهار",
    "پنج",
    "شش", 
    "هفت", 
    "هشت", 
    "نه" ];

    const tenTotweny = [
    "ده", 
    "یازده", 
    "دوازده", 
    "سیزده", 
    "چهارده", 
    "پانزده", 
    "شانزده", 
    "هفده", 
    "هجده", 
    "نوزده"];

    const dahgan = [
    "", 
    "", 
    "بیست", 
    "سی", 
    "چهل", 
    "پنجاه", 
    "شصت", 
    "هفتاد", 
    "هشتاد", 
    "نود"];

    const sadgan = [
    "",
    "صد", 
    "دویست", 
    "سیصد", 
    "چهارصد", 
    "پانصد", 
    "ششصد", 
    "هفتصد", 
    "هشتصد", 
    "نهصد"];

    const hezargan = [
    "" ,
    " یک هزار" ,
    "دو هزار" ,
    "سه هزار" ,
    "چهار هزار" ,
    "پنج هزار" ,
    "شش هزار" ,
    "هفت هزار" ,
    "هشت هزار" ,
    "نه هزار"
    ]

    const miliongan = [
    "" ,
    "یک میلیون" ,
    "دو میلیون" ,
    "سه میلیون" ,
    "چهار میلیون" ,
    "پنج میلیون" , 
    "شش میلیون" , 
    "هفت میلیون" ,
    "هشت میلیون" ,
    "نه میلیون"
    ]


    let text = "";

    if(num >= 100000000){
        text += sadgan[Math.floor(num / 100000000)];
        num %= 100000000 ;

        if(num >= 1000000){
            text += " " + "و" + " " ;
        }else if(num > 0 && num < 1000000){
            text += " " + "میلیون و" , + "" ;
        }else if(num === 0){
            text += " " , "میلیون" , " " ;
        }
    }


    if(num >= 20000000){
        text += dahgan[Math.floor(num / 10000000)];
        num %= 10000000 ;

        if(num > 0){
            text += " " + " و" + " " ;
        }else if(num >= 1000000 ){
            text += " " + "و" + " " ;
        }else if(num === 0){
            text += " " + "میلیون" + " " ;
        }
    }


    if(num >= 10000000){
        let indexNumber = Math.floor((num / 1000000)-10);
        let exNum = indexNumber * 1000000 ; 
        text += tenTotweny[indexNumber]+ " " +"میلیون" + " " ;
        num %= (10000000 + exNum) ;

        if(num > 0){
            text += "و" + " " ;
        }
    }


    if(num >= 1000000){
        text += miliongan[Math.floor(num / 1000000)];
        num %= 1000000 ;

        if (num > 0){
            text += " و " + " ";
        }
    }


    if (num >= 100000) {
        text += sadgan[Math.floor(num / 100000)];
        num %= 100000;

        if (num >= 1000) {
            text += " و " + " ";
        }else if( num > 0){
            text +=" " + "هزار و" + " " ;

        }else if (num === 0) {
            text += " هزار" + " ";
    }
    }
    
    

    if(num >= 20000){
        text += dahgan[Math.floor(num / 10000)]; 
        num %= 10000 ;
        
        
        if (num >= 1000){
            text += " " + "و" + " " ;
        }else if (num > 0){
            text += " " + "هزار و" + " " ;
        }else if(num === 0){
            text += " " + "هزار" + " " ;
        }
    }


    if (num >= 10000 && num < 20000) {
        let index = num % 10000 === 0 ? 0 : Math.floor((num - 10000) / 1000);
        text += tenTotweny[index];

        if (num % 1000 !== 0) {
            text += " هزار و " + " ";
        } else {
            text += " هزار" + " " ;
        }
        num %= 1000;
    }   


    if (num > 1000 && num % 1000 !== 0){
        text += hezargan[Math.floor(num / 1000)] + " " + "و" + " ";
        num %= 1000 ;
    }else if (num >= 1000 && num % 1000 === 0){
        text += hezargan[Math.floor(num / 1000)] + " "  ;
        num %= 1000 ;
    }



    if (num > 100 && num % 100 !== 0) {
        text += sadgan[Math.floor(num / 100)] + " " + "و" + " ";
        num %= 100;
    }else if (num >= 100 && num % 100 === 0){
        text += sadgan[Math.floor(num / 100)] ;
        num %= 100;
    }

    if (num > 20  && num % 10 !== 0) {
        text += dahgan[Math.floor(num / 10)] + " " + "و" + " ";
        num %= 10;
    } else if ( num > 10 && num % 10 === 0) {
        text += dahgan[Math.floor(num / 10)] + " " ;
        num %= 10;
    }
    
    
    if (num >= 10) {
        text += tenTotweny[num - 10];
        num = 0;
    }

    if (num > 0) {
        text += yekan[num];
    }

    return text;
}

function makeResult() {

    const input = document.getElementById("number");
    const clientNumber = input.value.toString();


    if (!clientNumber || parseInt(clientNumber) === 0) {
        document.getElementById("text").textContent = "";
        return;
    }

    const result = numberToText(parseInt(clientNumber));

    document.getElementById("text").textContent = result + " " + "تومان" ; 
        }
