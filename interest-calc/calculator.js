
function get_amount() {
    var principle_amount = document.querySelector('#p_amount').value;
    var interest_rate = document.querySelector('#i_rate').value;
    var time = document.querySelector('#time').value;
    var r = interest_rate / 100;
    let A = principle_amount * (1 + (r*time));
    

    document.querySelector('#result').innerHTML = A;
}

