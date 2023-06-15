gsap.timeline()
    .from('.main-intro', { scale: 1.5, duration: 2 })
    .from('#face-text', { opacity: 0, duration: .1 })
    .from('#face-text', { duration: 1.5, y: 100 })
// gsap.timeline({
//     scrollTrigger: {
//         trigger: '#cover',
//         start: 'top top',
//         end: 'bottom 30%',
//         // pin: true,
//         markers: true,
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
    end: "+=1500",
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

var gkTl = gsap.timeline({
    scrollTrigger: {
        // immediateRender: true,
        trigger: "#gk",
        start: 'top top',
        end: '+=8000 bottom',
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
gkTl.add('air')
gkTl.to('#air', { color: 'orange' }, 'air')
// gkTl.from('#gambar-air', { y: '50vh' }, 'air')
gkTl.add('listrik')
gkTl.to('#air', { color: 'black' }, 'listrik')
gkTl.to('#listrik', { color: 'orange' }, 'listrik')
// gkTl.to('#gambar-air', { x: '50vh' }, 'listrik')
// gkTl.from('#gambar-listrik', { y: '50vh' }, 'listrik')
gkTl.add('makan')
gkTl.to('#listrik', { color: 'black' }, 'makan')
gkTl.to('#makan', { color: 'orange' }, 'makan')
// gkTl.to('#gambar-listrik', { x: '50vh' }, 'makan')
// gkTl.from('#gambar-makan', { y: '50vh' }, 'makan')
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
.to("#page67-text", { duration:2 })
.to("#page67-text", { opacity: 0.0, y: '-=350', duration:3 })
.add('gray')
.fromTo('#page67-text-2', { opacity: 0, y: '+=150' }, { opacity: 1, y: 0, duration: 3 }, 'gray')
.from('#page67-gambar-warna', {filter: 'grayscale(100)', duration: 3}, 'gray')
.to("#page67-text", { duration:2 })

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
peopleTimeline2.to('g.multi, g.both', { fill: 'blue', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(5))
peopleTimeline2.to('#people g.multi', { fill: 'gray', 'fill-opacity': 1 }, 'change')
peopleTimeline2.to('g.both', { fill: 'red', 'fill-opacity': 1 }, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(6))
// peopleTimeline2.to('#people g', { fill: 'gray', 'fill-opacity': .1 }, 'change')
peopleTimeline2.to('g.both', { fill: 'gray', 'fill-opacity': 1 }, 'change')
// peopleTimeline2.to('g.moneter', { fill: 'orange', 'fill-opacity': 1 }, 'change')
peopleTimeline2.to('g.multi', { fill: 'green', 'fill-opacity': 1 }, 'change')

// PIE SECTION
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
    .fromTo("#pie-chart", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 })
    .to("#pie-chart", { x: "-=450" })
    .fromTo('#pie-explain', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, x: "+=650" }, "-=0.5")

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
            radius: '80%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: function (params) {
                            return params.value + '%\n' + params.name;
                        }
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: [
                { value: 54, name: 'Pendidikan', itemStyle: { color: 'green' } },
                { value: 20, name: 'Standar Hidup', itemStyle: { color: '#a90000' } },
                { value: 26, name: 'Kesehatan', itemStyle: { color: 'yellow' } }
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
// Tampilkan grafik dengan konfigurasi yang telah ditentukan
myPie.setOption(pie_option);


// KONTRIBUSI CHART
var chartDom = document.getElementById('bar-chart');

var run_pie = function (dimensi = 1) {
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Kontribusi',
                type: 'pie',
                radius: '80%',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inner',
                            formatter: function (params) {
                                return params.value + '%\n' + params.name;
                            }
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                data: [
                    { value: 54, name: 'Pendidikan', itemStyle: { color: 'green' } },
                    { value: 20, name: 'Standar Hidup', itemStyle: { color: '#a90000' } },
                    { value: 26, name: 'Kesehatan', itemStyle: { color: 'yellow' } }
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

    option && myChart.setOption(option);
}

var run = function (dimensi = 1) {
    var myChart = echarts.init(chartDom);
    var option;

    if (dimensi == 1) {
        var data_label = ['', '', '', '',
            '', 'Air minum layak', 'Sanitasi', 'Bahan bakar masak',
            'Lantai layak', 'Listrik', 'Aset produktif', 'Akta lahir',
            'Bekerja', 'Internet'];
        var data_value = [
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: 2.1,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 4.11,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.08,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.36,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.3,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.68,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 2.7,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.51,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.69,
                itemStyle: {
                    color: '#a90000'
                }
            }
        ];

    } else if (dimensi == 2) {
        var data_label = ['', '', '', 'Tidak tamat SMP',
            'Tidak/belum sekolah', 'Air minum layak', 'Sanitasi', 'Bahan bakar masak',
            'Lantai layak', 'Listrik', 'Aset produktif', 'Akta lahir',
            'Bekerja', 'Internet'];
        var data_value = [
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: null,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: 38.14,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: 16.33,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: 2.1,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 4.11,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.08,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.36,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.3,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.68,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 2.7,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.51,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.69,
                itemStyle: {
                    color: '#a90000'
                }
            }
        ];

    } else if (dimensi == 3) {
        var data_label = ['Imunisasi', 'Kalori/kap', 'Pelayanan kesehatan', 'Tidak tamat SMP',
            'Tidak/belum sekolah', 'Air minum layak', 'Sanitasi', 'Bahan bakar masak',
            'Lantai layak', 'Listrik', 'Aset produktif', 'Akta lahir',
            'Bekerja', 'Internet'];
        var data_value = [
            {
                value: 2.58,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: 23.12,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: 0.31,
                itemStyle: {
                    color: 'yellow'
                }
            },
            {
                value: 38.14,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: 16.33,
                itemStyle: {
                    color: 'green'
                }
            },
            {
                value: 2.1,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 4.11,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.08,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 3.36,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.3,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 0.68,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 2.7,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.51,
                itemStyle: {
                    color: '#a90000'
                }
            },
            {
                value: 1.69,
                itemStyle: {
                    color: '#a90000'
                }
            }
        ];
    } else myChart.clear();

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: {},
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
            data: data_label,
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
                data: data_value
            }
        ],
        animationDuration: 2000,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    };

    option && myChart.setOption(option);

}

// DATA SECTION
gsap.timeline({
    scrollTrigger:
    {
        trigger: '#data-section',
        start: 'center center',
        endTrigger: '#story-3',
        end: 'top top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        onEnter: () => run(dimensi = 1),
        onLeaveBack: () => run(dimensi=0),
        // markers: true
    }
})

ScrollTrigger.create({
    trigger: '#story-1',
    start: 'center center',
    // markers: true,
    onEnter: () => run(dimensi = 2),
    onLeaveBack: () => run(dimensi = 1),
});
ScrollTrigger.create({
    trigger: '#story-2',
    start: 'center center',
    // markers: true,
    onEnter: () => run(dimensi = 3),
    onLeaveBack: () => run(dimensi = 2)
});
ScrollTrigger.create({
    trigger: '#story-3',
    start: 'center center',
    onEnter: () => run(dimensi = 3),
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
            text: 'SEBARAN INDEKS KEMISKINAN MULTIDIMENSI MENURUT PROVINSI (2022)',
            textStyle: {
                fontSize: '30',
            },
            // subtext: 'Data from www.census.gov',
            // sublink: 'http://www.census.gov/popest/data/datasets.html',
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

option_peta && myPeta.setOption(option_peta);
// Satria End Here