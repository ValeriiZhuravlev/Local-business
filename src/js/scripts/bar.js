  
const bar = function() {
    let bar = document.querySelector('#bar');
    let nav = document.querySelector('.nav');
    let flag = false;
    bar.addEventListener('click', () => {
        if(!flag) {
            flag = true;
            nav.style.display = 'block';
            nav.style.height = '400px'
        } else if(flag) {
            flag = false;
            nav.style.display = 'none';
            nav.style.height = '0px'
        }
    });
}();

module.exports = bar;