<style lang="less">
    @import '../../styles/common.less';
    @import './analysis.css';
</style>

<template>
<div>
    <Row>
        <Col span="10">
            <Card style="height:190px;">
                <p slot="title">
                    <Icon type="android-expand"></Icon>
                    &nbsp;信息概览
                </p>
                <Row>
                    <Col span="8" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="index_green"
                            :end-val="index.green"
                            iconType="leaf"
                            color="#64d572"
                            :iconSize="50"
                            intro-text="Index Green"
                        ></infor-card>
                    </Col>
                    <Col span="8" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="index_yellow"
                            :end-val="index.yellow"
                            iconType="flame"
                            color="#ffd572"
                            :iconSize="50"
                            intro-text="Index Yellow"
                        ></infor-card>
                    </Col>
                    <Col span="8" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="index_red"
                            :end-val="index.red"
                            iconType="nuclear"
                            color="#f25e43"
                            :iconSize="50"
                            intro-text="Index Red"
                        ></infor-card>
                    </Col>
                </Row>
            </Card>
        </Col>
        <Col span="14" class="padding-left-10">
            <Card class="card-height-300">
                <p slot="title">
                    <Icon type="arrow-graph-up-right"></Icon>
                    &nbsp;近30天日志增长趋势（单位：GB）
                </p>
                <div style="height:220px;">
                  <indices-storge-line></indices-storge-line>
                </div>
            </Card>
        </Col>
    </Row>
</div>
</template>

<script>
import inforCard from '../my-components/inforCard.vue';
import indicesStorgeLine from './components/indicesStorgeLine.vue';

export default {
    name: 'analysis',
    components: {
        inforCard,
        indicesStorgeLine
    },
    data: function () {
        return {
            index: {
                green: 1496,
                yellow: 0,
                red: 0
            }
        };
    },
    mounted () {
        this.index.green = Math.round(Math.random() * 1000);
    }
};
</script>