function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal < 1) {
        alert("Enter a positive number.");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    var result_text = `If you deposit <span style="background-color: yellow">${principal}</span>,<br>`;
    result_text += `at an interest rate of <span style="background-color: yellow">${rate}%</span>.<br>`;
    result_text += `You will receive an amount of <span style="background-color: yellow">${interest}</span>,<br>`;
    result_text += `in the year <span style="background-color: yellow">${year}</span><br>`;
    document.getElementById("result").innerHTML = result_text;

    document.getElementById("principal").focus();
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}
