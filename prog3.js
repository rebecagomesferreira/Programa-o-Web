var numero = 15;

for(i = 0; i < numero; i++){
    if(i % 2 == 0){
        document.writeln('<br> <font color = "blue">Valor par ' + i);
    }else{
        document.writeln('<br> <font color = "red"> Valor impar ' + i);
    }
}