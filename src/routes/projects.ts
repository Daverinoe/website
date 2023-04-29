// projects.ts
export interface Project {
    title: string;
    link: string;
    image: string;
    banner_image: string;
    screenshot: string;
    alt: string;
    description: string;
    role: string;
    challenges: string;
}

export const projects: Project[] = [
    {
        title: "Hexbound Nightmare",
        link: "https://daverinoe.itch.io/hexbound-nightmare",
        image: "game_images/hexbound_nightmare.png",
        banner_image: "game_images/hexbound_banner.png",
        screenshot: "game_images/hexbound_screenshot.png",
        alt: "Cryptic red runes lie on a floating hexagonal slate. A dark, atmospheric tree is visible in the background. There is fog obscuring everything else, but the roiling dark cloudy sky.",
        description: "A brief parable about coffee. This game started as a response to my own coffee machine, which was forever making demands of being refilled with water, or to empty the coffee grounds.",
        role: "For this game, I did everything except the music, except the tree model. Level design, programming, SFX foley, all the models except the hand and skull (which I modified quite extensively).",
        challenges: "It seems I didn't learn from my last game, and once again solo developed a game with a lot of scope. The greatest challenge, though, was properly tackling the modelling. My new favourite thing is geometry nodes in Blender, that's what's responsible for the amazing hexagon based landscape. Though I didn't model the hand or the skull myself, I did extensively modify the base models they came from, and animated the hand myself.",
    },
    {
        title: "Morning coffee",
        link: "https://daverinoe.itch.io/morning-coffee",
        image: "game_images/morning_coffee.png",
        banner_image: "game_images/morning_coffee.png",
        screenshot: "game_images/morning_coffee.png",
        alt: "A happy canvas bag of coffee with a bloodstain in the corner.",
        description: "A brief parable about coffee. This game started as a response to my own coffee machine, which was forever making demands of being refilled with water, or to empty the coffee grounds.",
        role: "For this game, I did everything except the music, and many of the 3D models. Level design, programming, SFX foley, the model of the coffee machine, the voice acting, all this was my work.",
        challenges: "The biggest challenge I faced with this project was the sheer scope of it. This is quite a large game to be completed in 9 days, especially as a solo developer. To accomplish this, I really had to structure my time wisely, and create a plan for the game that I could follow closely. Even then, I still had to cut scope on the game, which is a harsh reality that many game developers must face.",
    },
    {
        title: "Rail Assembly",
        link: "https://daverinoe.itch.io/rail-assembly",
        image: "game_images/rail_assembly.png",
        banner_image: "game_images/rail_assembly.png",
        screenshot: "game_images/rail_assembly.png",
        alt: "Train waiting on rails.",
        description: "Move track pieces in front of your train to prevent disaster.",
        role: "Programmer, VFX artist. This was mostly a self-given role, as I love doing the small things for the project that many people don't even notice are there, but give the game that smooth-to-play feeling.",
        challenges: "The biggest challenge we faced in this game was scope. We had a lot to do, and unfortunately many of team fell sick. While I was able to complete my parts, and in the end get the game into a semi-playable state, I realised that I simply cannot do the work of 3 people without serious consequences, which is a lesson I will definitely take forward with me.",

    },
    {
        title: "Pizza Delivery",
        link: "https://daverinoe.itch.io/pizza-delivery",
        image: "game_images/pizza_delivery.png",
        banner_image: "game_images/pizza_delivery.png",
        screenshot: "game_images/pizza_delivery.png",
        alt: "Pizza box with a logo of a goat on it.",
        description: "A totally normal game about delivering a pizza to a hedge maze at night.",
        role: "Almost everything was done by me.",
        challenges: "This game was my first foray into a horror title. The biggest challenge for me with this game was the procedural animation on the monster. I couldn't get it to look quite right, but it still does its job sufficiently. I would take take more time to get the animation smooth in the future, and add the ability to walk on/up walls for extra creepiness.",
    },
    {
        title: "Alarm Cluck",
        link: "https://daverinoe.itch.io/alarm-cluck",
        image: "game_images/alarm_cluck.png",
        banner_image: "game_images/alarm_cluck.png",
        screenshot: "game_images/alarm_cluck.png",
        alt: "A pixel art rooster.",
        description: "Waking the farm is your duty in this Jump King clone.",
        role: "Everything except artist and music.",
        challenges: "The big challenge for this one was time. This game was made over 1 weekend, so scope was a big issue. However, the big lesson I'm taking away from this game is that small changes can make a massive difference. The player controller felt stinted and stiff, but after adding in the animation of the rooster squishing down and out, without changing the controller it suddenly felt much more responsive.",
    },
    {
        title: "God's Gambit",
        link: "https://velopman.itch.io/gods-gambit",
        image: "game_images/gods_gambit.png",
        banner_image: "game_images/gods_gambit.png",
        screenshot: "game_images/gods_gambit.png",
        alt: "A fresco of an Incan god.",
        description: "Take on the Gods to become the True God of Gaming in this twist on a classic.",
        role:"SFX, Music, and VFX artist.",
        challenges:"The challenges in this game revolved mostly around getting the SFX and VFX correct. The stone slabs we used as cards just didn't feel like they had weight, and I spent a lot of time adjusting the SFX foley and adding dust particles to give them that feeling. The end result is a stone slab that feels hefty, like it has actual weight.",
    },
    {
        title: "Unfinished bull game",
        link: "https://daverinoe.itch.io/uubtgwueuraattdtsy",
        image: "game_images/bull_game.png",
        banner_image: "game_images/bull_game.png",
        screenshot: "game_images/bull_game.png",
        alt: "A low-poly bull.",
        description: "Take revenge on a thief who dared to steal from you in a pottery store.",
        role: "Everything.",
        challenges: "This was my first solo game, and my greatest challenge was to overcome my artistic limitations. I modelled the bull, but didn't want to spend time animating it. My solution was to give the bull spinning legs, and play 'Flight of the Bumblebees'. This turned my lack of artistic talent into a hilarious situation, which simultaneously feels sloppy to play, but lots of fun.",
    },
    {
        title: "The Huggen",
        link: "https://velopman.itch.io/the-huggen",
        image: "game_images/the_huggen.png",
        banner_image: "game_images/the_huggen.png",
        screenshot: "game_images/the_huggen.png",
        alt: "A squid with its tentacles outreached.",
        description: "Spread your love to the ships above in this QWOP inspired game.",
        role: "Audio, SFX, VFX",
        challenges: "This game was a lot of fun for me. I ended up doing all the sound effects using only sounds I could make myself, which was an interesting experience. The procedural water was also a great challenge, being modelled by a series of springs and using shader code for rendering.",
    },
    {
        title: "PHD: Printer Hate Department",
        link: "https://liioni.itch.io/phd",
        image: "game_images/phd.png",
        banner_image: "game_images/phd.png",
        screenshot: "game_images/phd.png",
        alt: "A pixel art man",
        description: "Debug the world with this puzzle platformer!",
        role: "Programming",
        challenges: "I would say that the greatest challenge with this game came from the character design for the enemy. I spent a lot of time perfecting sound design and AI for the enemy, however my favourite addition here is the debug gun. It shoots copy pasta text, which is always fun when people figure that out.",
    },
    {
        title: "No Thyme to Waste",
        link: "https://daverinoe.itch.io/no-thyme-to-waste",
        image: "game_images/no_thyme_to_waste.png",
        banner_image: "game_images/no_thyme_to_waste.png",
        screenshot: "game_images/no_thyme_to_waste.png",
        alt: "A pixel art fish",
        description: "Save the world one sale at a time in this aquaponics inspired game.",
        role: "Programming",
        challenges: "As my first foray into game development, my biggest challenge was scope. I spent most of my time on the boids algorithm for the fish, something that was only tangentially related to the game at best. Going forward, I made strong efforts to realistically plan the game, and try to include timelines and milestones to hopefully avoid this problem, with various success.",
    },
];
