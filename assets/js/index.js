const mm = gsap.matchMedia();
const wideRatio = '(min-aspect-ratio: 4/3)',
    midRatio = '(min-aspect-ratio: 3/4) and (max-aspect-ratio: 4/3)',
    tallRatio = '(max-aspect-ratio: 3/4)'

gsap.timeline()
    .from('.main-intro', { scale: 1.5, duration: 2 })
    .from('#face-text', { opacity: 0, duration: .1 })
    .from('#face-text', { scaleY: 0 })
// .from('#face-text', { duration: 1.5, y: 100 })
// gsap.timeline({
//     scrollTrigger: {
//         trigger: '#cover',
//         start: 'top top',
//         end: 'bottom 30%',
//         // pin: true,
//         // markers: true,
//         scrub: true
//     }
// }).to('.main-intro', {"letter-spacing": "100px"})

ScrollTrigger.create({
    trigger: '#sdgs',
    // markers: {
    //     indent: 200
    // },
    pin: true,
    start: "top top",
    end: "+=750",
    scrub: true,
    // pinSpacing: false
})
var tl = gsap.timeline(
    {
        scrollTrigger: {
            immediateRender: true,
            trigger: '#sdgs',
            start: 'top 90%',
            end: (self) => {
                return self.previous().end;
            },
            // end: 'bottom bottom',
            scrub: true,
            // markers: true
        }
    }
)
tl.from('#row1 path', { duration: 2, x: "25vw", stagger: 0.1 }, 'enter')
tl.from('#row2 path', { duration: 2, x: "-25vw", stagger: 0.1 }, 'enter')
tl.from('#row3 > *', { duration: 2, x: "25vw", stagger: 0.1 }, 'enter')
tl.fromTo('path.gray', { filter: "grayscale(0%) opacity(100%)" }, { duration: 2, filter: "grayscale(100%) opacity(5%)" })
tl.fromTo('#text-sdgs', { opacity: 0 }, { duration: .5, opacity: 1 })
tl.to('#text-sdgs', { duration: .8 })

var gkTl = gsap.timeline({
    scrollTrigger: {
        // immediateRender: true,
        trigger: "#gk",
        start: 'top top',
        end: '+=5000 bottom',
        scrub: true,
        pin: true,
        // markers: true
    }
}).add('text2Enter')
gkTl.to('#line', { x: '100vw' })
gkTl.from('#gkText1', { y: '50vh' })
gkTl.set('#gkText1Container', { z: 15 }, 'text2Enter')
gkTl.set('#gkText2', { opacity: 1 }, 'text2Enter')
gkTl.from('#gkText2', { y: '-50vh' })
// gkTl.add('air')
// gkTl.to('#air', { color: 'orange' }, 'air')
// // gkTl.from('#gambar-air', { y: '50vh' }, 'air')
// gkTl.add('listrik')
// gkTl.to('#air', { color: 'black' }, 'listrik')
// gkTl.to('#listrik', { color: 'orange' }, 'listrik')
// // gkTl.to('#gambar-air', { x: '50vh' }, 'listrik')
// // gkTl.from('#gambar-listrik', { y: '50vh' }, 'listrik')
// gkTl.add('makan')
// gkTl.to('#listrik', { color: 'black' }, 'makan')
// gkTl.to('#makan', { color: 'orange' }, 'makan')
// // gkTl.to('#gambar-listrik', { x: '50vh' }, 'makan')
// // gkTl.from('#gambar-makan', { y: '50vh' }, 'makan')
// gkTl.set('#makan', { delay: 0.1 })

gsap.timeline({
    scrollTrigger:
    {
        trigger: '#page67-section',
        start: 'center center',
        end: '+=1500',
        scrub: true,
        pin: true,
        // markers: true
    }
})
    .fromTo('#page67-text', { opacity: 0, y: '+=100' }, { opacity: 1, y: 0, duration: 3 })
    .to("#page67-text", { duration: 2 })
    .to("#page67-text", { opacity: 0.0, y: '-=350', duration: 3 })
    .add('gray')
    .fromTo('#page67-text-2', { opacity: 0, y: '+=150' }, { opacity: 1, y: 0, duration: 3 }, 'gray')
    .from('#page67-gambar-warna', { filter: 'grayscale(100)', duration: 3 }, 'gray')
    .to("#page67-text", { duration: 2 })

function getPeopleTrigger(num) {
    return {
        scrollTrigger: {
            trigger: "#people-story-" + num,
            start: 'top center',
            end: 'top 25%',
            scrub: true,
            pinSpacing: false,
            // markers: true
        }
    }
}

var peopleTimeline1 = gsap.timeline(getPeopleTrigger(2))
peopleTimeline1.to('#people g', { fill: 'gray', 'fill-opacity': .1 }, 'change')
peopleTimeline1.to('g.moneter, g.both, g.multi', { fill: 'gray', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(3))
// peopleTimeline2.to('#people g', { fill: 'gray', 'fill-opacity': .1 }, 'change')
peopleTimeline2.to('g.moneter, g.both', { fill: 'orange', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(4))
peopleTimeline2.to('#people g.moneter', { fill: 'gray', 'fill-opacity': 1 }, 'change')
peopleTimeline2.to('g.multi, g.both', { fill: '#3b82f6', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(5))
peopleTimeline2.to('#people g.multi', { fill: 'gray', 'fill-opacity': 1 }, 'change')
peopleTimeline2.to('g.both', { fill: '#dc2626', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(6))
// peopleTimeline2.to('#people g', { fill: 'gray', 'fill-opacity': .1 }, 'change')
peopleTimeline2.to('g.both', { fill: 'gray', 'fill-opacity': 1 }, 'change')
// peopleTimeline2.to('g.moneter', { fill: 'orange', 'fill-opacity': 1 }, 'change')
peopleTimeline2.to('g.multi', { fill: '#3b82f6', 'fill-opacity': 1 }, 'change')

// PIE SECTION


// PIE CHART
var myPie = echarts.init(document.getElementById('myPie'));

// Konfigurasi grafik
var pie_option = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: 'Kontribusi',
            type: 'pie',
            radius: screen.orientation.type == 'portrait-primary' ? '75%' : '50%',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: function (params) {
                            return params.value + '%\n' + params.name;
                        },
                        fontSize: 12,
                        shadowBlur: 3,
                        shadowColor: '#888',
                    },
                }
            },
            data: [
                { value: 54, name: 'Pendidikan', itemStyle: { color: '#fac858' }, selected: true },
                { value: 20, name: 'Standar Hidup', itemStyle: { color: '#ee6666' } },
                { value: 26, name: 'Kesehatan', itemStyle: { color: '#73c0de' } }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

mm.add(wideRatio, () => { // wide aspect ratio screen
    gsap.timeline({
        scrollTrigger:
        {
            trigger: '#pie-section',
            start: 'center center',
            end: '+=1500',
            duration: 50,
            scrub: true,
            pin: true
        }
    })
        // .fromTo("#pie-chart", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 })
        .to("#pie-chart", { x: "-=25vw" })
        .fromTo('#pie-explain', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, x: "+=25vw" }, "-=0.5")
        .to("#pie-chart", { duration: 0.1 })
})

mm.add(midRatio, () => { // wide aspect ratio screen
    gsap.timeline({
        scrollTrigger:
        {
            trigger: '#pie-section',
            start: 'center center',
            end: '+=1500',
            duration: 50,
            scrub: true,
            pin: true
        }
    })
        // .fromTo("#pie-chart", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 })
        .to("#pie-chart", { x: "-=20vw", y: "-=20vw" })
        .fromTo('#pie-explain', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, x: "+=20vw", y: "+=20vw" }, "-=0.5")
        .to("#pie-chart", { duration: 0.1 })
})

mm.add(tallRatio, () => { // wide aspect ratio screen
    gsap.timeline({
        scrollTrigger:
        {
            trigger: '#pie-section',
            start: 'center center',
            end: '+=1500',
            duration: 50,
            scrub: true,
            pin: true
        }
    })
        // .fromTo("#pie-chart", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 })
        .to("#pie-chart", { y: "-=25vh" })
        .fromTo('#pie-explain', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, y: "+=25vh" }, "-=0.5")
        .to("#pie-chart", { duration: 0.1 })
})

ScrollTrigger.create({
    trigger: '#myPie',
    start: 'center center',
    // markers: true,
    onEnter: () => myPie.setOption(pie_option)
});

ScrollTrigger.create({
    trigger: '#myPie',
    start: 'top center',
    // markers: true,
    onLeaveBack: () => myPie.clear(),
});

// KONTRIBUSI CHART
var chartDom = document.getElementById('bar-chart');

let standarHidupColor = {
    color: '#ee6666'
}, pendidikanColor = {
    color: '#fac858'
}, kesehatanColor = {
    color: '#73c0de'
}

var dimensiStandarHidup = [
    {
        value: 2.1,
        name: 'Air minum layak',
        itemStyle: standarHidupColor
    },
    {
        value: 4.11,
        name: 'Sanitasi',
        itemStyle: standarHidupColor
    },
    {
        value: 3.08,
        name: 'Bahan bakar masak',
        itemStyle: standarHidupColor
    },
    {
        value: 3.36,
        name: 'Lantai layak',
        itemStyle: standarHidupColor
    },
    {
        value: 0.3,
        name: 'Listrik',
        itemStyle: standarHidupColor
    },
    {
        value: 0.68,
        name: 'Aset produktif',
        itemStyle: standarHidupColor
    },
    {
        value: 2.7,
        name: 'Akta lahir',
        itemStyle: standarHidupColor
    },
    {
        value: 1.51,
        name: 'Bekerja',
        itemStyle: standarHidupColor
    },
    {
        value: 1.69,
        name: 'Internet',
        itemStyle: standarHidupColor
    }
]
var dimensiPendidikan = [
    {
        value: 38.14,
        name: 'Tidak tamat SMP',
        itemStyle: pendidikanColor
    },
    {
        value: 16.33,
        name: 'Tidak/belum sekolah',
        itemStyle: pendidikanColor
    }
]
var dimensiKesehatan = [
    {
        value: 2.58,
        name: 'Imunisasi',
        itemStyle: kesehatanColor
    },
    {
        value: 23.12,
        name: 'Kalori/kap',
        itemStyle: kesehatanColor
    },
    {
        value: 0.31,
        name: 'Pelayanan kesehatan',
        itemStyle: kesehatanColor
    },
]

var run = function (dimensi = 1) {
    var myChart = echarts.init(chartDom);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            min: 0,
            max: 40
        },
        yAxis: {
            type: 'category',
            // data: data_label,
            axisTick: {
                alignWithLabel: true
            }
        },
        series: [
            {
                name: 'Kontribusi',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                // data: data_value
            }
        ],
        animationDuration: 2000,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    };

    if (dimensi == 1) {
        // Standar Hidup
        var data = dimensiStandarHidup
        var label = data.map(i => i.name)
        option.yAxis.data = label
        option.series[0].data = data
        myChart.setOption(option);
    } else if (dimensi == 2) {
        //Pendidikan + SH
        var data = dimensiPendidikan.concat(dimensiStandarHidup)
        var label = data.map(i => i.name)
        option.yAxis.data = label
        option.series[0].data = data
        myChart.setOption(option);
    } else if (dimensi == 3) {
        // Kesehatan + Pendidikan + SH
        var data = dimensiKesehatan.concat(dimensiPendidikan, dimensiStandarHidup)
        var label = data.map(i => i.name)
        option.yAxis.data = label
        option.series[0].data = data
        myChart.setOption(option);
    } else if (dimensi == 4) {
        // Kesehatan + Pendidikan + SH
        var data = dimensiKesehatan.concat(dimensiPendidikan, dimensiStandarHidup)
        data = data.sort((a,b) => a.value - b.value)
        var label = data.map(i => i.name)
        option.yAxis.data = label
        option.series[0].data = data
        myChart.setOption(option);
    } else myChart.clear();
}

// DATA SECTION
gsap.timeline({
    scrollTrigger:
    {
        trigger: '#data-section',
        start: 'center center',
        endTrigger: '#story-4',
        end: 'top top',
        pin: true,
        pinSpacing: false,
        // onEnter: () => run(dimensi = 1),
        // onLeaveBack: () => run(dimensi = 0),
        // markers: true
    }
})

ScrollTrigger.create({
    trigger: '#story-1',
    start: 'top bottom',
    // markers: true,
    onEnter: () => run(dimensi = 1),
    onLeaveBack: () => run(dimensi = 0),
});
ScrollTrigger.create({
    trigger: '#story-2',
    start: 'top bottom',
    // markers: true,
    onEnter: () => run(dimensi = 2),
    onLeaveBack: () => run(dimensi = 1)
});
ScrollTrigger.create({
    trigger: '#story-3',
    start: 'top bottom',
    onEnter: () => run(dimensi = 3),
    onLeaveBack: () => run(dimensi = 2)
});
ScrollTrigger.create({
    trigger: '#story-4',
    start: 'top bottom',
    onEnter: () => run(dimensi = 4),
    onLeaveBack: () => run(dimensi = 3)
    // markers: true
});

// PETA SECTION
// gsap.timeline({
//     scrollTrigger:
//     {
//         trigger: '#map-section',
//         start: 'center center',
//         end: '+=1500',
//         duration: 50,
//         scrub: true,
//         pin: true
//     }
// })
//     .fromTo("#map-chart", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, y: "+=20", duration: 0.5 })
// .to("#pie-chart", { x: "-=450" })
// .fromTo('#pie-explain', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, x: "+=650" }, "-=0.5")

// PETA CHART
var myPeta = echarts.init(document.getElementById('peta'));
var option_peta;

myPeta.showLoading();
$.get('assets/provinsi.json', function (usaJson) {
    myPeta.hideLoading();
    echarts.registerMap('USA', usaJson);
    option_peta = {
        title: {
            text: 'SEBARAN INDEKS KEMISKINAN MULTIDIMENSI\nMENURUT PROVINSI (2022)',
            textStyle: {
                fontSize: '30',
            },
            // subtext: 'Data from www.census.gov
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 50,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            },
            text: ['Tertinggi', 'Terendah'],
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'INDEKS KEMISKINAN MULTIDIMENSI',
                type: 'map',
                roam: 'move',
                nodeClick: false,
                // roam: true,
                map: 'USA',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {
                        "name": "ACEH",
                        "value": 11.32
                    },
                    {
                        "name": "SUMATERA UTARA",
                        "value": 10.63
                    },
                    {
                        "name": "SUMATERA BARAT",
                        "value": 12.74
                    },
                    {
                        "name": "RIAU",
                        "value": 12.84
                    },
                    {
                        "name": "JAMBI",
                        "value": 12.78
                    },
                    {
                        "name": "SUMATERA SELATAN",
                        "value": 13.41
                    },
                    {
                        "name": "BENGKULU",
                        "value": 11.19
                    },
                    {
                        "name": "LAMPUNG",
                        "value": 12.11
                    },
                    {
                        "name": "KEPULAUAN BANGKA BELITUNG",
                        "value": 10.63
                    },
                    {
                        "name": "KEPULAUAN RIAU",
                        "value": 7.89
                    },
                    {
                        "name": "DKI JAKARTA",
                        "value": 5.24
                    },
                    {
                        "name": "JAWA BARAT",
                        "value": 12.4
                    },
                    {
                        "name": "JAWA TENGAH",
                        "value": 10.34
                    },
                    {
                        "name": "DI YOGYAKARTA",
                        "value": 3.42
                    },
                    {
                        "name": "JAWA TIMUR",
                        "value": 10.07
                    },
                    {
                        "name": "BANTEN",
                        "value": 10.6
                    },
                    {
                        "name": "BALI",
                        "value": 4.14
                    },
                    {
                        "name": "NUSA TENGGARA BARAT",
                        "value": 8.67
                    },
                    {
                        "name": "NUSA TENGGARA TIMUR",
                        "value": 41.44
                    },
                    {
                        "name": "KALIMANTAN BARAT",
                        "value": 19.15
                    },
                    {
                        "name": "KALIMANTAN TENGAH",
                        "value": 16.66
                    },
                    {
                        "name": "KALIMANTAN SELATAN",
                        "value": 12.97
                    },
                    {
                        "name": "KALIMANTAN TIMUR",
                        "value": 8.26
                    },
                    {
                        "name": "KALIMANTAN UTARA",
                        "value": 12.75
                    },
                    {
                        "name": "SULAWESI UTARA",
                        "value": 12.3
                    },
                    {
                        "name": "SULAWESI TENGAH",
                        "value": 22.73
                    },
                    {
                        "name": "SULAWESI SELATAN",
                        "value": 12
                    },
                    {
                        "name": "SULAWESI TENGGARA",
                        "value": 15.32
                    },
                    {
                        "name": "GORONTALO",
                        "value": 18.12
                    },
                    {
                        "name": "SULAWESI BARAT",
                        "value": 23.23
                    },
                    {
                        "name": "MALUKU",
                        "value": 28.13
                    },
                    {
                        "name": "MALUKU UTARA",
                        "value": 30.36
                    },
                    {
                        "name": "PAPUA BARAT",
                        "value": 27.99
                    },
                    {
                        "name": "PAPUA",
                        "value": 42.62
                    }
                ]
            }
        ]
    };
    myPeta.setOption(option_peta);
});

gsap.timeline({
    scrollTrigger:
    {
        trigger: '#quote',
        start: 'center center',
        end: '+=800',
        duration: 50,
        scrub: true,
        pin: true
    }
})
.fromTo("#sen-quote", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 })

// option_peta && myPeta.setOption(option_peta);
// Satria End Here