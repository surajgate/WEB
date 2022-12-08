function myFunction() {
    // alert();
    console.log(document.getElementById('x1'));

    var amount = document.getElementById('x1').value;
    var interest = document.getElementById('x2').value;
    var duration = document.getElementById('x3').value;

    console.log(amount, interest, duration);

    if (amount == '' || interest == '' || duration == '') {
        alert("Please Enter All Values");
    }
    else {
        amt = parseInt(amount);
        r = parseFloat(interest);
        year = parseInt(duration);
        console.log(amt, r, year);

        var x = "";
        var r1 = r / 12 / 100;
        var openingBalance = amt;

        var y = year * 12;
        var emi = Math.round(amt * r1 * (1 + r1) ** y / ((1 + r1) ** y - 1));

        var yearlyEMI = emi * 12;

       
        for (var i = 1; i <= year; i++) {
         var interestEarned = Math.round(openingBalance * 1 * r / 100);

            console.log(yearlyEMI, interestEarned);
            var principal = yearlyEMI - interestEarned;
            var closingBalance = openingBalance - principal;

            x = x + `
                <tr>
                    <td>${i}</td>
                    <td>${openingBalance}</td>
                    <td>${yearlyEMI}</td>
                    <td>${interestEarned}</td>
                    <td>${principal}</td>
                    <td>${closingBalance}</td>
                </tr>
            `

            openingBalance = closingBalance;
        }
        console.log(x);
        console.log(document.getElementById("result"));
        //DOM Property innerHTML
        document.getElementById("result").innerHTML = x;
    }

}