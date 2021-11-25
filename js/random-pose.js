function chooseWithProbability(words, probs) {
    var i, sum = 0;
    for (i = 0; i < probs.length; i++) {
        sum += probs[i];
    }
    if (sum != 100) {
        console.log("ERROR: probabilities do not sum to 100. Probs = " + sum);
    }
    
    var ar = [];
    var probsums = 0
    for (i = 0 ; i < probs.length-1 ; i++) {
      probsums += (probs[i] / 100.0);
      ar[i] = probsums;
    }

    var r = Math.random();
    for (i = 0 ; i < ar.length && r >= ar[i] ; i++) ;

    return words[i];
}

function generatePose() {
    // generate the pose
    var poses = ['standing',
                'sitting',
                'running',
                'jumping',
                'eating',
                'lying down',
                'squatting',
                'falling',
                'punching',
                'kicking'
                ];
    var pose = "Pose: " + poses[Math.floor(Math.random() * poses.length)];

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
                ];
    var emotion = "Emotion: " + emotions[Math.floor(Math.random() * emotions.length)];





    // generate the angle of the camera
    var angles = ['top angle (birds eye)',
                'high angle',
                'eye level',
                'low angle',
                'bottom angle (worms eye)',
                ];
    // we want a higher probability that "eye level" gets chosen
    var angleProbs = [10, 20, 40, 20, 10]
    var angle = "Camera Angle: " + chooseWithProbability(angles, angleProbs);

    // generate angle of person relative to camera
    var positions = ['front',
                'back',
                'side facing left',
                'side facing right',
                'front 3/4 facing left',
                'front 3/4 facing left',
                'back 3/4 facing left',
                'back 3/4 facing left',
                ];
    var position = "Actor Angle: " + positions[Math.floor(Math.random() * positions.length)];

    var final = pose + "<br/>" + emotion + "<br/><br/>" + angle;

    document.getElementById("pose").innerHTML = final;
}