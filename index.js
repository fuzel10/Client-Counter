const counters = document.querySelectorAll('.counter');


counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCount);
        const startingCount = Number(counter.innerHTML);
        const increment = targetCount/10;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + increment)}`;
            setTimeout(updateCounter,80)
        }
        else{
            startingCount = targetCount;
        }
    }

    updateCounter();
})