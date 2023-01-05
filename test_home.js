let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
 empPayrollList = getEmployeePayrollDataFromStorage();
 document.querySelector(".emp-count").textContent = empPayrollList.length;
 createInnerHtml();
 localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                             JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
 
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = '${headerHtml}';
    for (const empPayrollData of empPayrollList) {
        innerHtml = 
               `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilepic}"></img>

            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${empPayrollData._department}</td>
            <td>${empPayrollData._Salary}</td>
            <td>${empPayrollData._StartDate}</td>
            <td>
                <img id = "${empPayrollData._id}" onclick="remove(this)"
                src="./profilePic/delete-black-18dp.svg" alt="delete"></img>
                 <img id = "${empPayrollData._id}" onclick="remove(this)"
                src="./profilePic/create-black-18dp.svg" alt="edit"></img>
            </td>
            </tr>
            `;
            
}
document.querySelector('#table-display').innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHTML = `${deptHTML} <div class="dept-label">${dept}</div>`;
     }


    return deptHtml;
}

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
            .map(empData => empData._id)
            .indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON .stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml(); 


}