// TODO: pass target and children as args
export function typingEffect(i: number) {
    // Little helper
    function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Make the content visible
    if (i === 0) {
        target.style.visibility = 'visible';
    }

    // When we've displayed all the nodes
    // Just start over
    if (i >= children.length) {
        i = 0;
        target.innerText = '';
    }

    // Append each node to the target code placeholder
    // And scroll that div if the code scrolls past it
    if (children.hasOwnProperty(i)) {
        target.appendChild(children[i]);

        target.scrollTop = target.scrollHeight;
    }

    // Step to the next node
    i++;

    // Repeat the process
    // after a variable amount of time
    setTimeout(function () {
        typingEffect(i);
    }, randomNumber(200, 500));
}