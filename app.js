const app = new Vue({
    el: '#app',
    data: {
      soundBank:{
        kit1:{
            src:'kit1.mp3',
            sprite: {
              kick: [0, 160],
              snare: [460, 160],
              tom: [920, 160],
              perc1: [1380, 160],
              perc2: [1850, 160],
            }
        },
        kit2:{
            src:'kit2.mp3',
            sprite: {
              kick: [0, 160],
              snare: [460, 160],
              tom: [920, 160],
              perc1: [1380, 160],
              perc2: [1850, 160],
            }
        }
      },
      sound:{},
      currentKit: 'kit2',
      masterVolume:0.7
    },
    methods: {
        play: function (spri) {
            this.sound.play(spri);
        },
        createSound:function(){
            this.sound = new Howl({
                src: [this.soundBank[this.currentKit].src],
                sprite: this.soundBank[this.currentKit].sprite
            });
            this.sound.volume(this.masterVolume);
        },
        keyPressed(key) {
            console.log(`${key} was pressed.`);
        }
    },
    mounted: function () {
        fetch('soundbank.json')
        .then(response => response.json())
        .then(data => {this.soundBank = data;console.log(this.soundBank);this.createSound();});
    },
    watch: {
        masterVolume: function (val) {
            this.sound.volume(this.masterVolume);
        },
        currentKit:function (val) {
            this.createSound();
        }
    }
})