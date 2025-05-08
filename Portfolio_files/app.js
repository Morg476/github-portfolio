const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            if(currentBtn[0]){
                currentBtn[0].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        })
    }

    // Sections Active Class
    allSections.forEach(section => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if(id){
                // Remove active class from other buttons
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                // Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            }
        });
    });
}

PageTransitions();