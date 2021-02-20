browser.contextMenus.create({
    id:'Github1s',
    title:'Open with VSCode',
    type:'normal',
    contexts: ['page'],
    documentUrlPatterns:['https://github.com/*/*']
})

browser.contextMenus.onClicked.addListener((info)=>{
    const split = info.pageUrl.split('github.com')
    if(split.length == 2){
        const url = 'https://github1s.com/' + info.pageUrl.split('github.com')[1]
        chrome.tabs.create({url})
    }else{
        alert('Please use it in Github')
    }
})