'use strict';
(function(){
    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }
    const deepFreeze = function(obj) {
        const propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(function(name) {
            const prop = obj[name];

            if (typeof prop === 'object' && prop !== null) deepFreeze(prop);
        });

        return Object.freeze(obj);
    }

    deepFreeze(user);
    console.log(Object.isFrozen(user.data.d.d1));
    console.log(user);
    user.data.f = 3;
    user.data.d.b1 = 5;

})()