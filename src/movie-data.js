// movie data

var titles ={
    0:{
        title: "it Ends",
        subTitel: "Horror-Drama-movie",
        desc: "The horror thriller “IT”, directed by Andrés Muschietti (“Mama”), is based on the hugely popular Stephen King novel of the same name, which has been terrifying readers for decades. When children begin to disappear in the town of Derry, Maine, a group of young kids is faced with their biggest fears when they square off against an evil clown named Pennywise, whose history of murder and violence dates back for centuries.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    },
    1:{
        title: "A Mad Max Saga",
        subTitel: "Action / Thriller / SCi-Fi",
        desc: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    2:{
        title: "Loki",
        subTitel: "Action",
        desc: "When an alternate Loki uses the Tesseract to escape in Avengers: Endgame, the Time Variance Authority (TVA), a group that keeps an eye on the sacred timeline, captures him. After first doubting the TVA's legitimacy, Loki is forced to decide between being eliminated from the universe and assisting them in their search for a hazardous time variant-a different version of himself going by the name Sylvie. Along the way, they discover the secrets of the TVA and travel across time, forcing Loki to wrestle with issues of free will and identity and make a decision that could destroy the sacred timeline and unleash havoc over the multiverse.",
        videoURL:" ../assets/marvel-studios-loki-official-trailer-disney-1080-ytshorts.savetube.me.mp4",
    
    },
    3:{
        title: "KONG SKULL ISLAND",
        subTitel: "Action / Advanture ",
        desc: "A washed up monster chaser convinces the U.S. Government to fund a trip to an unexplored island in the South Pacific. Under the guise of geological research, the team travels to Skull Island. Upon arrival, the group discover that their mission may be complicated by the wildlife which inhabits the island. The beautiful vistas and deadly creatures create a visually stunning experience that is sure to keep your attention.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    4:{
        title: "THOR",
        subTitel: "Action / Thriller",
        desc: "Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thor's surprise - inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    5:{
        title: "The Commuter",
        subTitel: "Action / Thriller",
        desc: "An insurance salesman/ex-cop is caught up in a life-threatening conspiracy during his daily commute home.",
        videoURL: "../assets/it-official-teaser-trailer-warner-bros-uk-1080-ytshorts.savetube.me.mp4",
    
    },
    6:{
        title: "The wicther",
        subTitel: "television Serise",
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
  