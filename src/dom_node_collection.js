class DOMNodeCollection {
    constructor(htmlArray) {
        this.htmlArray = htmlArray;
    }

    html(arg) {
        if (arg === undefined) {
            return this.htmlArray[0].innerHTML;
        } else {
            this.htmlArray.forEach( (htmlElement) => {
                htmlElement.innerHTML = arg;
            })
        }
    }

    empty() {
        this.html("");
    }

    append(arg){
        if (arg instanceof DOMNodeCollection){
            arg.htmlArray.forEach (element => {
                this.htmlArray.forEach (outerElement => {
                    outerElement.innerHTML += element.outerHTML;
                })
            })
        } else if (arg instanceof HTMLElement){
            this.htmlArray.forEach (outerElement => {
                outerElement.innerHTML += arg.outerHTML;
            })
        } else if (typeof arg === 'string') {
            this.htmlArray.forEach (outerElement => {
                outerElement.innerHTML += arg;
            })
        }
    }

    attr(attributeName, attributeValue) {
        if (attributeValue !== undefined) {
            this.htmlArray.forEach((element) => {
                element.setAttribute(attributeName, attributeValue);
            })
        } 
        else {
            let attrArr = []
            this.htmlArray.forEach((element) => {
                attrArr.push(element.getAttribute(attributeName));
            })
            return attrArr;
        }
    }


}

module.exports = DOMNodeCollection;