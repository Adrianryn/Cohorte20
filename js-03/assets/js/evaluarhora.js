let hora = Number( prompt("Que hora es"));

if (( hora >= 6 ) && (hora <=11)){
    document.write("Buenos dias");
}else if((hora >=12) && (hora <=18))
{
    document.write("buenas Tardes")
}else if((hora >=19) && (hora <=23))
{
    document.write("Buenas Noches")
}else if((hora >=0) && (hora <=5))
{
    document.write("Dejame dormir")
}else{
    document.write("Formato de Hora no valido")
}