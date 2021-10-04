function generateReport() {
    const theads = Array.from(document.querySelectorAll('th input'));
    const table = document.querySelectorAll('tbody tr');
    const output = document.querySelector('#output');

    const tableArray = new Array(table)[0];

    const report = [];
    for (let i=0; i<table.length; i++) {
        let empInfo = {};
        for (let j=0; j<theads.length; j++) {
            if (theads[j].checked) {
                const label = theads[j].name;
                const res = tableArray[i].textContent.split('\n').map(x => x.trim(' ')).filter(x => x !== '')[j];
                empInfo[label] = res;
            }
        }
        report.push(empInfo);
    }

    output.textContent = JSON.stringify(report);
}