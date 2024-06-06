'use strict';

(function () {
    let arr = [1, 2, 3, 4];
    const itr = function (arr) {
        const dataArr = Array.from(arr);
        let currenIndex = 0;

        return {
            next() {
                let done = false;

                if (currenIndex + 1 > dataArr.length) {
                    done = true;
                }

                const result = {
                    value: dataArr[currenIndex],
                    done,
                };

                currenIndex += 1;

                return result;
            },
        };
    };

    const show = itr(arr);
    console.log(show);

    console.log(show.next());
    console.log(show.next());
    console.log(show.next());
    console.log(show.next());
    console.log(show.next());
})();
