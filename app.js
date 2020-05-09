window.addEventListener('load', () => {
    const visual = document.querySelector('.visual');
    const enemyOne = document.createElement('img');
    const enemyTwo = document.createElement('img');
    const enemyThree = document.createElement('img');
    const fireCtrls = document.querySelectorAll('.fire-ctrls div');
    const sounds = document.querySelectorAll('.sound');
    const bullets = document.createElement('img');
    const anims = ['firstbullet .3s ease',
        'secondbullet .3s ease',
        'thirdbullet .3s ease',
    ];
    document.querySelector('.btn').onclick = function() {myFunction()};

    function myFunction() {
        const randomEnemy = Math.floor(Math.random() * 10);

        switch (randomEnemy) {
            case 0:
                createSecondEnemy();
                break;
            case 1:
                createFirstEnemy();
                break;
            case 2:
                createSecondEnemy();
                break;
            case 3:
                createThirdEnemy();
                break;
    
            case 4:
                createFirstEnemy();
                break;
            case 5:
                createSecondEnemy();
                break;
    
            case 6:
                createThirdEnemy();
                break;
            case 7:
                createFirstEnemy();
                break;
    
            case 8:
                createSecondEnemy();
                break;
            case 9:
                createThirdEnemy();
                break;
    
            case 10:
                createFirstEnemy();
                break;
        };
    };
    //LETS POWER UP ENEMIES
    const createFirstEnemy = () => {

        visual.appendChild(enemyOne);

        enemyOne.setAttribute('class', 'enemyone');
        enemyOne.setAttribute('src', './images/enemy1.png');
        enemyOne.style.animation = 'firstenemy 1s ease';
        enemyOne.addEventListener('animationend', function () {
            visual.removeChild(this);
            myFunction();
        });
    };
    const createSecondEnemy = () => {
        visual.appendChild(enemyTwo);
        
        enemyTwo.setAttribute('class', 'enemytwo');
        enemyTwo.setAttribute('src', './images/enemy2.png');
        enemyTwo.style.animation = 'secondenemy 1s ease';
        enemyTwo.addEventListener('animationend', function () {
            visual.removeChild(this);
            myFunction();
        });
    };
    const createThirdEnemy = () => {
        visual.appendChild(enemyThree);

        enemyThree.setAttribute('class', 'enemythree');
        enemyThree.setAttribute('src', './images/enemy3.png');
        enemyThree.style.animation = 'thirdenemy 1s ease';
        enemyThree.addEventListener('animationend', function () {
            visual.removeChild(this);
            myFunction();
        });
    };

    //lets add bullet sound and animation

    fireCtrls.forEach((ctrl, index) => {
        ctrl.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBullets(index);

        })
    });

    const createBullets = (index) => {
        visual.appendChild(bullets);

        bullets.setAttribute('class', 'bullet');
        bullets.setAttribute('src', './images/bullet.png');
        bullets.style.animation = anims[index];
        bullets.addEventListener('animationend', function () {
            visual.removeChild(bullets);
        });

    };


});