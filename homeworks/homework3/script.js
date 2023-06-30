const arr = []
class El {
    constructor(type, attr, value, childrenArr) {
          this.parent = document.createElement(type)
          document.body.appendChild(this.parent)
          this.parent.setAttribute('class', attr.class)
          this.parent.innerHTML = value
            childrenArr.forEach((item, index) => {
                    this.draw(item.type, item.attr, item.value, item.myChildN)
            })
        console.log(this.parent)
    }
    draw(type, attr, value, myChildN) {
        let child = document.createElement(type)
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
}

let NewEl = new El('div', {class: 'divElement'}, 'Parent', [
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

])