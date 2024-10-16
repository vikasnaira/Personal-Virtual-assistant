let btn = document.querySelector(".vikas");
let content = document.querySelector("#data");
let gif = document.querySelector(".gif")
let box = document.querySelector(".image")
let audio = document.querySelector("#audio")
let image = document.querySelector(".gif img")
let video = document.querySelector("#bg-video")


function speak(text) {
    let textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.pitch =1; // Fixed "pich" to "pitch"
    textSpeak.lang = "hi-IN"; // Changed to "hi-IN" for Hindi
    textSpeak.volume = 2;
    window.speechSynthesis.speak(textSpeak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good morning my master Vikas");
    } else if (hours >= 12 && hours < 19) {
        speak("Good afternoon sir");
    } else {
        speak("Good night sir");
    }
}

window.addEventListener('load', () => {
 wishMe();
})

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult = (event) => {

     let currentIndex = event.resultIndex 
     let transcript = event.results[currentIndex][0].transcript
     console.log(event);
     cont.textContent = transcript
     takeCommand(transcript)
}

btn.addEventListener("click", () => {
    setTimeout(()=>{
        audio.play()
        video.play()
    },800);
    recognition.start()
    image.style.transform = "scale(1)";
    btn.style.transform= "scale(0)";

})

function takeCommand(message){
    // btn.style.display = "flex"
    image.style.transform = "scale(0)"
    btn.style.transform= "scale(1)";
    setTimeout(()=>{
        video.pause()
    },8000);
    message = message.toLowerCase()
    if(message.includes("hello")){
        speak("hi, how are you, im zenny the A I,and your assistant, how can help you")()
    }
    else if(message.includes("your name")){
        speak("hi i'm zenny the virtual assistant created by vikas sir")
    }
    else if(message.includes("your owner")){
        speak("Mr vikas is my owner and i'm respect him very much he is the grate man")
    }
    else if(message.includes("vikas")){
        speak("vikas is the my owner and he create me ")
    }
    else if(message.includes("how to hack you")){
        speak("tere baap ne bhi socha hain hacking ke bare me . sale kabhi coding ka naam bhi suna-hain hack karega suar ka baccha")
    }
    else if(message.includes("who is chaman")){
        speak("chaman to vikas ka dost hai ")
    } 
    else if(message.includes("bhandara")){
        speak("saale bukhadd, berojgaar, khana nahi dete hai kya ghar vale, aa jate hai subeh subeh beekh mangne ke liye   ")
    } 
    else if(message.includes("virus")){
        speak("ye toh chaman ka dost hai na")
    }
    else if(message.includes("who is bandar")){
        speak("moti is the")
    }
    else if(message.includes("how are you")){
        speak("I'm fine,  and you say, ghar valo ne ghar se nikaala toh nahi naa ")
    }
    else if(message.includes("how r you")){
        speak("I'm fine,  and you say, ghar valo ne ghar se nikaala toh nahi naa ")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"numeric" , year:"numeric"})
        speak(date)
    }
    else if(message.includes("open instagram")){
        speak("opening instagram.......")
        window.open("https://www.instagram.com","_blank")
    }else if(message.includes("open whatsapp")){
        speak("opening whatsapp.......")
        window.open("https://web.whatsapp.com","_blank")
    }else if(message.includes("open youtube")){
        speak("opening you tube.......")
        window.open("https://www.youtube.com","_blank")
    }else if(message.includes("open facebook")){
        speak("opening facebook.......")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google.......")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator.......")
        window.open("https://www.google.com/search?q=calculator+online&oq=calc&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIUCAAQRRg5GEMYgwEYsQMYgAQYigUyDAgBECMYJxiABBiKBTIPCAIQABhDGLEDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyCggHEAAYsQMYgAQyCQgIECMYJxiPAjIHCAkQABiPAtIBCTQwMDhqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8")
    }
    else if(message.includes("open snapchat")){
        speak("opening snapchat.......")
        window.open("https://web.snapchat.com/?ref=homepage_auto_redirect.","_blank")
    }
    else if( `${message.replace("zenny","")}`){
        speak(`this is i found on the google regarding of the ${message.replace("jenny","")||message.replace("zenny","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("jenny","")||message.replace("zenny","")}`)     
    }
    else{
        speak("muh se paan nikaal kar baat kar bay")
    }
    // btn.style.display = "flex";
    image.style.transform= "scale(0)";
}
gsap.from(box,{
    y :-50,
    delay:.8,
    duration: 1,
    ease: "power1.out",
    yoyo:true,
    repeat: Infinity,
})