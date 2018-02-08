export function getLast12Months () {
    let d = new Date();
    let result = [];
    for (let i = 0; i < 18; i++) {
        let mt = {};
        d.setMonth(d.getMonth() - 1);
        let m = d.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        // 在这里可以自定义输出的日期格式
        // result.push(d.getFullYear() + "-" + m);
        mt['id'] = d.getFullYear() + m.toString();
        mt['text'] = d.getFullYear() + '年' + m + '月';
        result.push(mt);
    }
    return result;
}

export function getLast30Days () {
    let result = [];
    for (let i = 30; i > 0; i--) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        result.push(
            year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        );
    }
    return result;
}

export function getStorge30Days () {
    let result = [];
    for (let i = 30; i > 0; i--) {
        let a = 500;
        let b = Math.random() * 1000;
        result.push((a + b).toFixed(2));
    }
    return result;
}
