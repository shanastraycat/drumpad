const app = new Vue({
    el: '#app',
    data: {
      wavesurfer:{},
      currentKit: 'kit2',
      masterVolume:0.7,
      regions:{}
    },
    methods: {
        play: function (spri) {
            this.wavesurfer.regions.list[spri].play();
        }
    },
    watch: {
        masterVolume: function (val) {
            this.wavesurfer.setVolume(this.masterVolume);
        },
    },
    mounted: function () {
        let wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#46d157',
            progressColor: '#74d4e1',
            plugins: [

                WaveSurfer.regions.create({
                    regions: [
                        {
                            id:"kick",
                            start: 0,
                            end: 0.2,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"snare",
                            start: 1.85,
                            end: 2.0,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc3",
                            start: 3.71,
                            end: 3.85,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc4",
                            start: 5.55,
                            end: 5.70,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc5",
                            start: 7.40,
                            end: 7.80,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc6",
                            start: 9.20,
                            end: 9.4,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc7",
                            start: 11.08,
                            end: 11.3,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        },
                        {
                            id:"perc8",
                            start: 12.94,
                            end: 13.05,
                            drag:0,
                            resize:0,
                            loop: false,
                            color: 'hsla(400, 100%, 30%, 0.5)'
                        }
                    ]
                })
            ]
        });
        this.wavesurfer =  wavesurfer;
        this.wavesurfer.load('kit3.mp3');
        this.regions = this.wavesurfer.regions.list;
        this.wavesurfer.setVolume(this.masterVolume);
    },
})