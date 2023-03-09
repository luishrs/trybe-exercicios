const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = 'rgb(165,0,243)';
}
const emergencyTasks2 = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks2.style.backgroundColor = 'rgb(255,159,132)';

const noemergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noemergencyTasks.length; index += 1) {
    noemergencyTasks[index].style.backgroundColor = 'rgb(35,37,37)';
}

const noemergencyTasks2 = document.getElementsByClassName('no-emergency-tasks')[0];
noemergencyTasks2.style.backgroundColor = 'rgb(249,219,94)';

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'rgb(0,53,51)';

