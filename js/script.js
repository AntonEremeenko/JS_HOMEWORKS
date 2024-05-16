(function () {
    const selectListener = function (event) {
        const parentBlock = event.target.closest('div[class]');
        let block = null;
        if (parentBlock.classList.contains('block1')) {
            block = document.getElementsByClassName('block2')[0];
            const shownElements = block.getElementsByClassName('shown');
            for (let e of shownElements) {
                e.classList.remove('shown');
            }
        }
        // if (parentBlock.classList.contains('block2')) {
        //     block = document.getElementsByClassName('block3')[0];
        // }

        const idList = event.target.dataset.nextBlock.split(' ');
        for (let id of idList) {
            document.getElementById(id).className = 'shown';
        }
    };

    const items = document.getElementsByClassName('selectable-list');
    for (let i = 0; i < items.length; i++) {
        items.item(i).addEventListener('click', selectListener);
    }

    const hideShown = function () {
        const elements = document.getElementsByClassName('shown');
        while (elements.length > 0) {
            const element = elements.item(0);
            element.classList.remove('shown');
        }
    };

    const buy = function (event) {
        let boughtProducts = 'You bought:\n';

        const block3 = document.getElementsByClassName('block3')[0];

        for (let e of block3.getElementsByClassName('shown')) {
            if (e.id !== 'buy-button') {
                const name = e.getElementsByClassName('name')[0];
                const description = e.getElementsByClassName('description')[0];
                boughtProducts +=
                    name.innerText + ': ' + description.innerText + '\n';
            }
        }

        hideShown();
        // console.log(boughtProducts);
        alert(boughtProducts);
    };

    document.getElementById('buy-button').addEventListener('click', buy);

    const textColor = function (event) {
        event.target.className = 'color';
    };
    const out = function (event) {
        event.target.classList.remove('color');
    };
    const liElements = document.getElementsByTagName('li');
    for (let i = 0; i < liElements.length; i++) {
        liElements.item(i).addEventListener('mouseover', textColor);
        liElements.item(i).addEventListener('mouseout', out);
    }
})();
