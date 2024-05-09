(function () {
    const arr = [1, 2, [1.1, 1.2, 1.3], 3];

    const generateList = function (array) {
        if (array.length === 0) {
            return;
        }

        const ul = document.createElement('ul');

        for (let i = 0; i < array.length; i++) {
            const li = document.createElement('li');
            if (Array.isArray(array[i])) {
                li.appendChild(generateList(array[i]));
            } else {
                li.innerHTML = array[i];
            }
            ul.appendChild(li);
        }
        return ul;
    };
    const result = generateList(arr);
    document.body.appendChild(result);
    console.log(result);
})();
