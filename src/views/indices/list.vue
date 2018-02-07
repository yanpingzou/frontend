<style lang="less">
    @import '../../styles/common.less';
    /*@import './components/table.less';*/
    @import './components/common-table.less';
</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <p slot="title">
                        <Icon type="qr-scanner"></Icon>
                        &nbsp;索引概览
                    </p>
                    <p slot="extra">
                        <Button type="primary" size="small" icon="plus" @click="createIndices">新增索引</Button>
                    </p>
                    <Row>
                        <Input v-model="searchIndices" icon="search" @on-change="handleSearchIndices" placeholder="请输入索引名称搜索..." style="width: 220px" />
                    </Row>
                    <common-table 
                        refs="listIndices" 
                        v-model="listData" 
                        :columns-list="listColumns"
                        @on-delete="handleDelete"
                        @on-edit="handleEdit"
                        @on-analysis="handleAnalysis"
                        @on-checked="handlechecked"
                    ></common-table>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import tableData1 from './components/table_data';
import CommonTable from './components/CommonTable.vue';

export default {
    name: 'list-indices',
    components: {
        CommonTable
    },
    data () {
        return {
            listColumns: [],
            listData: [],
            initListData: [],
            searchIndices: ''
        };
    },
    methods: {
        createIndices () {
            this.$router.push({
                name: 'create-indices',
                params: {
                    id: 'create'
                }
            });
        },
        init () {
            this.listColumns = tableData1.editInlineColumns;
            this.listData = this.initListData = tableData1.editInlineData;
        },
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearchIndices () {
            this.listData = this.initListData;
            this.listData = this.search(this.listData, {name: this.searchIndices});
        },
        handleEdit (row) {
            this.$router.push({
                name: 'edit-indices',
                params: {
                    id: row.id
                }
            });
        },
        handleDelete (row) {
            for (let index in this.initListData) {
                if (this.initListData[index].id === row.id) {
                    this.initListData.splice(index, 1);
                }
            }
            this.listData = this.initListData;
            this.$Message.success('删除成功');
        },
        handleAnalysis (row) {
            this.$router.push({
                name: 'analysis-indices',
                params: {
                    id: row.id
                }
            });
        },
        handlechecked (row) {
            this.$router.push({
                name: 'checked-indices',
                params: {
                    id: row.id
                }
            });
        },
    },
    created () {
        this.init();
    }
};
</script>