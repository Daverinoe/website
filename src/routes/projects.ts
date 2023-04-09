// projects.ts
export interface Project {
    title: string;
    link: string;
    image: string;
    banner_image: string;
    screenshot: string;
    alt: string;
    description: string;
}

export const projects: Project[] = [
    {
        title: "Morning coffee",
        link: "https://daverinoe.itch.io/morning-coffee",
        image: "game_images/morning_coffee.png",
        banner_image: "game_images/morning_coffee.png",
        screenshot: "game_images/morning_coffee.png",
        alt: "A happy canvas bag of coffee with a bloodstain in the corner.",
        description: "A brief parable about coffee.",
    },
    {
        title: "Rail Assembly",
        link: "https://daverinoe.itch.io/rail-assembly",
        image: "game_images/rail_assembly.png",
        banner_image: "game_images/rail_assembly.png",
        screenshot: "game_images/rail_assembly.png",
        alt: "Train waiting on rails.",
        description: "Move track pieces in front of your train to prevent disaster.",
    },
    {
        title: "Pizza Delivery",
        link: "https://daverinoe.itch.io/pizza-delivery",
        image: "game_images/pizza_delivery.png",
        banner_image: "game_images/pizza_delivery.png",
        screenshot: "game_images/pizza_delivery.png",
        alt: "Pizza box with a logo of a goat on it.",
        description: "A totally normal game about delivering a pizza to a hedge maze at night.",
    },
    {
        title: "Alarm Cluck",
        link: "https://daverinoe.itch.io/alarm-cluck",
        image: "game_images/alarm_cluck.png",
        banner_image: "game_images/alarm_cluck.png",
        screenshot: "game_images/alarm_cluck.png",
        alt: "A pixel art rooster.",
        description: "Waking the farm is your duty in this Jump King clone.",
    },
    {
        title: "God's Gambit",
        link: "https://velopman.itch.io/gods-gambit",
        image: "game_images/gods_gambit.png",
        banner_image: "game_images/gods_gambit.png",
        screenshot: "game_images/gods_gambit.png",
        alt: "A fresco of an Incan god.",
        description: "Take on the Gods to become the True God of Gaming in this twist on a classic.",
    },
    {
        title: "Unfinished bull game",
        link: "https://daverinoe.itch.io/uubtgwueuraattdtsy",
        image: "game_images/bull_game.png",
        banner_image: "game_images/bull_game.png",
        screenshot: "game_images/bull_game.png",
        alt: "A low-poly bull.",
        description: "Take revenge on a thief who dared to steal from you in a pottery store.",
    },
    {
        title: "The Huggen",
        link: "https://velopman.itch.io/the-huggen",
        image: "game_images/the_huggen.png",
        banner_image: "game_images/the_huggen.png",
        screenshot: "game_images/the_huggen.png",
        alt: "A squid with its tentacles outreached.",
        description: "Spread your love to the ships above in this QWOP inspired game.",
    },
    {
        title: "PHD: Printer Hate Department",
        link: "https://liioni.itch.io/phd",
        image: "game_images/phd.png",
        banner_image: "game_images/phd.png",
        screenshot: "game_images/phd.png",
        alt: "A pixel art man",
        description: "Debug the world with this puzzle platformer!",
    },
    {
        title: "No Thyme to Waste",
        link: "https://daverinoe.itch.io/no-thyme-to-waste",
        image: "game_images/no_thyme_to_waste.png",
        banner_image: "game_images/no_thyme_to_waste.png",
        screenshot: "game_images/no_thyme_to_waste.png",
        alt: "A pixel art fish",
        description: "Save the world one sale at a time in this aquaponics inspired game.",
    },
];
