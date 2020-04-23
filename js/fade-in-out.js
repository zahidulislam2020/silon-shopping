               
setInterval(function(){
        if(document.getElementsByClassName("mySlide")[0].classList.contains("active")){
            document.getElementsByClassName("mySlide")[1].classList.add("active");
            document.getElementsByClassName("mySlide")[0].classList.remove("active");
    }

        else if(document.getElementsByClassName("mySlide")[1].classList.contains("active")){
            document.getElementsByClassName("mySlide")[2].classList.add("active");
            document.getElementsByClassName("mySlide")[1].classList.remove("active");
    }

        else if(document.getElementsByClassName("mySlide")[2].classList.contains("active")){
            document.getElementsByClassName("mySlide")[3].classList.add("active");
            document.getElementsByClassName("mySlide")[2].classList.remove("active");
    }

        else if(document.getElementsByClassName("mySlide")[3].classList.contains("active")){
            document.getElementsByClassName("mySlide")[0].classList.add("active");
            document.getElementsByClassName("mySlide")[3].classList.remove("active");
    }
},5000);