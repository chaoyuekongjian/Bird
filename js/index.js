



var flappybird = {
    positionX: 0,
    skyStep: 2,
    oBird: null,
    birdTop: 220,
    startColor: 'blue',
    mask: null,
    end: null,
    startFlag: false,
    init: function () {
        this.initData();
        this.animate();
        this.handler();
    },
    initData: function () {
        let game = this.game = document.getElementById('game');
        this.positionX = game.style.backgroundPositionX;
        this.oBird = game.getElementsByClassName('bird')[0];
        this.startText = game.getElementsByClassName('start-blue')[0];
        this.mask = game.getElementsByClassName('mask')[0]
        this.end = game.getElementsByClassName('end')[0]
    },
    animate: function () {
        var count = 0;
        setInterval(() => {
            this.skyMove();
            if (++count % 10 === 0) {
                if (this.startFlag) {
                    this.birdJump();
                    this.startBound();
                }
                this.birdFly(count);
            }
        }, 30);
    },
    birdJump: function () {
        this.birdTop = this.birdTop == 220 ? 260 : 220;
        this.oBird.style.top = this.birdTop + 'px';
    },
    birdDrop: function() {

    },
    skyMove: function () {
        var self = this;
        self.positionX -= self.skyStep;
        self.game.style.backgroundPositionX = self.positionX + 'px';
    },
    startBound: function () {
        var preColor = this.startColor;
        this.startColor = this.startColor == 'blue' ? 'white' : 'blue';
        this.startText.classList.remove('start-' + preColor);
        this.startText.classList.add('start-' + this.startColor);
    },
    birdFly: function (count) {
        var indexPx = count % 3 * (-30);
        this.oBird.style.backgroundPositionX = indexPx + 'px';
    },
    handler: function () {
        this.handlerStart();
    },
    handlerStart: function () {
        var self = this;
        this.startText.onclick = function () {
            console.log('12321321');
            self.mask.style.display = 'none';
            self.end.style.display = 'none';
            self.startFlag = true;
        }

    }
};

flappybird.init();

