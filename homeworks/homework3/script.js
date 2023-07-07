const arr = []
function getMyAtributes(attr, type, element, value) {
    let allTypes = {
        div: ['class', 'id'],
        p:['class', 'id'],
        span: ['class', 'id'],
        h2: ['class', 'id'],
        h3: ['class', 'id'],
        img: ['class', 'id', 'src'],
        label: ['class', 'id', 'for', 'value', 'type'],
        input: ['class', 'id', 'placeholder', 'value', 'type', 'name'],
    }
    for(let item in attr) {
        let findExistingItem = allTypes[type]?.find(correctAttr => item == correctAttr)
        allTypes[type] && findExistingItem && element.setAttribute(item, attr[item])
    }
    element.innerHTML = value
}

class El {
    constructor(type, attr, value, childrenArr) {
          this.parent = document.createElement(type)
          document.body.appendChild(this.parent)
            getMyAtributes(attr, type, this.parent, value)
            childrenArr.forEach((item, index) => {
                    this.draw(item.type, item.attr, item.value, item.myChildN)
            })
        console.log(this.parent)
    }
    draw(type, attr, value, myChildN) {
        let child = document.createElement(type)
        getMyAtributes(attr, type, child, value)
       arr.length && (arr[0]?.['parent'].appendChild(child) + 
                     (arr[0]['children'] -= 1))
                  || this.parent.appendChild(child);
        myChildN && arr.push({parent: child, children: myChildN})
        arr[0]?.['children'] < 1 && arr.shift()
   }
}

let NewEl = new El('div', {class: 'divElement', id: 'idDivElement'}, 'Parent', [
    {type: 'p', attr: {class: 'pElement'}, value: ' First /', myChildN: 0},
    {type: 'h2', attr: {class: 'h2Element'}, value: ' Second /', myChildN: 0},
    {type: 'h3', attr: {class: 'h3Element'}, value: ' Third /', myChildN: 0},
    {type: 'div', attr: {class: 'divElement'}, value: ' Fourth /', myChildN: 3},
    {type: 'div', attr: {class: 'divElement'}, value: ' Fifth /', myChildN: 2},
    {type: 'div', attr: {class: 'divElement'}, value: ' Sixth /', myChildN: 0},
    {type: 'div', attr: {class: 'divElement'}, value: ' Seventh /', myChildN: 0},
    {type: 'span', attr: {class: 'spanElement'}, value: ' Eighth /', myChildN: 0},
    {type: 'span', attr: {class: 'spanElement'}, value: ' Ninth /', myChildN: 0},
    {type: 'div', attr: {class: 'divElement'}, value: ' Tenth /', myChildN: 2},
    {type: 'p', attr: {class: 'pElement'}, value: ' Eleventh /', myChildN: 0},
    {type: 'p', attr: {class: 'pElement'}, value: ' Twelfth /', myChildN: 0},
    {type: 'img', attr: {class: 'imgnElement', id: 'McLaren', src: 'https://www.detroitnews.com/gcdn/presto/2022/02/18/PDTN/bf6d85ae-1c56-411c-8214-d14f5448cf9c--1x-1_-_2022-02-18T165358.518.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp'}, myChildN: 0},
])