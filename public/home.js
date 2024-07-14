document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll('.msg-bot');
    const paragraphs1 = document.querySelectorAll('.msg-user');
    const workExperience = document.getElementById('workExperience');
    const personalProject = document.getElementById('personalProject');
    const funFacts = document.getElementById('funFacts');
    const followUpMessage = document.getElementById('followUpMessage');
    const followUpMessage1 = document.getElementById('followUpMessage1');
    const followUpMessage2 = document.getElementById('followUpMessage2');
    workExperience.style.display = 'none';
    followUpMessage.style.display = 'none';
    personalProject.style.display = 'none';
    followUpMessage1.style.display = 'none';
    funFacts.style.display = 'none';
    followUpMessage2.style.display = 'none';

    let delay = 0; 

     for(let i = 0; i < 5; i++){
        if(i == 4){
            for(let j = 0; j < 1; j++){
                paragraphs1[j].style.opacity = '0';
                paragraphs1[j].style.animation = `fadeIn 0.5s ${delay}s forwards`;
                delay += 0.5;
            };
        }
        paragraphs[i].style.opacity = '0';
        paragraphs[i].style.animation = `fadeIn 0.5s ${delay}s forwards`;
        delay += 0.5;
    };

    function scrollToBottom() {
        const box = document.querySelector('.transparent-box');
        box.scrollTop = box.scrollHeight;
    }
    
    const toggleButton = document.getElementById('workBtn'); 
    const toggleButton1 = document.getElementById('personal-project');
    const toggleButton2 = document.getElementById('fun-facts');
    toggleButton1.disabled = true;
    toggleButton1.style.opacity = 0.25;
    toggleButton2.disabled = true;
    toggleButton2.style.opacity = 0.25;
    
    if(toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (workExperience.style.display === 'none') {
                workExperience.style.display = 'inline-block';
            } else {
                workExperience.style.display = 'none';
            }

            if (followUpMessage.style.display === 'none') {
                followUpMessage.style.display = 'block';
            } else {
                followUpMessage.style.display = 'none';
            }

            toggleButton.disabled = true;
            toggleButton.style.opacity = 0.25;
            toggleButton1.disabled = false;
            toggleButton1.style.opacity = 1;
        });
    }

    if(toggleButton1){
        toggleButton1.addEventListener('click', () => {
            if(personalProject.style.display === 'none') {
                personalProject.style.display = 'inline-block';
            } else {
                personalProject.style.display = 'none';
            }

            if (followUpMessage1.style.display === 'none') {
                followUpMessage1.style.display = 'inline-block';
            } else {
                followUpMessage1.style.display = 'none';
            }

            toggleButton1.disabled = true;
            toggleButton1.style.opacity = 0.25;
            toggleButton2.disabled = false;
            toggleButton2.style.opacity = 1;
        });
    }

    if(toggleButton2){
        toggleButton2.addEventListener('click', () => {
            if(funFacts.style.display === 'none') {
                funFacts.style.display = 'inline-block';
            } else {
                funFacts.style.display = 'none';
            }

            if (followUpMessage2.style.display === 'none') {
                followUpMessage2.style.display = 'inline-block';
            } else {
                followUpMessage2.style.display = 'none';
            }

            toggleButton2.disabled = true;
            toggleButton2.style.opacity = 0.25;
        });
    }
});