var editInlineColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '索引名称',
        align: 'center',
        key: 'name'
    },
    {
        title: '项目组',
        align: 'center',
        key: 'sex'
    },
    {
        title: '索引状态',
        align: 'center',
        key: 'status',
        handle: ['status']
    },
    {
        title: '修改时间',
        align: 'center',
        key: 'update_time'
    },
    {
        title: '配置校验',
        align: 'center',
        key: 'checked',
        handle: ['checked']
    },
    {
        title: '性能分析',
        align: 'center',
        key: 'analysis',
        handle: ['analysis']
    },
    {
        title: '操作',
        align: 'center',
        key: 'handle',
        width: 200,
        handle: ['edit', 'delete']
    }
];

var editInlineData = [
    {
        id: 1,
        name: 'dr_uniauth_logs1',
        sex: 'uniauth',
        status: 'enable',
        update_time: '2018-01-02 21:34:53',
        checked: 1
    },
    {
        id: 2,
        name: 'dr_uniauth_logs2',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 3,
        name: 'dr_uniauth_logs3',
        sex: 'uniauth',
        status: 'enable',
        update_time: '2018-01-02 21:34:53',
        checked: 1
    },
    {
        id: 4,
        name: 'dr_uniauth_logs4',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 5,
        name: 'dr_uniauth_logs5',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53',
        checked: 1
    },
    {
        id: 6,
        name: 'dr_uniauth_logs6',
        sex: 'uniauth',
        status: 'enable',
        update_time: '2018-01-02 21:34:53',
        checked: 1
    },
    {
        id: 7,
        name: 'dr_uniauth_logs7',
        sex: 'uniauth',
        status: 'enable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 8,
        name: 'dr_uniauth_logs8',
        sex: 'uniauth',
        status: 'enable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 9,
        name: 'dr_uniauth_logs9',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 10,
        name: 'dr_uniauth_logs10',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 11,
        name: 'dr_uniauth_logs11',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    },
    {
        id: 12,
        name: 'dr_uniauth_logs12',
        sex: 'uniauth',
        status: 'disable',
        update_time: '2018-01-02 21:34:53'
    }
];

var tableData1 = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData1;
