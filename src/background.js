chrome.runtime.onInstalled.addListener(async ()=>{
    const url = chrome.runtime.getURL('hello.html')
    const tab = await chrome.tabs.create({url})
    console.log(`create: ${tab.id}`)
})

chrome.contextMenus.create({
    id:'Github1s',
    title:'Open with VSCode',
    type:'normal',
    contexts: ['page']
})

console.log(chrome.contextMenus.onClicked)

chrome.contextMenus.onClicked.addListener(()=>{
    console.log('click')
})