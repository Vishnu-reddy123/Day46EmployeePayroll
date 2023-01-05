const stringifyDate=(date) => {
    const options={day: 'numeric', month:'short', year:'numeric'};
    const newDate=!date ? "undefined": new Date(Date.parse(date)).toLocaleDateString('en-G8',options);
    return newDate;
}
const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._name == node.id);
    if(!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData));
    window.location.replace(siteProperties.add_emp_payroll_page);
}