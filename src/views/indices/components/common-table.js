export const editButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'success',
            size: 'default'
        },
        on: {
            'click': () => {
                vm.$emit('on-edit', currentRow);
            }
        }
    }, '编辑');
};

export const statusButton = (vm, h, currentRow, index) => {
    const color = currentRow.status === 'enable' ? '#19be6b' : '#ed3f14';
    const text = currentRow.status === 'enable' ? '启用' : '禁用';
    return h('Tag', {
        props: {
            type: 'dot',
            color: color
        },
        nativeOn: {
            'click': () => {
                alert('s');
            }
        }
    }, text);
};

export const analysisButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'ghost',
            size: 'default',
            icon: 'podium',
            shape: 'circle'
        },
        on: {
            'click': () => {
                vm.$emit('on-analysis', currentRow);
            }
        }
    });
};

export const deleteButton = (vm, h, currentRow, index) => {
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
                // vm.deleteIndex(index); // 设置删除方法
                vm.$emit('on-delete', currentRow);
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

export const checked = (vm, h, currentRow, index) => {
    const text = currentRow.checked === 1 ? '通过' : '错误';
    const color = currentRow.checked === 1 ? 'success' : 'error';
    return h('p', {
        attrs: {
            class: color
        },
        on: {
            'click': () => {
                vm.$emit('on-checked', currentRow);
            }
        }
    }, text);
};
