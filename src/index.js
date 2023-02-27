/*
 * @Author: DirtyBottle 479763003@qq.com
 * @Date: 2023-01-18 02:44:13
 * @LastEditors: DirtyBottle 479763003@qq.com
 * @LastEditTime: 2023-02-24 12:18:25
 * @FilePath: /zhi-yuan/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by DirtyBottle 479763003@qq.com, All Rights Reserved. 
 */

// Import our custom CSS
import './scss/style.scss';
import './css/style.css';
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import * as echarts from 'echarts';
import wuhanJson from './geojson/wuhan.json';
import clusterWuchang from './geojson/cluster-wuchang.json';
import clusterHongshan from './geojson/cluster-hongshan.json';
import rain5a120 from './geojson/rain5a120.json';
import rain5a150 from './geojson/rain5a150.json';
import rain5a180 from './geojson/rain5a180.json';
import rain10a120 from './geojson/rain10a120.json';
import rain10a150 from './geojson/rain10a150.json';
import rain10a180 from './geojson/rain10a180.json';
import rain20a120 from './geojson/rain20a120.json';
import rain20a150 from './geojson/rain20a150.json';
import rain20a180 from './geojson/rain20a180.json';
import cuiruoxing from './geojson/cuiruoxing4326.json';
import busstation5a from './geojson/busstation_analysis_5a.json';
import busstation10a from './geojson/busstation_analysis_10a.json';
import busstation20a from './geojson/busstation_analysis_20a.json';
import school5a from './geojson/school_analysis_5a.json';
import school10a from './geojson/school_analysis_10a.json';
import school20a from './geojson/school_analysis_20a.json';
import gov5a from './geojson/gov_analysis_5a.json';
import gov10a from './geojson/gov_analysis_10a.json';
import gov20a from './geojson/gov_analysis_20a.json';
import hospital5a from './geojson/hospital_analysis_5a.json';
import hospital10a from './geojson/hospital_analysis_10a.json';
import hospital20a from './geojson/hospital_analysis_20a.json';
import rainCluster from './geojson/rainCluster.json';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';
import closestFacility_hospital2yey_5a180_15l from './geojson/closestFacility_hospital2yey_5a180_15l.json'
import closestFacility_hospital2yey_normal from './geojson/closestFacility_hospital2yey_normal.json'
import closestFacility_xiaofangl2yey_5a180_15 from './geojson/closestFacility_xiaofangl2yey_5a180_15.json'
import closestFacility_xiaofangl2yey_normal from './geojson/closestFacility_xiaofangl2yey_normal.json'
import childgarden from './geojson/childgarden.json'
import hospital from './geojson/hospital.json'
import xiaofang from './geojson/xiaofang.json'
import hospital1 from './img/hospital1.png';
import youeryuan from './img/youeryuan.png';
import xiaofang1 from './img/xiaofang.png';
import hswc_buildings_5a120_flood_nopro from './geojson/hswc_buildings_5a120_flood_nopro.json';
import hswc_buildings_5a150_flood_nopro from './geojson/hswc_buildings_5a150_flood_nopro.json';
import hswc_buildings_5a180_flood_nopro from './geojson/hswc_buildings_5a180_flood_nopro.json';
import hswc_buildings_10a120_flood_nopro from './geojson/hswc_buildings_10a120_flood_nopro.json';
import hswc_buildings_10a150_flood_nopro from './geojson/hswc_buildings_10a150_flood_nopro.json';
import hswc_buildings_10a180_flood_nopro from './geojson/hswc_buildings_10a180_flood_nopro.json';
import hswc_buildings_20a120_flood_nopro from './geojson/hswc_buildings_20a120_flood_nopro.json';
import hswc_buildings_20a150_flood_nopro from './geojson/hswc_buildings_20a150_flood_nopro.json';
import hswc_buildings_20a180_flood_nopro from './geojson/hswc_buildings_20a180_flood_nopro.json';
import wc_hs_road_5a120_flood_nopro from './geojson/wc_hs_road_5a120_flood_nopro.json';
import wc_hs_road_5a120_unflood_nopro from './geojson/wc_hs_road_5a120_unflood_nopro.json';
import wc_hs_road_5a150_flood_nopro from './geojson/wc_hs_road_5a150_flood_nopro.json';
import wc_hs_road_5a150_unflood_nopro from './geojson/wc_hs_road_5a150_unflood_nopro.json';
import wc_hs_road_5a180_flood_nopro from './geojson/wc_hs_road_5a180_flood_nopro.json';
import wc_hs_road_5a180_unflood_nopro from './geojson/wc_hs_road_5a180_unflood_nopro.json';
import wc_hs_road_10a120_flood_nopro from './geojson/wc_hs_road_10a120_flood_nopro.json';
import wc_hs_road_10a120_unflood_nopro from './geojson/wc_hs_road_10a120_unflood_nopro.json';
import wc_hs_road_10a150_flood_nopro from './geojson/wc_hs_road_10a150_flood_nopro.json';
import wc_hs_road_10a150_unflood_nopro from './geojson/wc_hs_road_10a150_unflood_nopro.json';
import wc_hs_road_10a180_flood_nopro from './geojson/wc_hs_road_10a180_flood_nopro.json';
import wc_hs_road_10a180_unflood_nopro from './geojson/wc_hs_road_10a180_unflood_nopro.json';
import wc_hs_road_20a120_flood_nopro from './geojson/wc_hs_road_20a120_flood_nopro.json';
import wc_hs_road_20a120_unflood_nopro from './geojson/wc_hs_road_20a120_unflood_nopro.json';
import wc_hs_road_20a150_flood_nopro from './geojson/wc_hs_road_20a150_flood_nopro.json';
import wc_hs_road_20a150_unflood_nopro from './geojson/wc_hs_road_20a150_unflood_nopro.json';
import wc_hs_road_20a180_flood_nopro from './geojson/wc_hs_road_20a180_flood_nopro.json';
import wc_hs_road_20a180_unflood_nopro from './geojson/wc_hs_road_20a180_unflood_nopro.json';
import busstation_wchs from './geojson/busstation_wchs.json';
import subway_wchs from './geojson/subway_wchs.json';
import pubicycle_wchs from './geojson/pubicycle_wchs.json';
import busIcon from './img/busIcon.png';
import bikeIcon from './img/bikeIcon.png';
import subwayIcon from './img/subwayIcon.png';
import bank_wchs from './geojson/bank_wchs.json';
import culture_wchs from './geojson/culture_wchs.json';
import hospital_wchs from './geojson/hospital_wchs.json';
import bankIcon from './img/bankIcon.png';
import cultureIcon from './img/cultureIcon.png';

import gymIcon from './img/gymIcon.png';
import toiletIcon from './img/toiletIcon.png';
import shopIcon from './img/shopIcon.png';
import sceneryIcon from './img/sceneryIcon.png';

import scenery_wchs from './geojson/scenery_wchs.json';
import toilet_wchs from './geojson/toilet_wchs.json';
import gym_wchs from './geojson/gym_wchs.json';
import shop_wchs from './geojson/shop_wchs.json';

import ServiceArea_5a180_15_hospital_dissolve_nopro_from0 from './geojson/ServiceArea_5a180_15_hospital_dissolve_nopro_from0.json';
import ServiceArea_5a180_15_hospital_dissolve_nopro_from8 from './geojson/ServiceArea_5a180_15_hospital_dissolve_nopro_from8.json';
import ServiceArea_5a180_15_hospital_dissolve_nopro_from12 from './geojson/ServiceArea_5a180_15_hospital_dissolve_nopro_from12.json';

import ServiceArea_5a180_15_xf1_dissolve_nopro_from0 from './geojson/ServiceArea_5a180_15_xf1_dissolve_nopro_from0.json';
import ServiceArea_5a180_15_xf1_dissolve_nopro_from5 from './geojson/ServiceArea_5a180_15_xf1_dissolve_nopro_from5.json';
import ServiceArea_5a180_15_xf1_dissolve_nopro_from10 from './geojson/ServiceArea_5a180_15_xf1_dissolve_nopro_from10.json';

import ServiceArea_normal_hospital_dissolve_nopro_from0 from './geojson/ServiceArea_normal_hospital_dissolve_nopro_from0.json';
import ServiceArea_normal_hospital_dissolve_nopro_from8 from './geojson/ServiceArea_normal_hospital_dissolve_nopro_from8.json';
import ServiceArea_normal_hospital_dissolve_nopro_from12 from './geojson/ServiceArea_normal_hospital_dissolve_nopro_from12.json';

import ServiceArea_normal_xf1_dissolve_nopro_from0 from './geojson/ServiceArea_normal_xf1_dissolve_nopro_from0.json';
import ServiceArea_normal_xf1_dissolve_nopro_from5 from './geojson/ServiceArea_normal_xf1_dissolve_nopro_from5.json';
import ServiceArea_normal_xf1_dissolve_nopro_from10 from './geojson/ServiceArea_normal_xf1_dissolve_nopro_from10.json';

import BotOl from '../../bot-ol'

let myChart1, myChart2, myChart3, myChart4, myChart5, myChart6;
let bo;
let intervalId;

const panel1 = document.querySelector('#panel1'),
    panel2 = document.querySelector('#panel2'),
    panel3 = document.querySelector('#panel3'),
    panel4 = document.querySelector('#panel4'),
    panel5 = document.querySelector('#panel5'),
    panel6 = document.querySelector('#panel6'),
    clusterButton = document.querySelector('#clusterButton'),
    rainButton = document.querySelector('#rainButton'),
    demandButton = document.querySelector('#demandButton'),
    serviceButton = document.querySelector('#serviceButton');

/**
 * @description: 清空页面
 * @return {*}
 */
const reset = () => {
    // 清除图表循环定时器
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
    // 清除已经绘制的各图表
    [myChart1, myChart2, myChart3, myChart4, myChart5, myChart6].forEach((item) => {
        if (item) {
            item.clear();
            item.dispose();
        }
    });
    [myChart1, myChart2, myChart3, myChart4, myChart5, myChart6] = [undefined, undefined, undefined, undefined, undefined, undefined];
    // 清除已经绘制的地图
    bo = undefined;
    // 清除各区块已经绘制的内容
    [panel1, panel2, panel3, panel4, panel5, panel6].forEach((item) => {
        item.innerHTML = '';
        item.onclick = null;
    });
}

const cluster = () => {
    reset();

    const initPanel1 = () => {
        const neiRong = `<h4 style="text-align: center;background-color: white;color: black;padding-top: 7px;padding-bottom: 7px">城市功能区内涝治理建议</h4>` +
            `<b style="color:#CC6600">城市功能混合区</b>：城市规划建设中要充分考虑调蓄的空间需求，主动为水寻找调蓄空间，加强对河湖水系、坑塘湿地的保护。结合城市更新，在低洼地、历史严重内涝点等位置，加强“留白增绿”，增加调蓄能力<br/><br/>` +
            `<b style="color:#CC6600">休闲游憩区</b>：合理布局并充分利用蓝绿空间进行调蓄，加强对低洼地的保护，优先将其作为公园、湿地或者其他蓝绿空间使用。在保障安全的前提下，适当承担周边城市建设用地的“客水”的调蓄功能<br/><br/>` +
            `<b style="color:#CC6600">居住区、休闲游憩区</b>：将广场、运动场等作为“兼职”调蓄空间，合理设计广场、运动场等空间，发挥“兼职”“临时”的调蓄作用。通过竖向优化、“耐淹”设计和加强管理，确保暴雨时能够临时发挥调蓄作用<br/>`;
        panel1.innerHTML = neiRong;
    }

    const initPanel2 = () => {
        myChart2 = echarts.init(document.getElementById('panel2'));
        const option = {
            title: {
                left: 'center',
                text: '街道所属功能区统计',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                // trigger: 'item'
            },
            grid: {
                right: 0,
                left: 0,
                bottom: 0,
                top: 0
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left'
            // },
            series: [
                {
                    name: '街道所属功能区(个)',
                    type: 'pie',
                    radius: '80%',
                    top: 30,
                    radius: '95%',
                    data: [
                        { value: 16, name: '成熟的居住区' },
                        { value: 10, name: '新兴的成熟混合区' },
                        { value: 38, name: '主要商业区' },
                        { value: 25, name: '主要的工作区' },
                        { value: 39, name: '主要高校及其周边区域' },
                        { value: 55, name: '城市功能混合区' },
                        { value: 82, name: '新兴的城市混合区' },
                        { value: 136, name: '休闲游憩区' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        // show: false,
                        position: 'inside',
                        fontSize: 18,
                        color: '#000'
                    },
                    // right: 0,
                    // left: 0,
                    // bottom: -100,
                    // top: -100
                }
            ]
        };
        myChart2.setOption(option);
    }

    const initPanel3 = () => {
        myChart3 = echarts.init(document.getElementById('panel3'));
        const wuchangCluster = () => {
            fetch(clusterWuchang).then(res => res.json().then(json => {
                echarts.registerMap('clusterWuchang', json);
                const features = json.features;
                const cluster = features.map((item) => { return { name: item.properties.SSSQ, value: item.properties.CLU_label, cluster: item.properties.CLUSTER } });
                myChart3.setOption({
                    title: {
                        text: '武昌区城市功能区分布',
                        textStyle: {
                            color: '#FFF',
                            // fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: 'serif',
                            fontSize: 22,
                            textShadowColor: '#000',
                            textShadowBlur: 10
                        },
                        left: 'center',

                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2
                    },
                    geo: {
                        // id: ,
                        // show: true,
                        map: 'clusterWuchang',
                        roam: true,
                        // projection: ,
                        // center: ,
                        // aspectScale: 1,
                        // boundingCoords: ,
                        // zoom: 1,
                        // scaleLimit: ,
                        // nameMap: ,
                        layoutCenter: ['60%', '30%'], //设置后left/right/top/bottom等属性无效
                        layoutSize: '200%',
                        nameProperty: 'SSSQ',
                        // selectedMode: false,
                        // label: {
                        //     show: true,
                        //     position: 'right',
                        //     offset: [0, -10],
                        //     color: '#FFF',
                        //     fontSize: 20,
                        //     textBorderColor: 'black',
                        //     textBorderWidth: 2
                        // },
                        // itemStyle: {
                        // areaColor: '#101f32',
                        // color: '#FFF',
                        // borderColor: '#43d0d6',
                        // borderWidth: 0.8,
                        // shadowBlur: 10,
                        // shadowColor: 'rgba(0, 0, 0, 0.5)',
                        // opacity: 0.8,

                        // },
                        emphasis: {
                            // disabled: true,
                            // focus: 'self'
                            // areaColor: '#069'
                            label: {
                                show: false
                            },
                            itemStyle: {
                                areaColor: '#FF6F91'
                            }
                        },
                        // select: ,
                        // blur: ,
                        // zlevel: ,
                        // z: 
                        // left:
                        // top:
                        // right:
                        // bottom
                        // layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
                        // layoutSize: '100%',
                        // rigions:
                        // silent:
                        tooltip: {
                            show: true,
                            formatter: (params) => {
                                const data = params.data;
                                return `${data.name} ${data.cluster}`
                            }
                            // trigger: 'item',
                            // showDelay: 0,
                            // transitionDuration: 0.2
                        },
                    },
                    visualMap: {
                        type: 'piecewise',
                        pieces: [
                            { value: 1, label: '城市功能混合区', color: '#B0A8B9' },
                            { value: 3, label: '主要的工作区', color: '#FFC2A8' },
                            { value: 4, label: '成熟的居住区', color: '#00C9A7' },
                            { value: 5, label: '主要高校及其周边区域', color: '#4E8397' },
                            { value: 6, label: '休闲游憩区', color: '#4DBB76' },
                            { value: 7, label: '城市主要商业区', color: '#C34A36' },
                            { value: 10, label: '新兴的城市混合区', color: '#D5CABD' },
                            { value: 12, label: '成熟的小型商业区', color: '#FF8066' }
                        ],
                        showLabel: true,
                        left: 'right',
                        // calculable: true,
                        // itemHeight: 100,
                        textStyle: {
                            color: '#FFF'
                        },
                        seriesIndex: 0
                    },
                    series: [{
                        type: 'map',
                        name: '常住人口',
                        geoIndex: 0,
                        data: cluster,
                        selectedMode: false,
                    }]
                });
            }));
        }
        const hongshanCluster = () => {
            fetch(clusterHongshan).then(res => res.json().then(json => {
                echarts.registerMap('clusterHongshan', json);
                const features = json.features;
                const cluster = features.map((item) => { return { name: item.properties.SSSQ, value: item.properties.CLU_label, cluster: item.properties.CLUSTER } });
                myChart3.setOption({
                    title: {
                        text: '洪山区城市功能区分布',
                        textStyle: {
                            color: '#FFF',
                            // fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: 'serif',
                            fontSize: 22,
                            textShadowColor: '#000',
                            textShadowBlur: 10
                        },
                        left: 'center',

                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2
                    },
                    geo: {
                        // id: ,
                        // show: true,
                        map: 'clusterHongshan',
                        roam: true,
                        // projection: ,
                        // center: ,
                        // aspectScale: 1,
                        // boundingCoords: ,
                        // zoom: 1,
                        // scaleLimit: ,
                        // nameMap: ,
                        nameProperty: 'SSSQ',
                        // selectedMode: false,
                        // label: {
                        //     show: true,
                        //     position: 'right',
                        //     offset: [0, -10],
                        //     color: '#FFF',
                        //     fontSize: 20,
                        //     textBorderColor: 'black',
                        //     textBorderWidth: 2
                        // },
                        // itemStyle: {
                        // areaColor: '#101f32',
                        // color: '#FFF',
                        // borderColor: '#43d0d6',
                        // borderWidth: 0.8,
                        // shadowBlur: 10,
                        // shadowColor: 'rgba(0, 0, 0, 0.5)',
                        // opacity: 0.8,

                        // },
                        emphasis: {
                            // disabled: true,
                            // focus: 'self'
                            // areaColor: '#069'
                            label: {
                                show: false
                            },
                            itemStyle: {
                                areaColor: '#FF6F91'
                            }
                        },
                        // select: ,
                        // blur: ,
                        // zlevel: ,
                        // z: 
                        // left:
                        // top:
                        // right:
                        // bottom
                        layoutCenter: ['45%', '30%'], //设置后left/right/top/bottom等属性无效
                        layoutSize: '130%',
                        // rigions:
                        // silent:
                        tooltip: {
                            show: true,
                            formatter: (params) => {
                                const data = params.data;
                                return `${data.name} ${data.cluster}`
                            }
                            // trigger: 'item',
                            // showDelay: 0,
                            // transitionDuration: 0.2
                        },
                    },
                    visualMap: {
                        type: 'piecewise',
                        pieces: [
                            { value: 1, label: '城市功能混合区', color: '#B0A8B9' },
                            { value: 3, label: '主要的工作区', color: '#FFC2A8' },
                            { value: 4, label: '成熟的居住区', color: '#00C9A7' },
                            { value: 5, label: '主要高校及其周边区域', color: '#4E8397' },
                            { value: 6, label: '休闲游憩区', color: '#4DBB76' },
                            { value: 7, label: '城市主要商业区', color: '#C34A36' },
                            { value: 10, label: '新兴的城市混合区', color: '#D5CABD' },
                            { value: 12, label: '成熟的小型商业区', color: '#FF8066' }
                        ],
                        showLabel: true,
                        left: 'right',
                        // calculable: true,
                        // itemHeight: 100,
                        textStyle: {
                            color: '#FFF'
                        },
                        seriesIndex: 0
                    },
                    series: [{
                        type: 'map',
                        name: '常住人口',
                        geoIndex: 0,
                        data: cluster,
                        selectedMode: false,
                    }]
                });
            }));
        }
        fetch(wuhanJson).then(res => res.json().then(json => {
            echarts.registerMap('wuhan', json);
            const features = json.features;
            const population = features.map((item) => { return { name: item.properties.name, value: item.properties.population } });
            myChart3.setOption({
                title: {
                    text: '武汉市中心城区',
                    textStyle: {
                        color: '#FFF',
                        // fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'serif',
                        fontSize: 22,
                        textShadowColor: '#000',
                        textShadowBlur: 10
                    },
                    left: 'center',

                },
                tooltip: {
                    show: true,
                    // formatter: (params) => {
                    //     console.log(params);
                    // }
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2
                },
                geo: {
                    // id: ,
                    // show: true,
                    map: 'wuhan',
                    roam: true,
                    // projection: ,
                    // center: ,
                    // aspectScale: 1,
                    // boundingCoords: ,
                    // zoom: 1,
                    // scaleLimit: ,
                    // nameMap: ,
                    // nameProperty: 'population',
                    // selectedMode: false,
                    label: {
                        show: true,
                        position: 'right',
                        offset: [0, -10],
                        color: '#FFF',
                        fontSize: 20,
                        textBorderColor: 'black',
                        textBorderWidth: 2
                    },
                    // itemStyle: {
                    // areaColor: '#101f32',
                    // color: '#FFF',
                    // borderColor: '#43d0d6',
                    // borderWidth: 0.8,
                    // shadowBlur: 10,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    // opacity: 0.8,

                    // },
                    emphasis: {
                        // disabled: true,
                        // focus: 'self'
                        // areaColor: '#069'
                        label: {
                            show: false
                        },
                        itemStyle: {
                            areaColor: '#FF6F91'
                        }
                    },
                    // select: ,
                    // blur: ,
                    // zlevel: ,
                    // z: 
                    // left:
                    // top:
                    // right:
                    // bottom
                    layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
                    layoutSize: '100%',
                    // rigions:
                    // silent:
                    // tooltip: {
                    //     show: true,
                    //     formatter: (params) => {
                    //         console.log(params);
                    //     }
                    //     // trigger: 'item',
                    //     // showDelay: 0,
                    //     // transitionDuration: 0.2
                    // },
                },
                visualMap: {
                    left: 'right',
                    min: 400000,
                    max: 2000000,
                    calculable: true,
                    itemHeight: 100,
                    text: ['人口/人'],
                    textStyle: {
                        color: '#FFF'
                    },
                    seriesIndex: 0
                },
                series: [{
                    type: 'map',
                    name: '常住人口',
                    geoIndex: 0,
                    data: population,
                    selectedMode: false,
                }],
            });
            myChart3.on('click', 'series.map', function (params) {
                const name = params.data.name;
                if (name === '武昌区') {
                    myChart3.clear();
                    wuchangCluster();
                }
                if (name === '洪山区') {
                    myChart3.clear();
                    hongshanCluster();
                }
            });

        }));
    }

    const initPanel4 = () => {
        panel4.innerHTML =
            `<div class="swiper-container">` +
            `<img src="${bg1}" class="swiper active">` +
            `<img src="${bg2}" class="swiper">` +
            `<img src="${bg3}" class="swiper">` +
            `</div>`
        const bgs = panel4.querySelectorAll('img');
        let curIndex = 0;
        let prevIndex;
        setInterval(() => {
            curIndex++;
            prevIndex = curIndex - 1;
            if (curIndex > 2) {
                curIndex = 0;
                prevIndex = 2;
            }
            bgs[prevIndex].classList.remove('active');
            bgs[curIndex].classList.add('active');
        }, 3000)
    }

    const initPanel5 = () => {
        myChart5 = echarts.init(document.getElementById('panel5'));
        const option = {
            title: {
                left: 'center',
                text: '武汉市各区车辆平均行驶速度',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [34.03, 34.03, '江汉区'],
                    [37.78, 37.78, '武昌区'],
                    [41.85, 41.85, '江岸区'],
                    [41.24, 41.24, '硚口区'],
                    [43.44, 43.44, '洪山区'],
                    [42.28, 42.28, '江夏区'],
                    [46.2, 46.2, '汉阳区'],
                    [33.83, 33.83, '东西湖区'],
                    [46.93, 46.93, '蔡甸区'],
                    [52.28, 52.28, '黄陂区'],
                ]
            },
            grid: {
                containLabel: true,
                top: 30,
                bottom: 0,
                left: 0,
                right: 55
            },
            xAxis: { name: 'km/h' },
            yAxis: { type: 'category' },
            visualMap: {
                show: false,
                orient: 'horizontal',
                left: 'center',
                min: 33.83,
                max: 52.28,
                text: ['High Score', 'Low Score'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#FD665F', '#FFCE34', '#65B581']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: 'amount',
                        // Map the "product" column to Y axis
                        y: 'product'
                    }
                }
            ]
        };
        myChart5.setOption(option);
    }

    const initPanel6 = () => {
        myChart6 = echarts.init(document.getElementById('panel6'));
        const option = {
            title: {
                left: 'center',
                text: '武汉市主要POI数量',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: true },
                    data: ['体育休闲', '商务住宅', '医疗保健', '风景名胜']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '武昌',
                    type: 'bar',
                    barGap: 0,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [2351, 2965, 2812, 368]
                },
                {
                    name: '洪山',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [6261, 6656, 6469, 694]
                }
            ]
        };
        myChart6.setOption(option);
    }

    initPanel1();
    initPanel2();
    initPanel3();
    initPanel4();
    initPanel5();
    initPanel6();
}

const rainstorm = () => {
    reset();

    const initPanel1 = () => {
        panel1.innerHTML =
            `<h5 style="text-align: center;">暴雨洪涝灾情动态演化分析</h5>` +
            `<select class="form-select" id="select1" aria-label="Default select example">
                <option selected>城市降雨洪涝动态演化</option>
                <option value="5a120">5年一遇120分钟</option>
                <option value="5a150">5年一遇150分钟</option>
                <option value="5a180">5年一遇180分钟</option>
                <option value="10a120">10年一遇120分钟</option>
                <option value="10a150">10年一遇150分钟</option>
                <option value="10a180">10年一遇180分钟</option>
                <option value="20a120">20年一遇120分钟</option>
                <option value="20a150">20年一遇150分钟</option>
                <option value="20a180">20年一遇180分钟</option>
            </select>`+
            `<select class="form-select" id="select2" aria-label="Default select example">
                <option selected>交通设施淹没分析</option>
                <option value="bus">公交站点</option>
                <option value="subway">地铁站点</option>
                <option value="bike">公共自行车站点</option>
            </select>`+
            `<select class="form-select" id="select3" aria-label="Default select example">
                <option selected>公共设施淹没分析</option>
                <option value="hospital">医院</option>
                <option value="bank">银行</option>
                <option value="culture">科教文化</option>
                <option value="shop">购物中心</option>
                <option value="toilet">公共厕所</option>
                <option value="gym">体育场馆</option>
                <option value="scenery">风景名胜</option>
            </select>`+
            `<select class="form-select" id="select4" aria-label="Default select example">
                <option selected>建筑淹没分析</option>
                <option value="5a120">5年一遇120分钟</option>
                <option value="5a150">5年一遇150分钟</option>
                <option value="5a180">5年一遇180分钟</option>
                <option value="10a120">10年一遇120分钟</option>
                <option value="10a150">10年一遇150分钟</option>
                <option value="10a180">10年一遇180分钟</option>
                <option value="20a120">20年一遇120分钟</option>
                <option value="20a150">20年一遇150分钟</option>
                <option value="20a180">20年一遇180分钟</option>
            </select>`+
            `<select class="form-select" id="select5" aria-label="Default select example">
                <option selected>道路淹没分析</option>
                <option value="5a120">5年一遇120分钟</option>
                <option value="5a150">5年一遇150分钟</option>
                <option value="5a180">5年一遇180分钟</option>
                <option value="10a120">10年一遇120分钟</option>
                <option value="10a150">10年一遇150分钟</option>
                <option value="10a180">10年一遇180分钟</option>
                <option value="20a120">20年一遇120分钟</option>
                <option value="20a150">20年一遇150分钟</option>
                <option value="20a180">20年一遇180分钟</option>
            </select>`+
            `<div class="button" data-value="rainCluster" style="right: 1.5vw;top: 285px;width: 21vw;background-color: rgba(255,255,255,0.1);">功能区易涝区域分析</div>`;
        let loadedFeatures = {};
        const select1 = panel1.querySelector('#select1');
        const select2 = panel1.querySelector('#select2');
        const select3 = panel1.querySelector('#select3');
        const select4 = panel1.querySelector('#select4');
        const select5 = panel1.querySelector('#select5');
        const selects = [select1, select2, select3, select4, select5];
        select1.onchange = (e) => {
            selects.forEach((item) => { if (item !== select1) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case '5a120':
                    bo.loadGeoJson(rain5a120, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r5a120 = data);
                    break;
                case '5a150':
                    bo.loadGeoJson(rain5a150, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r5a150 = data);
                    break;
                case '5a180':
                    bo.loadGeoJson(rain5a180, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r5a180 = data);
                    break;
                case '10a120':
                    bo.loadGeoJson(rain10a120, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r10a120 = data);
                    break;
                case '10a150':
                    bo.loadGeoJson(rain10a150, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r10a150 = data);
                    break;
                case '10a180':
                    bo.loadGeoJson(rain10a180, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r10a180 = data);
                    break;
                case '20a120':
                    bo.loadGeoJson(rain20a120, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r20a120 = data);
                    break;
                case '20a150':
                    bo.loadGeoJson(rain20a150, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r20a150 = data);
                    break;
                case '20a180':
                    bo.loadGeoJson(rain20a180, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)', strokeColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.r20a180 = data);
                    break;
            }
        };
        select2.onchange = (e) => {
            selects.forEach((item) => { if (item !== select2) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'bus':
                    bo.loadGeoJson(busstation_wchs, undefined, undefined, { imageSrc: busIcon, imageScale: 0.3 }).then((data) => loadedFeatures.busstation_wchs = data);
                    break;
                case 'subway':
                    bo.loadGeoJson(subway_wchs, undefined, undefined, { imageSrc: subwayIcon, imageScale: 0.3 }).then((data) => loadedFeatures.subway_wchs = data);
                    break;
                case 'bike':
                    bo.loadGeoJson(pubicycle_wchs, undefined, undefined, { imageSrc: bikeIcon, imageScale: 0.3 }).then((data) => loadedFeatures.pubicycle_wchs = data);
                    break;
            }
        };
        select3.onchange = (e) => {
            selects.forEach((item) => { if (item !== select3) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'hospital':
                    bo.loadGeoJson(hospital_wchs, undefined, undefined, { imageSrc: hospital1, imageScale: 2 }).then((data) => loadedFeatures.hospital_wchs = data);
                    break;
                case 'bank':
                    bo.loadGeoJson(bank_wchs, undefined, undefined, { imageSrc: bankIcon, imageScale: 0.3 }).then((data) => loadedFeatures.bank_wchs = data);
                    break;
                case 'culture':
                    bo.loadGeoJson(culture_wchs, undefined, undefined, { imageSrc: cultureIcon, imageScale: 0.3 }).then((data) => loadedFeatures.culture_wchs = data);
                    break;
                case 'scenery':
                    bo.loadGeoJson(scenery_wchs, undefined, undefined, { imageSrc: sceneryIcon, imageScale: 0.3 }).then((data) => loadedFeatures.scenery_wchs = data);
                    break;
                case 'gym':
                    bo.loadGeoJson(gym_wchs, undefined, undefined, { imageSrc: gymIcon, imageScale: 0.3 }).then((data) => loadedFeatures.gym_wchs = data);
                    break;
                case 'shop':
                    bo.loadGeoJson(shop_wchs, undefined, undefined, { imageSrc: shopIcon, imageScale: 0.3 }).then((data) => loadedFeatures.shop_wchs = data);
                    break;
                case 'toilet':
                    bo.loadGeoJson(toilet_wchs, undefined, undefined, { imageSrc: toiletIcon, imageScale: 0.3 }).then((data) => loadedFeatures.toilet_wchs = data);
                    break;
            }
        };
        select4.onchange = (e) => {
            selects.forEach((item) => { if (item !== select4) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case '5a120':
                    bo.loadGeoJson(hswc_buildings_5a120_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_5a120_flood_nopro = data);
                    break;
                case '5a150':
                    bo.loadGeoJson(hswc_buildings_5a150_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_5a150_flood_nopro = data);
                    break;
                case '5a180':
                    bo.loadGeoJson(hswc_buildings_5a180_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_5a180_flood_nopro = data);
                    break;
                case '10a120':
                    bo.loadGeoJson(hswc_buildings_10a120_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_10a120_flood_nopro = data);
                    break;
                case '10a150':
                    bo.loadGeoJson(hswc_buildings_10a150_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_10a150_flood_nopro = data);
                    break;
                case '10a180':
                    bo.loadGeoJson(hswc_buildings_10a180_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_10a180_flood_nopro = data);
                    break;
                case '20a120':
                    bo.loadGeoJson(hswc_buildings_20a120_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_20a120_flood_nopro = data);
                    break;
                case '20a150':
                    bo.loadGeoJson(hswc_buildings_20a150_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_20a150_flood_nopro = data);
                    break;
                case '20a180':
                    bo.loadGeoJson(hswc_buildings_20a180_flood_nopro, undefined, undefined, { fillColor: 'rgba(0, 0, 255, 0.9)' }).then((data) => loadedFeatures.hswc_buildings_20a180_flood_nopro = data);
                    break;

            }
        };
        select5.onchange = (e) => {
            selects.forEach((item) => { if (item !== select5) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case '5a120':
                    bo.loadGeoJson(wc_hs_road_5a120_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a120_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_5a120_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a120_unflood_nopro = data);
                    break;
                case '5a150':
                    bo.loadGeoJson(wc_hs_road_5a150_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a150_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_5a150_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a150_unflood_nopro = data);
                    break;
                case '5a180':
                    bo.loadGeoJson(wc_hs_road_5a180_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a180_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_5a180_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_5a180_unflood_nopro = data);
                    break;
                case '10a120':
                    bo.loadGeoJson(wc_hs_road_10a120_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a120_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_10a120_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a120_unflood_nopro = data);
                    break;
                case '10a150':
                    bo.loadGeoJson(wc_hs_road_10a150_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a150_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_10a150_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a150_unflood_nopro = data);
                    break;
                case '10a180':
                    bo.loadGeoJson(wc_hs_road_10a180_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a180_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_10a180_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_10a180_unflood_nopro = data);
                    break;
                case '20a120':
                    bo.loadGeoJson(wc_hs_road_20a120_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a120_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_20a120_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a120_unflood_nopro = data);
                    break;
                case '20a150':
                    bo.loadGeoJson(wc_hs_road_20a150_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a150_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_20a150_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a150_unflood_nopro = data);
                    break;
                case '20a180':
                    bo.loadGeoJson(wc_hs_road_20a180_flood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a180_flood_nopro = data);
                    bo.loadGeoJson(wc_hs_road_20a180_unflood_nopro, undefined, undefined, {
                        strokeColor: 'rgba(0, 255, 0, 0.8)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.wc_hs_road_20a180_unflood_nopro = data);
                    break;
            }
        };
        const styleRainCluster = {
            mode: 'type',
            prop: 'CLUSTER',
            fillStyle: {
                fillColorType: {
                    '成熟的居住区': 'rgba(0, 201, 167, 0.9)',
                    '成熟的小型商业区': 'rgba(255, 128, 102, 0.9)',
                    '城市功能混合区': 'rgba(176, 168, 185, 0.9)',
                    '城市主要商业区': 'rgba(195, 74, 54, 0.9)',
                    '新兴的成熟混合区': 'rgba(213, 202, 255, 0.9)',
                    '休闲游憩区': 'rgba(77, 128, 118, 0.9)',
                    '主要的工作区': 'rgba(0, 194, 168, 0.9)',
                    '主要高校及其周边区域': 'rgba(78, 131, 151, 0.9)',
                }
            }
        };
        panel1.onclick = (e) => {
            const value = e.target.dataset.value;
            if (value) {
                for (const i in loadedFeatures) {
                    if (loadedFeatures[i]) {
                        bo.removeLayer(loadedFeatures[i]);
                        loadedFeatures[i] = '';
                    }
                }
            }
            switch (value) {
                case 'rainCluster':
                    bo.loadGeoJson(rainCluster, undefined, undefined, styleRainCluster).then((data) => loadedFeatures.rainCluster = data);
                    break;
            }
        };
    }

    const initPanel2 = () => {
        myChart2 = echarts.init(document.getElementById('panel2'));
        const date = [];
        for (let i = 1951; i < 2011; i++) date.push(i);
        const data = [
            1305.1, 1055.5, 1135.2, 2057.9, 1222, 993.6, 1346.6, 1435.3, 1577.2, 1043.3, 1062.6, 1648.9, 1129.2, 1375.8, 927.3, 730.4, 1181.4, 992.5, 1744.8,
            1237.8, 801.7, 1079.5, 1232.3, 966.3, 1322.5, 892.4, 1197.4, 814.2, 1003, 1623.6, 1154, 1632.4, 1894.9, 1209, 1029.7, 1050, 1449.4, 1332.3, 1654.9, 1355,
            1795.2, 1116.4, 1584.6, 1045.5, 1296.3, 1319.5, 946.6, 1729.2, 1380.6, 1179.8, 899.8, 1516.1, 1386.1, 1572.2, 1116.6, 1047.1, 1023.2, 1266.8, 1158, 1337.9
        ];
        const option = {
            animationDuration: 10000,
            tooltip: {
                trigger: 'axis',
                position: ['17%', 30]
            },
            title: {
                left: 'center',
                text: '武汉市历史年降雨量变化',
                textStyle: {
                    color: '#FFF'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                max: 2500,
                axisLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '年降雨量(毫米)',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }
                        ])
                    },

                    data: data
                }
            ],
            grid: {
                right: 10,
                left: 40,
                bottom: 30,
                top: 40
            },
        };
        myChart2.setOption(option);
    }

    const initPanel3 = () => {
        bo = new BotOl('panel3');
        bo.setCenter([114.359424, 30.536525], 15);
    }

    const initPanel4 = () => {
        const neiRong = `<br/><br/><br/><h1 style="text-align: center;">要素信息面板</h1>`;
        panel4.innerHTML = neiRong;
        const _showInfo = (info, infoEl) => {
            if (info === '') {
                // infoEl.innerHTML = neiRong;
                return;
            }
            const infos = info.split(';').join('<br/>');
            infoEl.innerHTML = infos;
        }
        bo.getInfo(['name', 'dz', 'mc', 'CLUSTER', 'FloodArea5', 'FloodPer5a', 'Flood5_150', 'Pee5_150', 'MJ',
            'AREA5_180', 'PER5_180', 'A10_120', 'P10_120', 'AREA10_150', 'PER10_150',
            'AREA10_180', 'PER10_180', 'AREA20_120', 'PER20_120', 'AREA20_150', 'PER20_150', 'AREA20_180', 'PER20_180',
            "NAME", "F5a120", "F5a150", "F5a180", "F10a120", "F10a150", "F10a180", "F20a120", "F20a150", "F20a180"
        ], (info) => _showInfo(info, panel4), {
            'name': '名称',
            'NAME': '名称',
            'F5a120': '5年一遇120分钟',
            'F5a150': '5年一遇150分钟',
            'F5a180': '5年一遇180分钟',
            'F10a120': '10年一遇120分钟',
            'F10a150': '10年一遇150分钟',
            'F10a180': '10年一遇180分钟',
            'F20a120': '20年一遇120分钟',
            'F20a150': '20年一遇150分钟',
            'F20a180': '20年一遇180分钟',
            'CLUSTER': '功能区',
            'FloodArea5': '5年120分钟淹没面积(平方米)',
            'FloodPer5a': '5年120分钟淹没面积(%)',
            'Flood5_150': '5年150分钟淹没面积(平方米)',
            'Pee5_150': '5年150分钟淹没面积(%)',
            'AREA5_180': '5年180分钟淹没面积(平方米)',
            'PER5_180': '5年180分钟淹没面积(%)',
            'A10_120': '10年120分钟淹没面积(平方米)',
            'P10_120': '10年120分钟淹没面积(%)',
            'AREA10_150': '10年150分钟淹没面积(平方米)',
            'PER10_150': '10年150分钟淹没面积(%)',
            'AREA10_180': '10年180分钟淹没面积(平方米)',
            'PER10_180': '10年180分钟淹没面积(%)',
            'AREA20_120': '20年120分钟淹没面积(平方米)',
            'PER20_120': '20年120分钟淹没面积(%)',
            'AREA20_150': '20年150分钟淹没面积(平方米)',
            'PER20_150': '20年150分钟淹没面积(%)',
            'AREA20_180': '20年180分钟淹没面积(平方米)',
            'PER20_180': '20年180分钟淹没面积(%)',
            'MJ': '总面积(平方米)'
        });
    }

    const initPanel5 = () => {
        myChart5 = echarts.init(document.getElementById('panel5'));
        const option = {
            animationDuration: 10000,
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                left: 'center',
                text: '暴雨内涝动态淹没面积',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // legend: {
            //     data: ['5年一遇(平方千米)', '10年一遇(平方千米)', '20年一遇(平方千米)']
            // },
            grid: {
                left: '0',
                right: '25',
                bottom: '0',
                top: '30',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0', '120分钟', '150分钟', '180分钟']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '5年一遇(平方千米)',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 3.949041, 4.268109, 4.656027]
                },
                {
                    name: '10年一遇(平方千米)',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(55, 162, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 15.119778, 19.081938, 19.822851]
                },
                {
                    name: '20年一遇(平方千米)',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 0, 135)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 33.319836, 41.137740, 46.318681]
                },
            ]
        };

        myChart5.setOption(option);
    }

    const initPanel6 = () => {
        myChart6 = echarts.init(document.getElementById('panel6'));
        const option = {
            animationDuration: 10000,
            tooltip: {
                trigger: 'axis',
                position: ['17%', 30]
            },
            title: {
                left: 'center',
                text: '城市暴雨情景设计降雨量',
                textStyle: {
                    color: '#FFF'
                }
            },
            dataset: {
                source: [
                    ['rain', 'type'],
                    [220.3, '100年'],
                    [173, '50年'],
                    [159, '30年'],
                    [147.9, '20年'],
                    [128.9, '10年'],
                    [89, '5年'],
                    [54.8, '1年'],
                ]
            },
            grid: {
                // containLabel: true,
                top: 30,
                bottom: 20,
                left: 40,
                right: 45
            },
            xAxis: {
                name: ' 降雨\n(mm)',
            },
            yAxis: { type: 'category' },
            visualMap: {
                show: false,
                orient: 'horizontal',
                left: 'center',
                min: 50,
                max: 250,
                text: ['', '降雨量'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#008E9B', '#2C73D2', '#845EC2']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        x: 'rain',
                        y: 'type'
                    }
                }
            ]
        };
        myChart6.setOption(option);
    }

    initPanel1();
    initPanel2();
    initPanel3();
    initPanel4();
    initPanel5();
    initPanel6();
}

const demand = () => {
    reset();

    const initPanel1 = () => {
        panel1.innerHTML =
            `<h5 style="text-align: center;">危险性与应急服务需求分析</h5>` +
            `<select class="form-select" id="select1" aria-label="Default select example">
                <option selected>承灾体危险性分析</option>
                <option value="school5a">学校(5年一遇暴雨)</option>
                <option value="school10a">学校(10年一遇暴雨)</option>
                <option value="school20a">学校(20年一遇暴雨)</option>
                <option value="bus5a">公交车站(5年一遇暴雨)</option>
                <option value="bus10a">公交车站(10年一遇暴雨)</option>
                <option value="bus20a">公交车站(20年一遇暴雨)</option>
            </select>`+
            `<select class="form-select" id="select2" aria-label="Default select example">
                <option selected>抗灾体应急能力需求分析</option>
                <option value="hospital5a">医院(5年一遇暴雨)</option>
                <option value="hospital10a">医院(10年一遇暴雨)</option>
                <option value="hospital20a">医院(20年一遇暴雨)</option>
                <option value="gov5a">政府(5年一遇暴雨)</option>
                <option value="gov10a">政府(10年一遇暴雨)</option>
                <option value="gov20a">政府(20年一遇暴雨)</option>
            </select>`+
            `<div class="button" data-value="cuiruo" style="left: 1vw;width: 21vw;top: 150px;background-color: rgba(255,255,255,0.1);">孕灾环境脆弱性分析</div>`;
        // `<div class="button" data-value="rainCluster" style="right: 1.5vw;top: 200px;width: 21vw;">功能区易涝区域分析</div>`;
        let loadedFeatures = {};
        const select1 = panel1.querySelector('#select1');
        const select2 = panel1.querySelector('#select2');
        const selects = [select1, select2];

        const stylesSchool5a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-26': 'rgba(215, 215, 0, 0.7)',
                    '26-87': 'rgba(215, 150, 0, 0.7)',
                    '87-179': 'rgba(255, 130, 0, 0.7)',
                    '179-325': 'rgba(255, 70, 0, 0.7)',
                    '325-1549': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesSchool10a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-91': 'rgba(215, 215, 0, 0.7)',
                    '91-264': 'rgba(215, 150, 0, 0.7)',
                    '264-533': 'rgba(255, 130, 0, 0.7)',
                    '533-1075': 'rgba(255, 70, 0, 0.7)',
                    '1075-12741': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesSchool20a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-206': 'rgba(215, 215, 0, 0.7)',
                    '206-584': 'rgba(215, 150, 0, 0.7)',
                    '584-1278': 'rgba(255, 130, 0, 0.7)',
                    '1278-2637': 'rgba(255, 70, 0, 0.7)',
                    '2637-16524': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesBusstation5a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-18': 'rgba(215, 215, 0, 0.7)',
                    '18-60': 'rgba(215, 150, 0, 0.7)',
                    '60-125': 'rgba(255, 130, 0, 0.7)',
                    '125-222': 'rgba(255, 70, 0, 0.7)',
                    '222-1431': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesBusstation10a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-64': 'rgba(215, 215, 0, 0.7)',
                    '64-207': 'rgba(215, 150, 0, 0.7)',
                    '207-457': 'rgba(255, 130, 0, 0.7)',
                    '457-921': 'rgba(255, 70, 0, 0.7)',
                    '921-12085': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesBusstation20a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-138': 'rgba(215, 215, 0, 0.7)',
                    '138-434': 'rgba(215, 150, 0, 0.7)',
                    '434-927': 'rgba(255, 130, 0, 0.7)',
                    '927-1882': 'rgba(255, 70, 0, 0.7)',
                    '1882-14451': 'rgba(255, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };

        const stylesGov5a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-36': 'rgba(0, 215, 215, 0.7)',
                    '36-124': 'rgba(0, 150, 215, 0.7)',
                    '124-288': 'rgba(0, 130, 255, 0.7)',
                    '288-613': 'rgba(0, 70, 255, 0.7)',
                    '613-11431': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesGov10a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-195': 'rgba(0, 215, 215, 0.7)',
                    '195-581': 'rgba(0, 150, 215, 0.7)',
                    '581-1202': 'rgba(0, 130, 255, 0.7)',
                    '1202-2337': 'rgba(0, 70, 255, 0.7)',
                    '2337-14049': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesGov20a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-434': 'rgba(0, 215, 215, 0.7)',
                    '434-1293': 'rgba(0, 150, 215, 0.7)',
                    '1293-3012': 'rgba(0, 130, 255, 0.7)',
                    '3012-6022': 'rgba(0, 70, 255, 0.7)',
                    '6022-111224': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesHospital5a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-32': 'rgba(0, 215, 215, 0.7)',
                    '32-111': 'rgba(0, 150, 215, 0.7)',
                    '111-242': 'rgba(0, 130, 255, 0.7)',
                    '242-594': 'rgba(0, 70, 255, 0.7)',
                    '594-11069': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesHospital10a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-133': 'rgba(0, 215, 215, 0.7)',
                    '133-395': 'rgba(0, 150, 215, 0.7)',
                    '395-886': 'rgba(0, 130, 255, 0.7)',
                    '886-1768': 'rgba(0, 70, 255, 0.7)',
                    '1768-13464': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesHospital20a = {
            mode: 'range',
            prop: 'Join_Count',
            fillStyle: {
                fillColorType: {
                    '0-320': 'rgba(0, 215, 215, 0.7)',
                    '320-984': 'rgba(0, 150, 215, 0.7)',
                    '984-2337': 'rgba(0, 130, 255, 0.7)',
                    '2337-5054': 'rgba(0, 70, 255, 0.7)',
                    '5054-111215': 'rgba(0, 0, 255, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };

        select1.onchange = (e) => {
            selects.forEach((item) => { if (item !== select1) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'school5a':
                    bo.loadGeoJson(school5a, undefined, undefined, stylesSchool5a).then((data) => loadedFeatures.school5a = data);
                    // bo.loadGeoJson(school2, undefined, undefined, { imageSrc: schoolIcon, imageScale: 0.1 }, 10).then((data) => loadedFeatures.school2 = data);
                    break;
                case 'school10a':
                    bo.loadGeoJson(school10a, undefined, undefined, stylesSchool10a).then((data) => loadedFeatures.school10a = data);
                    // bo.loadGeoJson(school2, undefined, undefined, { imageSrc: schoolIcon, imageScale: 0.1 }, 10).then((data) => loadedFeatures.school2 = data);
                    break;
                case 'school20a':
                    bo.loadGeoJson(school20a, undefined, undefined, stylesSchool20a).then((data) => loadedFeatures.school20a = data);
                    // bo.loadGeoJson(school2, undefined, undefined, { imageSrc: schoolIcon, imageScale: 0.1 }, 10).then((data) => loadedFeatures.school2 = data);
                    break;
                case 'bus5a':
                    bo.loadGeoJson(busstation5a, undefined, undefined, stylesBusstation5a).then((data) => loadedFeatures.busstation5a = data);
                    // bo.loadGeoJson(busstation2, undefined, undefined, { imageSrc: busIcon, imageScale: 0. }, 10).then((data) => loadedFeatures.busstation2 = data);
                    break;
                case 'bus10a':
                    bo.loadGeoJson(busstation10a, undefined, undefined, stylesBusstation10a).then((data) => loadedFeatures.busstation10a = data);
                    // bo.loadGeoJson(busstation2, undefined, undefined, { imageSrc: busIcon, imageScale: 0. }, 10).then((data) => loadedFeatures.busstation2 = data);
                    break;
                case 'bus20a':
                    bo.loadGeoJson(busstation20a, undefined, undefined, stylesBusstation20a).then((data) => loadedFeatures.busstation20a = data);
                    // bo.loadGeoJson(busstation2, undefined, undefined, { imageSrc: busIcon, imageScale: 0.1 }, 10).then((data) => loadedFeatures.busstation2 = data);
                    break;
            }
        };
        select2.onchange = (e) => {
            selects.forEach((item) => { if (item !== select2) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'gov5a':
                    bo.loadGeoJson(gov5a, undefined, undefined, stylesGov5a).then((data) => loadedFeatures.gov5a = data);
                    // bo.loadGeoJson(government2, undefined, undefined, { imageSrc: govIcon, imageScale: 0.15 }, 10).then((data) => loadedFeatures.government2 = data);
                    break;
                case 'gov10a':
                    bo.loadGeoJson(gov10a, undefined, undefined, stylesGov10a).then((data) => loadedFeatures.gov10a = data);
                    // bo.loadGeoJson(government2, undefined, undefined, { imageSrc: govIcon, imageScale: 0.15 }, 10).then((data) => loadedFeatures.government2 = data);
                    break;
                case 'gov20a':
                    bo.loadGeoJson(gov20a, undefined, undefined, stylesGov20a).then((data) => loadedFeatures.gov20a = data);
                    // bo.loadGeoJson(government2, undefined, undefined, { imageSrc: govIcon, imageScale: 0.15 }, 10).then((data) => loadedFeatures.government2 = data);
                    break;
                case 'hospital5a':
                    bo.loadGeoJson(hospital5a, undefined, undefined, stylesHospital5a).then((data) => loadedFeatures.hospital5a = data);
                    // bo.loadGeoJson(hospital2, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital2 = data);
                    break;
                case 'hospital10a':
                    bo.loadGeoJson(hospital10a, undefined, undefined, stylesHospital10a).then((data) => loadedFeatures.hospital10a = data);
                    // bo.loadGeoJson(hospital2, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital2 = data);
                    break;
                case 'hospital20a':
                    bo.loadGeoJson(hospital20a, undefined, undefined, stylesHospital20a).then((data) => loadedFeatures.hospital20a = data);
                    // bo.loadGeoJson(hospital2, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital2 = data);
                    break;
            }
        };

        const stylesCuiruoxing = {
            mode: 'range',
            prop: 'gridcode',
            fillStyle: {
                fillColorType: {
                    '0-9': 'rgba(0, 143, 122, 0.5)',
                    '9-13': 'rgba(44, 115, 210, 0.5)',
                    '13-18': 'rgba(255, 150, 113, 0.5)',
                    '18-23': 'rgba(195, 74, 54, 0.5)',
                    '23-80': 'rgba(132, 94, 194, 0.5)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        panel1.onclick = (e) => {
            const value = e.target.dataset.value;
            if (value) {
                for (const i in loadedFeatures) {
                    if (loadedFeatures[i]) {
                        bo.removeLayer(loadedFeatures[i]);
                        loadedFeatures[i] = '';
                    }
                }
            }
            switch (value) {
                case 'cuiruo':
                    bo.loadGeoJson(cuiruoxing, undefined, undefined, stylesCuiruoxing).then((data) => loadedFeatures.cuiruoxing = data);
                    break;
            }
        };
    }

    // const initPanel11 = () => {
    //     let xuqiuObj = {};
    //     panel1.innerHTML =
    //         `<div class="button" data-xuqiu="cuiruo" id="cluster" style="left: 1vw;width: 21vw;">孕灾环境脆弱性</div>` +
    //         `<div class="button" data-xuqiu="school5a" style="left: 1vw;top: 65px">school5a</div>` +
    //         `<div class="button" data-xuqiu="school10a" style="right: 1.5vw;top: 65px">school10a</div>` +
    //         `<div class="button" data-xuqiu="school20a" id="cluster" style="left: 1vw;top: 110px">school20a</div>` +
    //         `<div class="button" data-xuqiu="busstation5a" id="rain" style="right: 1.5vw;top: 110px">busstation5a</div>` +
    //         `<div class="button" data-xuqiu="busstation10a" style="left: 1vw;top: 155px">busstation10a</div>` +
    //         `<div class="button" data-xuqiu="busstation20a" style="right: 1.5vw;top: 155px">busstation20a</div>` +

    //         `<div class="button" data-xuqiu="gov5a" style="left: 1vw;top: 200px">gov5a</div>` +
    //         `<div class="button" data-xuqiu="gov10a" style="right: 1.5vw;top: 200px">gov10a</div>` +
    //         `<div class="button" data-xuqiu="gov20a" id="cluster" style="left: 1vw;top: 245px">gov20a</div>` +
    //         `<div class="button" data-xuqiu="hospital5a" id="rain" style="right: 1.5vw;top: 245px">hospital5a</div>` +
    //         `<div class="button" data-xuqiu="hospital10a" style="left: 1vw;top: 290px">hospital10a</div>` +
    //         `<div class="button" data-xuqiu="hospital20a" style="right: 1.5vw;top: 290px">hospital20a</div>`;
    //     const stylesCuiruoxing = {
    //         mode: 'range',
    //         prop: 'gridcode',
    //         fillStyle: {
    //             fillColorType: {
    //                 '0-9': 'rgba(0, 143, 122, 0.5)',
    //                 '9-13': 'rgba(44, 115, 210, 0.5)',
    //                 '13-18': 'rgba(255, 150, 113, 0.5)',
    //                 '18-23': 'rgba(195, 74, 54, 0.5)',
    //                 '23-30': 'rgba(132, 94, 194, 0.5)',
    //             }
    //         },
    //         strokeColor: 'rgba(255, 255, 255, 0.8)',
    //         strokeWidth: 1
    //     };

    //     // const stylesSchool5a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-26': 'rgba(0, 143, 122, 0.5)',
    //     //             '26-87': 'rgba(44, 115, 210, 0.5)',
    //     //             '87-179': 'rgba(255, 150, 113, 0.5)',
    //     //             '179-325': 'rgba(195, 74, 54, 0.5)',
    //     //             '325-548': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesSchool10a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-91': 'rgba(0, 143, 122, 0.5)',
    //     //             '91-264': 'rgba(44, 115, 210, 0.5)',
    //     //             '264-533': 'rgba(255, 150, 113, 0.5)',
    //     //             '533-1075': 'rgba(195, 74, 54, 0.5)',
    //     //             '1075-2741': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesSchool20a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-206': 'rgba(0, 143, 122, 0.5)',
    //     //             '206-584': 'rgba(44, 115, 210, 0.5)',
    //     //             '584-1278': 'rgba(255, 150, 113, 0.5)',
    //     //             '1278-2637': 'rgba(195, 74, 54, 0.5)',
    //     //             '2637-6524': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesBusstation5a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-18': 'rgba(0, 143, 122, 0.5)',
    //     //             '18-60': 'rgba(44, 115, 210, 0.5)',
    //     //             '60-125': 'rgba(255, 150, 113, 0.5)',
    //     //             '125-222': 'rgba(195, 74, 54, 0.5)',
    //     //             '222-431': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesBusstation10a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-64': 'rgba(0, 143, 122, 0.5)',
    //     //             '64-207': 'rgba(44, 115, 210, 0.5)',
    //     //             '207-457': 'rgba(255, 150, 113, 0.5)',
    //     //             '457-921': 'rgba(195, 74, 54, 0.5)',
    //     //             '921-2085': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesBusstation20a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-138': 'rgba(0, 143, 122, 0.5)',
    //     //             '138-434': 'rgba(44, 115, 210, 0.5)',
    //     //             '434-927': 'rgba(255, 150, 113, 0.5)',
    //     //             '927-1882': 'rgba(195, 74, 54, 0.5)',
    //     //             '1882-4451': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };

    //     // const stylesGov5a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-36': 'rgba(0, 143, 122, 0.5)',
    //     //             '36-124': 'rgba(44, 115, 210, 0.5)',
    //     //             '124-288': 'rgba(255, 150, 113, 0.5)',
    //     //             '288-613': 'rgba(195, 74, 54, 0.5)',
    //     //             '613-1430': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesGov10a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-195': 'rgba(0, 143, 122, 0.5)',
    //     //             '195-581': 'rgba(44, 115, 210, 0.5)',
    //     //             '581-1202': 'rgba(255, 150, 113, 0.5)',
    //     //             '1202-2337': 'rgba(195, 74, 54, 0.5)',
    //     //             '2337-4049': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesGov20a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-434': 'rgba(0, 143, 122, 0.5)',
    //     //             '434-1293': 'rgba(44, 115, 210, 0.5)',
    //     //             '1293-3012': 'rgba(255, 150, 113, 0.5)',
    //     //             '3012-6022': 'rgba(195, 74, 54, 0.5)',
    //     //             '6022-11224': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesHospital5a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-32': 'rgba(0, 143, 122, 0.5)',
    //     //             '32-111': 'rgba(44, 115, 210, 0.5)',
    //     //             '111-242': 'rgba(255, 150, 113, 0.5)',
    //     //             '242-594': 'rgba(195, 74, 54, 0.5)',
    //     //             '594-1069': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesHospital10a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-133': 'rgba(0, 143, 122, 0.5)',
    //     //             '133-395': 'rgba(44, 115, 210, 0.5)',
    //     //             '395-886': 'rgba(255, 150, 113, 0.5)',
    //     //             '886-1768': 'rgba(195, 74, 54, 0.5)',
    //     //             '1768-3464': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };
    //     // const stylesHospital20a = {
    //     //     mode: 'range',
    //     //     prop: 'Join_Count',
    //     //     fillStyle: {
    //     //         fillColorType: {
    //     //             '0-320': 'rgba(0, 143, 122, 0.5)',
    //     //             '320-984': 'rgba(44, 115, 210, 0.5)',
    //     //             '984-2337': 'rgba(255, 150, 113, 0.5)',
    //     //             '2337-5054': 'rgba(195, 74, 54, 0.5)',
    //     //             '5054-11215': 'rgba(132, 94, 194, 0.5)',
    //     //         }
    //     //     },
    //     //     strokeColor: 'rgba(255, 255, 255, 0.8)',
    //     //     strokeWidth: 1
    //     // };

    //     panel1.onclick = (e) => {
    //         const xuqiu = e.target.dataset.xuqiu;
    //         if (xuqiu) {
    //             for (const i in xuqiuObj) {
    //                 if (xuqiuObj[i]) {
    //                     bo.removeLayer(xuqiuObj[i]);
    //                     xuqiuObj[i] = '';
    //                 }
    //             }
    //         }
    //         switch (xuqiu) {
    //             case 'cuiruo':
    //                 bo.loadGeoJson(cuiruoxing, undefined, undefined, stylesCuiruoxing).then((data) => xuqiuObj.cuiruoxing = data);
    //                 break;
    //             // case 'school5a':
    //             //     bo.loadGeoJson(school5a, undefined, undefined, stylesSchool5a).then((data) => xuqiuObj.school5a = data);
    //             //     break;
    //             // case 'school10a':
    //             //     bo.loadGeoJson(school10a, undefined, undefined, stylesSchool10a).then((data) => xuqiuObj.school10a = data);
    //             //     break;
    //             // case 'school20a':
    //             //     bo.loadGeoJson(school20a, undefined, undefined, stylesSchool20a).then((data) => xuqiuObj.school20a = data);
    //             //     break;
    //             // case 'busstation5a':
    //             //     bo.loadGeoJson(busstation5a, undefined, undefined, stylesBusstation5a).then((data) => xuqiuObj.busstation5a = data);
    //             //     break;
    //             // case 'busstation10a':
    //             //     bo.loadGeoJson(busstation10a, undefined, undefined, stylesBusstation10a).then((data) => xuqiuObj.busstation10a = data);
    //             //     break;
    //             // case 'busstation20a':
    //             //     bo.loadGeoJson(busstation20a, undefined, undefined, stylesBusstation20a).then((data) => xuqiuObj.busstation20a = data);
    //             //     break;

    //             // case 'gov5a':
    //             //     bo.loadGeoJson(gov5a, undefined, undefined, stylesGov5a).then((data) => xuqiuObj.gov5a = data);
    //             //     break;
    //             // case 'gov10a':
    //             //     bo.loadGeoJson(gov10a, undefined, undefined, stylesGov10a).then((data) => xuqiuObj.gov10a = data);
    //             //     break;
    //             // case 'gov20a':
    //             //     bo.loadGeoJson(gov20a, undefined, undefined, stylesGov20a).then((data) => xuqiuObj.gov20a = data);
    //             //     break;
    //             // case 'hospital5a':
    //             //     bo.loadGeoJson(hospital5a, undefined, undefined, stylesHospital5a).then((data) => xuqiuObj.hospital5a = data);
    //             //     break;
    //             // case 'hospital10a':
    //             //     bo.loadGeoJson(hospital10a, undefined, undefined, stylesHospital10a).then((data) => xuqiuObj.hospital10a = data);
    //             //     break;
    //             // case 'hospital20a':
    //             //     bo.loadGeoJson(hospital20a, undefined, undefined, stylesHospital20a).then((data) => xuqiuObj.hospital20a = data);
    //             //     break;
    //         }
    //     };
    // }

    const initPanel2 = () => {
        myChart2 = echarts.init(document.getElementById('panel2'));
        const option = {
            title: {
                left: 'center',
                text: '孕灾环境脆弱性风险等级占比',
                textStyle: {
                    color: '#FFF'
                }
            },
            // grid: {
            // right: 0,
            // left: 0,
            // bottom: '100%',
            // },
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     top: '5%',
            //     left: 'center'
            // },
            series: [
                {
                    name: '风险等级占比',
                    type: 'pie',
                    radius: '95%',
                    top: 30,
                    // radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        // show: false,
                        position: 'inside'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 39.38, name: '低脆弱性 %' },
                        { value: 18.77, name: '较低脆弱性 %' },
                        { value: 14.09, name: '中脆弱性 %' },
                        { value: 11.77, name: '较高脆弱性 %' },
                        { value: 15.96, name: '高脆弱性 %' }
                    ]
                }
            ]
        };

        myChart2.setOption(option);

    }

    const initPanel3 = () => {
        bo = new BotOl('panel3');
        bo.setCenter([114.359424, 30.536525], 15);
    }

    const initPanel4 = () => {
        const neiRong = `<br/><br/><br/><h1 style="text-align: center;">要素信息面板</h1>`;
        panel4.innerHTML = neiRong;
        const _showInfo = (info, infoEl) => {
            if (info === '') {
                // infoEl.innerHTML = neiRong;
                return;
            }
            const infos = info.split(';').join('<br/>');
            infoEl.innerHTML = infos;
        }
        bo.getInfo(['NAME', '危险性', '应急', '脆弱性', '名字'], (info) => _showInfo(info, panel4), { 'NAME': '名称', '应急': '应急能力需求', '名字': '名称' });
    }

    const initPanel5 = () => {
        if (myChart5) {
            myChart5.clear();
            myChart5.dispose();
        }
        myChart5 = echarts.init(document.getElementById('panel5'));
        var option;
        option = {
            title: {
                left: 'center',
                text: '公交车站承灾体危险性',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: true },
                    data: ['低危险性', '较低危险性', '中危险性', '较高危险性', '高危险性']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '5a 个',
                    type: 'bar',
                    barGap: 0,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3576, 309, 151, 61, 13]
                },
                {
                    name: '10a 个',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3021, 770, 241, 71, 7]
                },
                {
                    name: '20a 个',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [3016, 785, 199, 88, 22]
                }
            ]
        };
        myChart5.setOption(option);
    }

    const initPanel5Copy = () => {
        if (myChart5) {
            myChart5.clear();
            myChart5.dispose();
        }
        myChart5 = echarts.init(document.getElementById('panel5'));
        var option;
        option = {
            title: {
                left: 'center',
                text: '学校承灾体危险性',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['低危险性', '较低危险性', '中危险性', '较高危险性', '高危险性']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '5a 个',
                    type: 'bar',
                    barGap: 0,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [1622, 235, 96, 39, 10]
                },
                {
                    name: '10a 个',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [1234, 483, 196, 77, 12]
                },
                {
                    name: '20a 个',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [1288, 462, 159, 70, 23]
                }
            ]
        };
        myChart5.setOption(option);
    }

    const initPanel6 = () => {
        if (myChart6) {
            myChart6.clear();
            myChart6.dispose();
        }
        myChart6 = echarts.init(document.getElementById('panel6'));

        const option = {
            title: {
                left: 'center',
                text: '医院抗灾体应急能力需求',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '7%',
                bottom: '3%',
                top: 30,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['低需求', '较低需求', '中需求', '较高需求', '高需求']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '5a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [1288, 200, 84, 30, 2]
                },
                {
                    name: '10a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [1048, 404, 115, 30, 7]
                },
                {
                    name: '20a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [1120, 345, 102, 34, 3]
                }
            ]
        };
        myChart6.setOption(option);
    }

    const initPanel6Copy = () => {
        if (myChart6) {
            myChart6.clear();
            myChart6.dispose();
        }
        myChart6 = echarts.init(document.getElementById('panel6'));

        const option = {
            title: {
                left: 'center',
                text: '政府抗灾体应急能力需求',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '7%',
                bottom: '3%',
                top: 30,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['低需求', '较低需求', '中需求', '较高需求', '高需求']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '5a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [685, 140, 77, 26, 4]
                },
                {
                    name: '10a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [595, 215, 85, 28, 9]
                },
                {
                    name: '20a 个',
                    type: 'line',
                    // stack: 'Total',
                    data: [622, 186, 84, 30, 10]
                }
            ]
        };
        myChart6.setOption(option);
    }

    let isPanel56 = true;
    intervalId = setInterval(() => {
        if (isPanel56) {
            initPanel5Copy();
            initPanel6Copy();
            isPanel56 = false;
        }
        else {
            initPanel5();
            initPanel6();
            isPanel56 = true;
        }
    }, 5000)

    initPanel1();
    initPanel2();
    initPanel3();
    initPanel4();
    initPanel5();
    initPanel6();
}

const service = () => {
    reset();

    const initPanel1 = () => {
        panel1.innerHTML =
            // `<div class="button" data-xuqiu="cuiruo" id="cluster" style="left: 1vw;width: 21vw;">孕灾环境脆弱性</div>` +
            // `<div class="button" data-xuqiu="hospital_5a180_15" style="left: 1vw;top: 65px">医院5a18015</div>` +
            // `<div class="button" data-xuqiu="xf_5a180_15" style="right: 1.5vw;top: 65px">消防5a18015</div>` +
            // `<div class="button" data-xuqiu="hospital_noraml" id="cluster" style="left: 1vw;top: 110px">医院normal</div>` +
            // `<div class="button" data-xuqiu="xf_normal" id="rain" style="right: 1.5vw;top: 110px">消防normal</div>` +
            // `<div class="button" data-xuqiu="closest_hospital_5a180_15" style="left: 1vw;top: 155px">医院达5a180</div>` +
            // `<div class="button" data-xuqiu="closestFacility_hospital2yey_normal" style="right: 1.5vw;top: 155px">医院可达性</div>` +
            // `<div class="button" data-xuqiu="closestFacility_xiaofangl2yey_5a180_15" style="left: 1vw;top: 200px">消防达5a180</div>` +
            // `<div class="button" data-xuqiu="closestFacility_xiaofangl2yey_normal" style="right: 1.5vw;top: 200px">消防可达性</div>` +
            // `<div class="button" data-xuqiu="road_project_clip_check_flood_bridgeF_5a180_15_nopro" id="cluster" style="left: 1vw;top: 245px">淹没道路</div>` +
            `<h5 style="text-align: center;">城市应急服务分析</h5>` +
            `<select style="margin-top: 1vh;" class="form-select" id="select1" aria-label="Default select example">
                <option selected>服务区分析</option>
                <option value="hospital0">医院0-8分钟服务区</option>
                <option value="hospital8">医院8-12分钟服务区</option>
                <option value="hospital12">医院12分钟以上服务区</option>
                <option value="hospital05a180">医院0-8分钟服务区(暴雨)</option>
                <option value="hospital85a180">医院8-12分钟服务区(暴雨)</option>
                <option value="hospital125a180">医院12分钟以上服务区(暴雨)</option>
                <option value="fire0">消防0-5分钟服务区</option>
                <option value="fire5">消防5-10分钟服务区</option>
                <option value="fire10">消防10分钟以上服务区</option>
                <option value="fire05a180">消防0-5分钟服务区(暴雨)</option>
                <option value="fire55a180">消防5-10分钟服务区(暴雨)</option>
                <option value="fire105a180">消防10分钟以上服务区(暴雨)</option>
            </select>`+
            `<select class="form-select" id="select2" aria-label="Default select example">
                <option selected>可达性分析</option>
                <option value="hospital">幼儿园至医院</option>
                <option value="hospital5a180">幼儿园至医院(暴雨)</option>
                <option value="fire">消防至幼儿园</option>
                <option value="fire5a180">消防至幼儿园(暴雨)</option>
            </select>`;

        let loadedFeatures = {};
        const select1 = panel1.querySelector('#select1');
        const select2 = panel1.querySelector('#select2');
        const selects = [select1, select2];
        const stylesHospital = {
            mode: 'range',
            prop: 'FromBreak',
            fillStyle: {
                fillColorType: {
                    '-1-7': 'rgba(0, 215, 0, 0.7)',
                    '8-11': 'rgba(0, 0, 215, 0.7)',
                    '12-20': 'rgba(215, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        const stylesFire = {
            mode: 'range',
            prop: 'FromBreak',
            fillStyle: {
                fillColorType: {
                    '-1-4': 'rgba(0, 215, 0, 0.7)',
                    '5-9': 'rgba(0, 0, 215, 0.7)',
                    '10-20': 'rgba(215, 0, 0, 0.7)',
                }
            },
            strokeColor: 'rgba(255, 255, 255, 0)',
            strokeWidth: 1
        };
        select1.onchange = (e) => {
            selects.forEach((item) => { if (item !== select1) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'hospital0':
                    bo.loadGeoJson(ServiceArea_normal_hospital_dissolve_nopro_from0, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_normal_hospital_dissolve_nopro_from0 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital8':
                    bo.loadGeoJson(ServiceArea_normal_hospital_dissolve_nopro_from8, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_normal_hospital_dissolve_nopro_from8 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital12':
                    bo.loadGeoJson(ServiceArea_normal_hospital_dissolve_nopro_from12, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_normal_hospital_dissolve_nopro_from12 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital05a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_hospital_dissolve_nopro_from0, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_5a180_15_hospital_dissolve_nopro_from0 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital85a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_hospital_dissolve_nopro_from8, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_5a180_15_hospital_dissolve_nopro_from8 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital125a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_hospital_dissolve_nopro_from12, undefined, undefined, stylesHospital).then((data) => loadedFeatures.ServiceArea_5a180_15_hospital_dissolve_nopro_from12 = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }, 10).then((data) => loadedFeatures.hospital = data);
                    break;

                case 'fire0':
                    bo.loadGeoJson(ServiceArea_normal_xf1_dissolve_nopro_from0, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_normal_xf1_dissolve_nopro_from0 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;
                case 'fire5':
                    bo.loadGeoJson(ServiceArea_normal_xf1_dissolve_nopro_from5, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_normal_xf1_dissolve_nopro_from5 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;
                case 'fire10':
                    bo.loadGeoJson(ServiceArea_normal_xf1_dissolve_nopro_from10, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_normal_xf1_dissolve_nopro_from10 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;


                case 'fire05a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_xf1_dissolve_nopro_from0, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_5a180_15_xf1_dissolve_nopro_from0 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;
                case 'fire55a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_xf1_dissolve_nopro_from5, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_5a180_15_xf1_dissolve_nopro_from5 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;
                case 'fire105a180':
                    bo.loadGeoJson(ServiceArea_5a180_15_xf1_dissolve_nopro_from10, undefined, undefined, stylesFire).then((data) => loadedFeatures.ServiceArea_5a180_15_xf1_dissolve_nopro_from10 = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }, 10).then((data) => loadedFeatures.xiaofang = data);
                    break;
            }
        };
        select2.onchange = (e) => {
            selects.forEach((item) => { if (item !== select2) item.selectedIndex = 0 });
            for (const i in loadedFeatures) {
                if (loadedFeatures[i]) {
                    bo.removeLayer(loadedFeatures[i]);
                    loadedFeatures[i] = '';
                }
            }
            const value = e.target.value;
            switch (value) {
                case 'hospital':
                    bo.loadGeoJson(closestFacility_hospital2yey_normal, undefined, undefined, {
                        strokeColor: 'rgba(0, 0, 255, 1)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.closestFacility_hospital2yey_normal = data);
                    bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'hospital5a180':
                    bo.loadGeoJson(closestFacility_hospital2yey_5a180_15l, undefined, undefined, {
                        strokeColor: 'rgba(0, 0, 255, 1)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.closest_hospital_5a180_15 = data);
                    bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
                    bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }).then((data) => loadedFeatures.hospital = data);
                    break;
                case 'fire':
                    bo.loadGeoJson(closestFacility_xiaofangl2yey_normal, undefined, undefined, {
                        strokeColor: 'rgba(0, 0, 255, 1)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.closestFacility_xiaofangl2yey_normal = data);
                    bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }).then((data) => loadedFeatures.xiaofang = data);
                    break;
                case 'fire5a180':
                    bo.loadGeoJson(closestFacility_xiaofangl2yey_5a180_15, undefined, undefined, {
                        strokeColor: 'rgba(0, 0, 255, 1)',
                        strokeWidth: 3
                    }).then((data) => loadedFeatures.closestFacility_xiaofangl2yey_5a180_15 = data);
                    bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
                    bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }).then((data) => loadedFeatures.xiaofang = data);
                    break;
            }
        };
        // panel1.onclick = (e) => {
        //     const xuqiu = e.target.dataset.xuqiu;
        //     if (xuqiu) {
        //         for (const i in loadedFeatures) {
        //             if (loadedFeatures[i]) {
        //                 bo.removeLayer(loadedFeatures[i]);
        //                 loadedFeatures[i] = '';
        //             }
        //         }
        //     }
        //     switch (xuqiu) {
        //         // case 'hospital_5a180_15':
        //         //     bo.loadGeoJson(ServiceArea_5a180_15_hospital_nopro, undefined, undefined).then((data) => loadedFeatures.hospital_5a180_15 = data);
        //         //     break;
        //         // case 'xf_5a180_15':
        //         //     bo.loadGeoJson(ServiceArea_5a180_15_xf_nopro, undefined, undefined).then((data) => loadedFeatures.xf_5a180_15 = data);
        //         //     break;
        //         // case 'hospital_noraml':
        //         //     bo.loadGeoJson(ServiceArea_noraml_hospital1_nopro, undefined, undefined).then((data) => loadedFeatures.hospital_noraml = data);
        //         //     break;
        //         // case 'xf_normal':
        //         //     bo.loadGeoJson(ServiceArea_normal_xf1_nopro, undefined, undefined).then((data) => loadedFeatures.xf_normal = data);
        //         //     break;
        //         // case 'closest_hospital_5a180_15':
        //         //     bo.loadGeoJson(closestFacility_hospital2yey_5a180_15l, undefined, undefined, {
        //         //         strokeColor: 'rgba(0, 0, 255, 1)',
        //         //         strokeWidth: 3
        //         //     }).then((data) => loadedFeatures.closest_hospital_5a180_15 = data);
        //         //     bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
        //         //     bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }).then((data) => loadedFeatures.hospital = data);
        //         //     break;
        //         // case 'closestFacility_hospital2yey_normal':
        //         //     bo.loadGeoJson(closestFacility_hospital2yey_normal, undefined, undefined, {
        //         //         strokeColor: 'rgba(0, 0, 255, 1)',
        //         //         strokeWidth: 3
        //         //     }).then((data) => loadedFeatures.closestFacility_hospital2yey_normal = data);
        //         //     bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
        //         //     bo.loadGeoJson(hospital, undefined, undefined, { imageSrc: hospital1 }).then((data) => loadedFeatures.hospital = data);
        //         //     break;
        //         // case 'closestFacility_xiaofangl2yey_5a180_15':
        //         //     bo.loadGeoJson(closestFacility_xiaofangl2yey_5a180_15, undefined, undefined, {
        //         //         strokeColor: 'rgba(0, 0, 255, 1)',
        //         //         strokeWidth: 3
        //         //     }).then((data) => loadedFeatures.closestFacility_xiaofangl2yey_5a180_15 = data);
        //         //     bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
        //         //     bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }).then((data) => loadedFeatures.xiaofang = data);
        //         //     break;

        //         // case 'closestFacility_xiaofangl2yey_normal':
        //         //     bo.loadGeoJson(closestFacility_xiaofangl2yey_normal, undefined, undefined, {
        //         //         strokeColor: 'rgba(0, 0, 255, 1)',
        //         //         strokeWidth: 3
        //         //     }).then((data) => loadedFeatures.closestFacility_xiaofangl2yey_normal = data);
        //         //     bo.loadGeoJson(childgarden, undefined, undefined, { imageSrc: youeryuan }).then((data) => loadedFeatures.childgarden = data);
        //         //     bo.loadGeoJson(xiaofang, undefined, undefined, { imageSrc: xiaofang1 }).then((data) => loadedFeatures.xiaofang = data);
        //         //     break;

        //         // case 'road_project_clip_check_flood_bridgeF_5a180_15_nopro':
        //         //     bo.loadGeoJson(road_project_clip_check_nopro, undefined, undefined, {
        //         //         strokeColor: 'rgba(0, 0, 255, 0.8)',
        //         //         strokeWidth: 3
        //         //     }, 1).then((data) => loadedFeatures.road_project_clip_check_nopro = data);
        //         //     bo.loadGeoJson(road_project_clip_check_flood_bridgeF_5a180_15_nopro, undefined, undefined, {
        //         //         strokeColor: 'rgba(255, 0, 0, 1)',
        //         //         strokeWidth: 3
        //         //     }, 10).then((data) => loadedFeatures.road_project_clip_check_flood_bridgeF_5a180_15_nopro = data);
        //         //     break;
        //     }
        // };
    }

    const initPanel2 = () => {
        myChart2 = echarts.init(document.getElementById('panel2'));
        const option = {
            title: {
                left: 'center',
                text: '各类型道路淹没长度',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['干道', '主要道路', '次要道路', '三级道路', '居住区道路', '生活街道', '服务性道路', '人行道', '自行车道', '小道', '台阶', '未分类']
            },
            series: [
                {
                    name: '未淹没路段(千米)',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [211, 295, 331, 356, 552, 36, 150, 117, 47, 13, 5, 343]
                },
                {
                    name: '淹没路段(千米)',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [16, 14, 23, 10, 11, 2, 12, 1, 0.08, 0.13, 0.04, 4.09]
                },
            ]
        };

        myChart2.setOption(option);

    }

    const initPanel3 = () => {
        bo = new BotOl('panel3');
        bo.setCenter([114.359424, 30.536525], 15);
    }

    const initPanel4 = () => {
        const neiRong = `<br/><br/><br/><h1 style="text-align: center;">要素信息面板</h1>`;
        panel4.innerHTML = neiRong;
        const _showInfo = (info, infoEl) => {
            if (info === '') {
                // infoEl.innerHTML = neiRong;
                return;
            }
            const infos = info.split(';').join('<br/>');
            infoEl.innerHTML = infos;
        }
        bo.getInfo(['name', 'Name', 'ServiceAre', 'Floor', 'FromBreak'], (info) => _showInfo(info, panel4), {
            'name': '名称',
            'Name': '名称',
            'FromBreak': '最快到达时间（分）'
        });
    }

    const initPanel6 = () => {
        if (myChart6) {
            myChart6.clear();
            myChart6.dispose();
        }
        myChart6 = echarts.init(document.getElementById('panel6'));
        var option;
        option = {
            title: {
                left: 'center',
                text: '医院-幼儿园淹没路径数',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: true },
                    data: ['0<t<=8分', '8分<t<=12分', '12分<t<=15分', '15分<t']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '无淹没',
                    type: 'bar',
                    barGap: 0,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [164, 20, 7, 13]
                },
                {
                    name: '淹没',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [155, 24, 7, 13]
                }
            ]
        };
        myChart6.setOption(option);
    }

    const initPanel6Copy = () => {
        if (myChart6) {
            myChart6.clear();
            myChart6.dispose();
        }
        myChart6 = echarts.init(document.getElementById('panel6'));
        var option;
        option = {
            title: {
                left: 'center',
                text: '消防-幼儿园淹没路径数',
                textStyle: {
                    color: '#FFF'
                }
            },
            grid: {
                right: 15,
                left: 0,
                bottom: 0,
                top: 30,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: true },
                    data: ['0<t<=5分', '5分<t<=10分', '10分<t<=15分', '15分<t']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '无淹没',
                    type: 'bar',
                    barGap: 0,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [55, 53, 35, 41]
                },
                {
                    name: '淹没',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [51, 42, 34, 43]
                }
            ]
        };
        myChart6.setOption(option);
    }

    const initPanel5 = () => {
        if (myChart5) {
            myChart5.clear();
            myChart5.dispose();
        }
        myChart5 = echarts.init(document.getElementById('panel5'));

        const option = {
            title: {
                left: 'center',
                text: '医院服务区面积',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top: 30,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0<t<=8分', '8分<t<=12分', '12分<t<=15分']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '无淹没(平方千米)',
                    type: 'line',
                    // stack: 'Total',
                    data: [116.035, 172.857, 190.359]
                },
                {
                    name: '淹没(平方千米)',
                    type: 'line',
                    // stack: 'Total',
                    data: [107.456, 146.381, 149.994]
                }
            ]
        };
        myChart5.setOption(option);
    }

    const initPanel5Copy = () => {
        if (myChart5) {
            myChart5.clear();
            myChart5.dispose();
        }
        myChart5 = echarts.init(document.getElementById('panel5'));

        const option = {
            title: {
                left: 'center',
                text: '消防服务区面积',
                textStyle: {
                    color: '#FFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top: 30,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0<t<=5分', '5分<t<=10分', '10分<t<=15分']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '无淹没(平方千米)',
                    type: 'line',
                    // stack: 'Total',
                    data: [29.7243, 60.2355, 90.2687]
                },
                {
                    name: '淹没(平方千米)',
                    type: 'line',
                    // stack: 'Total',
                    data: [28.4722, 35.4507, 30.8727]
                }
            ]
        };
        myChart5.setOption(option);
    }

    let isPanel56 = true;
    intervalId = setInterval(() => {
        if (isPanel56) {
            initPanel5Copy();
            initPanel6Copy();
            isPanel56 = false;
        }
        else {
            initPanel5();
            initPanel6();
            isPanel56 = true;
        }
    }, 5000)

    initPanel1();
    initPanel2();
    initPanel3();
    initPanel4();
    initPanel5();
    initPanel6();
}

cluster();

clusterButton.addEventListener('click', () => {
    [rainButton, demandButton, serviceButton].forEach((item) => item.classList.remove('active'));
    clusterButton.classList.add('active');
    cluster();
});
rainButton.addEventListener('click', () => {
    [clusterButton, demandButton, serviceButton].forEach((item) => item.classList.remove('active'));
    rainButton.classList.add('active');
    rainstorm();
});
demandButton.addEventListener('click', () => {
    [clusterButton, rainButton, serviceButton].forEach((item) => item.classList.remove('active'));
    demandButton.classList.add('active');
    demand();
});
serviceButton.addEventListener('click', () => {
    [clusterButton, rainButton, demandButton].forEach((item) => item.classList.remove('active'));
    serviceButton.classList.add('active');
    service();
});



