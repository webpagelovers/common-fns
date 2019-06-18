import {date} from '../src/index'


window.onload = function () {
    document.getElementsByTagName('body')[0].innerHTML = date.formatDate()
}
