let temp = 0;
/*for(var i=0;i<5;i++)
{
   temp += parseFloat("309090907.528900".replace(/,/g, ''));
   console.log(i+" - "+temp);
}*/
temp = parseFloat("07.50".replace(/,/g, ''));
console.log("FinalValue = "+temp);
let finalV = Number(temp.toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
  });
console.log("FinalValue = "+finalV);