const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const Missel = document.querySelector('.Missel')
const Missel1= document.querySelector('.Missel1')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
    
    mario.classList.remove('jump');
    
}, 500);

}

const loop = setInterval(() => {

    console.log('loop')

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const Misselposition = Missel.offsetLeft
    const Missel1position = Missel1.offsetLeft


    if (tuboPosition < 100 && tuboPosition > 0 && marioPosition < 80 ) {
       
        
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/Death.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '50px'

        Missel.style.animation = 'stop';
        Missel.style.left = `${Misselposition}px`

        Missel1.style.animation = 'stop';
        Missel1.style.left = `${Missel1position}px`;
        
        clearInterval(loop)
    }

    if (Misselposition < 100 && Misselposition > 0 && marioPosition < 75 ) {

        Missel.style.animation = 'none';
        Missel.style.left = `${Misselposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/Death.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '50px'

        tubo.style.animation = 'stop';
        tubo.style.left = `${tuboPosition}px`;

        Missel1.style.animation = 'stop';
        Missel1.style.left = `${Missel1position}px`;


        learInterval(loop)
    }

    if (Missel1position < 100 && Missel1position > 0 && marioPosition < 75 ) {

        Missel1.style.animation = 'none';
        Missel1.style.left = `${Missel1position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/Death.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '50px'

        tubo.style.animation = 'stop';
        tubo.style.left = `${tuboPosition}px`;

        Missel.style.animation = 'stop';
        Missel.style.left = `${Misselposition}px`;


        learInterval(loop)
    }
}, 10);
document.addEventListener('keydown', jump);