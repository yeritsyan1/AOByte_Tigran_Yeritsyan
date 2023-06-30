    function el(type, attr, value, childFunc, childrenArr) {
        // create parent
        this.parent = document.createElement(type)
        document.body.appendChild(parent)
        parent.setAttribute('class', attr.class)
        parent.innerHTML = value
        let arr = []
        // create child
         childFunc = (type, attr, value, myChildN) => {
             child = document.createElement(type)
             child.setAttribute('class', attr.class)
             child.innerHTML = value
             if(arr.length >= 1) {
                 arr[0]?.['parent'].appendChild(child)
                 --arr[0]['children']
             } else {
                 this.parent.appendChild(child)
             }
            myChildN && arr.push({parent: child, children: myChildN})
            arr[0]?.children < 1 && arr.shift()
        }

       childrenArr.forEach((item, index) => {
        childFunc(item.type, item.attr, item.value, item.myChildN)
       })
       console.log(this.parent)
    }

       el('div', {class: 'divElement'}, null, null,
        [
            {type: 'p', attr: {class: 'pElement'}, value: ' First /', myChildN: 0},
            {type: 'p', attr: {class: 'pElement'}, value: ' Second /', myChildN: 0},
            {type: 'p', attr: {class: 'pElement'}, value: ' Third /', myChildN: 0},
            {type: 'div', attr: {class: 'divElement'}, value: ' Fourth /', myChildN: 3},
            {type: 'div', attr: {class: 'divElement'}, value: ' Fifth /', myChildN: 2},
            {type: 'div', attr: {class: 'divElement'}, value: ' Sixth /', myChildN: 0},
            {type: 'div', attr: {class: 'divElement'}, value: ' Seventh /', myChildN: 0},
            {type: 'span', attr: {class: 'spanElement'}, value: ' Eighth /', myChildN: 0},
            {type: 'span', attr: {class: 'spanElement'}, value: ' Ninth /', myChildN: 0},
        ]
    )