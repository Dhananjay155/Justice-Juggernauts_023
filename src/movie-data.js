// movie data

var titles ={
    0:{
        title: "it Ends",
        subTitel: "Horror-Drama-movie",
        rating: 8.483,
        desc: "The horror thriller “IT”, directed by Andrés Muschietti (“Mama”), is based on the hugely popular Stephen King novel of the same name, which has been terrifying readers for decades. When children begin to disappear in . ",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    },
    1:{
        title: "DeadPool",
        subTitel: "Action / Thriller / SCi-Fi",
        rating: 9.145,
        desc: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel.",
        videoURL: "../assets/deadpool.mp4",
    
    },
    2:{
        title: "Loki",
        subTitel: "Action",
        rating: 7.451,
        desc: "When an alternate Loki uses the Tesseract to escape in Avengers: Endgame, the Time Variance Authority (TVA), a group that keeps an eye on the sacred timeline, captures him. After first doubting the TVA's legitimacy,",
        videoURL:"../assets/loki.mp4",
    
    },
    3:{
        title: "Spider Man",
        subTitel: "Action / Advanture ",
        rating: 9.125,
        desc: "A washed up monster chaser convinces the U.S. Government to fund a trip to an unexplored island in the South Pacific. Under the guise of geological research, the team travels to Skull Island. Upon arrival, the group .",
        videoURL: "../assets/spiderman.mp4",
    
    },
    4:{
        title: "THOR",
        subTitel: "Action / Thriller",
        rating: 10,
        desc: "Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    5:{
        title: "fury",
        subTitel: "Action / Thriller / War",
        rating: 9.831,
        desc: "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    6:{
        title: "VEnom",
        subTitel: "television Serise",
        rating: 7.154,
        desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
};


// swiper
//craete thumbs swiper

var thumbsSwiper = new Swiper(".thumbsSwiper",{
    spaceBetween: 10,
    slidesPerView: 5,
    breakpoints:{
        200:{
            slidesPerView: 1.5
        },
        400:{
            slidesPerView: 1.5
        },
        600:{
            slidesPerView: 3
        },
        1100:{
            slidesPerView: 5
        },
    },
    freeMode: true,
    watchSlidesProgress: true,

});


const swiper = new Swiper('.bannerSwiper', {
   spaceBetween: 0,
   effect: "fade",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // make thumbs slider works as thumbs for the banner slide
    thumbs:{
        swiper: thumbsSwiper
    }
 
  });

//Change title 
var cahngeTitle =(index) =>{
    var title = document.querySelector('#title');
    var subTitel = document.querySelector('#sub-title');
    var desc = document.querySelector('#desc');
    var rating = document.querySelector('#ratings');
    title.innerHTML =`<h1>${titles[index].title}</h1>`;
    subTitel.innerHTML =`<p>${titles[index].subTitel}</p>`;
    desc.innerHTML =`<p>${titles[index].desc}</p>`;
    rating.innerHTML = `<span>${titles[index].rating}</span>`

}

// active exchange is a swiper event
swiper.on('activeIndexChange', function (){
    cahngeTitle(swiper.activeIndex); // activeIndex is a swiper
})



  //Show overlay and change trailer video

var overlay = document.querySelector(".overlay");
var videoContainer = document.querySelector('#movie-trailer');

var showTrailer = () =>{
    var index = swiper.activeIndex;
    videoContainer.innerHTML = `
    <video controls autoplay id= "video">
    <source src ="../assets/${titles[index].videoURL}" type="video/mp4"
    </video>
    `
    overlay.classList.add("show");

};

  //close overlay
  var closeoverlay = () =>{
    // pause the video when close the overlay
    var video = document.querySelector('#video');
    video.pause();
    overlay.classList.remove('show')
}
  