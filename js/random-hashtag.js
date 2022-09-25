function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chooseRandomNamed(label, array) {
    var chosen_item = chooseRandom(array);
    return "<br/>" + label + ": " + chosen_item;
}

// add probability that result will be nothing (denoted by '-')
function chooseRandomNull(probability, array) {
    var probArray = [probability]
    for (let i = 0; i < array.length; i++) {
        probArray.push(1);
    }

    // console.log(probArray);
    return chosen_item = chooseWithProbability(['-'].concat(array), probArray);
}

// MAIN
function generateHashtags() {
    var mylist = document.getElementById("options");  

    document.getElementById("pose").innerHTML = mylist.options[mylist.selectedIndex].text;
    // document.getElementById("pose").innerHTML = "wiah";
}
