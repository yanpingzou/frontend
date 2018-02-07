<style lang="less">
    @import './common-table.less';
</style>

<template>
    <Row class="margin-top-10">
        <Col>
            <div class="edittable-table-height-con">
                <Table size="default" :ref="refs" :data="tableData" :columns="tableColumns" border stripe></Table>
            </div>
        </Col>
        <Col>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="totalCount" :page-size="pageSize" :current="currentPage" 
                    show-elevator show-sizer show-total @on-page-size-change="changeSize" @on-change="changePage"></Page>
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
import * as tableButton from './common-table.js';

export default {
    name: 'CommonTable',
    props: {
        refs: String,
        columnsList: Array,
        value: Array
    },
    data () {
        return {
            totalCount: 0,
            pageSize: 10,
            currentPage: 1,
            tableDataHistory: [],
            tableColumns: [],
            tableData: []
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
            this.tableColumns = this.columnsList;
            this.tableDataHistory = this.value;
            this.refreshTable();
        },
        refreshTable () {
            this.totalCount = this.tableDataHistory.length;
            this.tableData = this.tableDataHistory.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            if (this.tableData.length === 0 && this.currentPage > 1) {
                this.currentPage -= 1;
                this.tableData = this.tableDataHistory.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            }
            this.tableColumns.forEach(item => {
                if (item.handle) {
                    item.render = (h, param) => {
                        let currentRowData = this.tableData[param.index];
                        let children = [];
                        item.handle.forEach(item => {
                            if (item === 'edit') {
                                children.push(tableButton.editButton(this, h, currentRowData, param.index));
                            } else if (item === 'delete') {
                                children.push(tableButton.deleteButton(this, h, currentRowData, param.index));
                            } else if (item === 'analysis') {
                                children.push(tableButton.analysisButton(this, h, currentRowData, param.index));
                            } else if (item === 'status') {
                                children.push(tableButton.statusButton(this, h, currentRowData, param.index));
                            } else if (item === 'checked') {
                                children.push(tableButton.checked(this, h, currentRowData, param.index));
                            }
                        });
                        return h('div', children);
                    };
                }
            });
        },
        changePage (index) {
            this.currentPage = index;
            this.refreshTable();
        },
        changeSize (value) {
            this.pageSize = value;
            this.refreshTable();
        }
    },
    created () {
        this.init();
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>