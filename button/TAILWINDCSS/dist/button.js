const btn = document.querySelector(".btn");
const div1 = "HOVER ME";
const div2 = "HELLO ME";
const mainContainer = document.querySelector('.main-container');

    div1.split("").map((letter, i) => {
        const container = document.createElement('div');
        container.classList.add('uppercase','text-6xl', 'flex', 'items-center', 'relative');
        const firstWord = document.createElement('div');
        firstWord.setAttribute("key",`${i}`);
        firstWord.classList.add('duration-300', 'origin-top', 'ease-in-out', 'transition-transform','group-hover:scale-y-0');
        firstWord.setAttribute("style",`transition-delay: ${i * 75}ms`);
        firstWord.innerHTML = letter;
        container.appendChild(firstWord);
        mainContainer.append(container);
    })
    div2.split("").map((letter, i) => {
        const container = document.createElement('div');
        container.classList.add('uppercase', 'text-6xl', 'absolute', 'flex', 'items-center', 'bottom-0');
        container.style.left = `calc(50% - ${div2.length * 15}px + ${i * 28}px)`;
        const secondWord = document.createElement('div');
        secondWord.setAttribute("key",`${i}`);
        secondWord.classList.add('duration-300','scale-y-0','origin-bottom', 'ease-in-out', 'transition-transform','group-hover:scale-y-100');
        secondWord.setAttribute("style",`transition-delay: ${i * 75}ms`);
        secondWord.innerHTML = letter;
        container.appendChild(secondWord);
        mainContainer.append(container);
    })
    


