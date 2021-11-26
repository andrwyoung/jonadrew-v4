function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chooseRandomNamed(label, array) {
    var chosen_item = chooseRandom(array);
    return "<br/>" + label + ": " + chosen_item;
}

// add probability that result will be nothing (denoted by '-')
function chooseRandomNull(probability, label, array) {
    var probArray = [probability]
    for (let i = 0; i < array.length; i++) {
        probArray.push(1);
    }

    // console.log(probArray);
    var chosen_item = chooseWithProbability(['-'].concat(array), probArray);
    return "<br/>" + label + ": " + chosen_item;
}

// choose item from weighted list
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

function chooseWithProbabilityNamed(label, words, probs) {
    var chosen_item = chooseWithProbability(words, probs);
    return "<br/>" + label + ": " + chosen_item;
}

function addPoseModifiers(pose) {
    var actions, actProbs;
    switch(pose) {
        case 'standing':
            actions = ['', 'weight on one foot', 'leaning on wall', 'on one foot'];
            actProbs = [3, 2, 1, 1];
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
                'kneeling'
                ];
    var poseProbs = [8, 8, 3, 2, 3, 1, 1, 3, 3, 4, 2]
    var chosenPose = chooseWithProbability(poses, poseProbs);
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

    var final = "Gender: " + gender + pose + emotion + 
    "<br/>" + chooseView() +
    "<br/>" + chooseClothing(gender);

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
    var props = ['rifle',
                'rocket launcher',
                'pistol',
                'bat',
                'pole/spear',
                'basketball',
                'football',
                'ramen',
                'chicken',
                'pan',
                'wand',
                'book',
                'laptop',
                'knife',
                'broom',
                'cup',
                'soccer ball',
                'shield',
                'axe',
                'sycthe',
                'box'
                ];
    var prop = chooseRandomNull(15, "Props", props);

    var hats = [ 'fedora',
                'straw hat',
                'cowboy hat',
                'baseball hat',
                'beanie',
                'helmet'
                ];
    if (gender == 'female') {
        hats = hats.concat('witch hat');
    }
    var hat = chooseRandomNull(20, "Hat", hats);

    var coats = ['trench coat',
                'poofy jacket',
                'hoodie',
                'zipper',
                'raincoat',
                'regular jacket',
                'sweater',
                ];
    var coat = chooseRandomNull(20, "Coat", coats);

    // var face = [];
    var shirts = ['t shirt',
                'long sleeve',
                'button up',
                'tank top',
                'polo',
                'turtle neck',
                ];
    if (gender == 'female') {
        shirts = shirts.concat('bra', 'sleveless', 'crop top');
    }
    var shirt = chooseRandomNamed("Shirt", shirts);  

    var pants = ['jeans',
                'sweatpants',
                'overalls',
                'track pants',
                'shorts',
                'khakis',
                'cargo pants',
                'slacks'
                ];
    if (gender == 'female') {
        pants = pants.concat('yoga pants', 'tights', 'miniskirt', 'dress', 'gaucho pants');
    }
    var pant = chooseRandomNamed("Pants", pants);  

    var shoes = ['sneakers',
                'boots',
                'army boots',
                'cowboy boots',
                'flip flops',
                'slides/slippers',
                'dress shoes',
                ];
    if (gender == 'female') {
        shoes = shoes.concat('high heels', 'knee high boots');
    }
    var shoe = chooseRandomNull(10, "Shoes", shoes);
    

    var addons = ['backpack', 'sachel', 'gloves', 'watch'];
    if (gender == 'female') {
        addons = addons.concat('purse');
    }
    var addon = chooseRandomNull(10, "Addons", addons);

    return prop + hat + coat + shirt + pant + shoe + addon;
}