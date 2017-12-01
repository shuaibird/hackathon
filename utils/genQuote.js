const quotes = [
    'EVERYTHING IS GONNA BE ALRIGHT',
    'IT\'S A BEAUTIFUL DAY',
    'EAT, PRAY & LOVE',
    'LIVE FAST, DIE YOUNG',
    'BETTER BURN OUT THAN FADING AWAY',
]

export default () => quotes[Math.floor(Math.random() * quotes.length)]
