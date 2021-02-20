chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
        id:'32423',
        title:'324',
        contexts:['page']
    })
})