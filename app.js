var anchorTags=document.querySelectorAll('.horizontal-list a');
for(let i=0;i<anchorTags.length;i++){

    anchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId)
        console.log(targetSectionId)
        var interval= setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20)

    })    
}

var progressBar= document.querySelector('.skills-progress > div');
var skillsContainer= document.querySelector('.skills-display');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
var eighty= document.querySelector('.skills-progress> .eighty-five-percent')
var ninty= document.querySelector('.skills-progress > .ninty-five-percent')
var fifty= document.querySelector('.skills-progress > .fifty-five-percent')
var sixty= document.querySelector('.skills-progress > .sixty-percent')
var sixtyF= document.querySelector('.skills-progress > .sixty-five-percent')
var seventy= document.querySelector('.skills-progress > .seventy-five-percent')

function initialiseBar(){
    eighty.style.width = '0%';
    ninty.style.width = '0%';
    fifty.style.width = '0%';
    sixty.style.width = '0%';
    sixtyF.style.width = '0%';
    seventy.style.width = '0%';
}



function skillbar() {


    // Your existing code for setting width values
    eighty.style.width = '85%';
    ninty.style.width = '90%';
    fifty.style.width = '55%';
    sixty.style.width = '60%';
    sixtyF.style.width = '65%';
    seventy.style.width = '75%';
}


function checkScroll(){
    var coordinates= skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone= true;
        console.log('Skill bar visible')
    skillbar();

    }
    else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initialiseBar();
    }
    
}
