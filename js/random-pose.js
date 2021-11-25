function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chooseRandomNull(label, array) {
    var chosen_item = chooseRandom(array);
    if (chosen_item == '') {
        return '';
    } else {
        return "<br/>" + label + ": " + chosen_item;
    }
}

function chooseWithProbability(words, probs) {
    var i, total = 0;
    for (i = 0; i < probs.length; i++) {
        total += probs[i];
    }

    if (words.length != probs.length) {
        console.log("ERROR: words length " + words.length + 
                " and probs length "+ probs.length + " do not match");
    }
    // console.log("total: " + total);
    
    var ar = [];
    var sum = 0
    for (i = 0 ; i < probs.length; i++) {
      sum += (probs[i] / total);
    //   console.log("prob for " + words[i] + ": " + (probs[i] / total * 100));
      ar[i] = sum;
    }

    var r = Math.random();
    for (i = 0 ; i < ar.length - 1 && r >= ar[i] ; i++) ;

    return words[i];
}

function chooseWithProbabilityNull(label, words, probs) {
    var chosen_item = chooseWithProbability(words, probs);
    if (chosen_item == '') {
        return '';
    } else {
        return "<br/>" + label + ": " + chosen_item;
    }
}

function addPoseModifiers(pose) {
    var actions, actProbs;
    switch(pose) {
        case 'standing':
            actions = ['', 'weight on one foot', 'leaning on wall', 'on one foot', 'in ready position'];
            actProbs = [3, 2, 1, 1, 1];
            return chooseWithProbability(actions, actProbs);
        case 'sitting':
            actions = ['', 'in a chair', 'on the floor', 'on a couch', 'on a stool', 'at the desk'];
            return chooseRandom(actions);
        case 'lying down':
            actions = ['', ' on the bed', 'on the side'];
            return chooseRandom(actions);
    }
    return '';
}


function generatePose() {
    var genders = ['male', 'female'];
    var gender = chooseRandom(genders);


    var poses = ['standing',
                'sitting',
                'running',
                'jumping',
                'lying down',
                'squatting',
                'falling',
                'punching',
                'kicking',
                'walking',
                ];
    var chosenPose = chooseRandom(poses);
    var pose = "<br/>Pose: " + chosenPose + " " + addPoseModifiers(chosenPose);

    var emotions = ['joyfully',
                'fearfully',
                'eagerly',
                'angrily',
                'sadly',
                'shocked',
                'confused',
                'bored',
                'surprised',
                'disgusted',
                'calmly',
                'peacefully',
                ];
    var emotion = "<br/>Emotion: " + chooseRandom(emotions);



    var props = ['-',
                'rifle',
                'pistol',
                'bat',
                'pole',
                'basketball',
                'football',
                'ramen',
                'wand',
                'book',
                'laptop',
                'knife'
                ];
    var propProbs = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var prop = chooseWithProbabilityNull("Props", props, propProbs);



    var final = "Gender: " + gender + pose + emotion + 
    "<br/>" + chooseView() +
    "<br/>" + prop;

    document.getElementById("pose").innerHTML = final;
}

function chooseView() {
    var angles = ['top angle (birds eye)',
        'high angle',
        'eye level',
        'low angle',
        'bottom angle (worms eye)',
        ];
    // we want a higher probability that "eye level" gets chosen
    var angleProbs = [1, 2, 8, 2, 1]
    var angle = "<br/>Camera Angle: " + chooseWithProbability(angles, angleProbs);


    var positions = ['front',
        'side',
        'back',
        ];
    // we want a higher probability that "front" gets chosen
    var posProbs = [10, 2, 1];
    var position = "<br/>Actor Angle: " + chooseWithProbability(positions, posProbs);

    var lookings = ['forward',
        'to the side',
        'behind',
        'up',
        'down'
        ];
    // we want a higher probability that "front" gets chosen
    var lookProb = [10, 2, 1, 1, 1];
    var looking = "<br/>Actor Looking: " + chooseWithProbability(lookings, lookProb);

    return angle + position + looking;
}

function chooseClothing(gender) {
    // var hat = [];
    // var face = [];
    // var glove = [];
    // var shirt = [];
    // var pants = [];
    // var shoes = [];
    // var addons = ['backpack', 'sachel', 'dog'];
}