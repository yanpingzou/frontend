<template>
    <div style="width:100%;height:100%;" id="indices_storge_line"></div>
</template>

<script>
import echarts from 'echarts';
import * as cd from './echarts_data.js';

export default {
    name: 'indicesStorgeLine',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            var indicesStorgeLine = echarts.init(document.getElementById('indices_storge_line'));
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: cd.getLast30Days()
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '6%',
                    top: '4%',
                    containLabel: true
                },
                series: [{
                    data: cd.getStorge30Days(),
                    type: 'line',
                    smooth: true
                }]
            };
            indicesStorgeLine.setOption(option);
            window.addEventListener('resize', function () {
                indicesStorgeLine.resize();
            });
        });
    }
};
</script>