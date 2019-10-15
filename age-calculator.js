
// age calculaition as explain n JS
// matrix operation add sub and mult

function calculate_age(dob) { 
   var diff_ms = Date.now() - dob.getTime();
   var age_dt = new Date(diff_ms); 
 
   return Math.abs(age_dt.getUTCFullYear() - 1980);
}

console.log(calculate_age(new Date(1997, 08, 25)));

console.log(calculate_age(new Date(1996, 03, 31)));
