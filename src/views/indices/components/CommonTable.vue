<style lang="less">
    @import './components/editable-table.less';
</style>

<template>
    <Row>
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
import tableData1 from './components/table_data';

const editButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'success',
            size: 'default'
        },
        on: {
            'click': () => {
                vm.$router.push({
                    name: 'edit-indices',
                    params: {
                        id: index + 1
                    }
                });
            }
        }
    }, '编辑');
};

const enableButton = (vm, h, currentRow, index) => {
    const color = currentRow.status === 'enable' ? '#19be6b' : '#ed3f14';
    const text = currentRow.status === 'enable' ? '启用' : '禁用';
    return h('Tag', {
        props: {
            type: 'dot',
            color: color
        }
    }, text);
};

const deleteButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'on-ok': () => {
                vm.deleteIndex(index); // 设置删除方法
            }
        }
    }, [
        h('Button', {
            props: {
                type: 'error',
                size: 'default'
            }
        }, '删除')
    ]);
};

export default {
    name: 'CommonTable',
    props: {
        refs: String,
        columnsList: Array,
        data: Array
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
        getData () {
            this.tableColumns = this.columnsList;
            this.tableDataHistory = this.data;
        },
        init () {
            if (this.tableDataHistory.length < this.pageSize) {
                this.tableData = this.tableDataHistory;
            } else {
                this.tableData = this.tableDataHistory.slice(0, this.pageSize);
            }
            this.refreshTable();
        },
        refreshTable () {
            this.totalCount = this.tableDataHistory.length;
            this.tableData = this.tableDataHistory.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            if (this.tableData.length === 0) {
                this.changePage(this.currentPage - 1);
            }
            this.tableColumns.forEach(item => {
                if (item.handle) {
                    item.render = (h, param) => {
                        let currentRowData = this.tableData[param.index];
                        let children = [];
                        item.handle.forEach(item => {
                            if (item === 'edit') {
                                children.push(editButton(this, h, currentRowData, param.index));
                            } else if (item === 'delete') {
                                children.push(deleteButton(this, h, currentRowData, param.index));
                            } else if (item === 'enable') {
                                children.push(enableButton(this, h, currentRowData, param.index));
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
        },
        deleteIndex (index) {
            this.tableDataHistory.splice((this.currentPage - 1) * this.pageSize + index, 1);
            this.refreshTable();
        }
    },
    computed: {
    },
    created () {
        this.getData();
        this.init();
    }
};
</script>