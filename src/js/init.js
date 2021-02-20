let list = document.getElementsByClassName("pagehead-actions")

console.log(chrome.contextMenus)

if (list.length > 0) {
    list = list[0]
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.href = 'https://github1s.com/' + window.location.href.split('github.com')[1]
    a.target = '_black'
    a.className = 'btn btn-sm tooltipped tooltipped-s'
    a.style.height = '28px'
    a.style.paddingBottom = '0'
    a.style.paddingTop = '2px'
    a.innerHTML = base64Logo
    a.setAttribute('aria-label','Open with VSCode')

    li.append(a)
    list.insertBefore(li, list.getElementsByTagName("li")[0])
}