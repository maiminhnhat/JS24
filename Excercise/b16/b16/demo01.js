const demo01 = () => {
    const div = document.getElementById('cha')
    // Lay con cua div o vi tri thu 1
    const p1 = div.children[1]

    // Lay element lien sau
    const p2 = p1.nextElementSibling

    // Thay doi inline css
    p2.style.color = "red"
    p2.style.backgroundColor = "yellow"
}

const demo02 = () => {
    // Tao the moi: <a></a>
    const a = document.createElement('a')
    a.innerHTML = "Link ne"
    a.href = "https://google.com"

    const div = document.getElementById('cha')
    div.appendChild(a)
}

const demo03 = () => {
    const p1 = document.getElementById('cha').children[1]
    // Xoa p1
    p1.remove()
}

function main() {
    const buttons = document.getElementsByTagName('button')
    buttons[0].addEventListener('click', demo01)
    buttons[1].addEventListener('click', demo02)
    buttons[2].addEventListener('click', demo03)
}

main()