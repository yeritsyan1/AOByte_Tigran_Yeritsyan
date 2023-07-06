    function el(type, attr, value, childrenArr) {
        // create parent
        this.parent = document.createElement(type)
        document.body.appendChild(parent)
        for(let item in attr ) {
           this.parent.setAttribute(item, attr[item])
        }
        parent.innerHTML = value
        const arr = []
        // create child
         const childFunc = (type, attr, value, myChildN) => {
             child = document.createElement(type)
             for(let item in attr) {
                child.setAttribute(item, attr[item])
             }
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

       childrenArr.forEach((item) => {
        childFunc(item.type, item.attr, item.value, item.myChildN)
       })
       console.log(this.parent)
    }

       el('div', {class: 'divElement', id: 'idDivElement'}, null,
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
            {type: 'img', attr: {class: 'imgnElement', id: 'McLaren', src: 'https://www.detroitnews.com/gcdn/presto/2022/02/18/PDTN/bf6d85ae-1c56-411c-8214-d14f5448cf9c--1x-1_-_2022-02-18T165358.518.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp'}, myChildN: 0},
        ]
    )