let Wish = document.querySelector("#text-Changes")
function changes(){
    setTimeout(()=>{
        Wish.innerHTML="10"
        setTimeout(()=>{
            Wish.innerHTML="9"
            setTimeout(() => {
                Wish.innerHTML = "8"
                setTimeout(() => {
                    Wish.innerHTML = "7"
                    setTimeout(() => {
                        Wish.innerHTML = "6"
                        setTimeout(() => {
                            Wish.innerHTML = "5"
                            setTimeout(() => {
                                Wish.innerHTML = "4"
                                setTimeout(() => {
                                    Wish.innerHTML = "3"
                                    setTimeout(() => {
                                        Wish.innerHTML = "2"
                                        setTimeout(() => {
                                            Wish.innerHTML = "1"
                                            setTimeout(()=>{
                                                Wish.innerHTML="Happy Independence day"
                                            },1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        },1000);
        
    },0) 
}
changes()

