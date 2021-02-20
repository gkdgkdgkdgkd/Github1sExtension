chrome.runtime.onInstalled.addListener(()=>{
    const url = chrome.runtime.getURL('')
    const tab = chrome.tabs.create({url})
    console.log(tab)
    console.log('???')
    chrome.contextMenus.create({
        id:'32423',
        title:'324',
        type:'normal',
        contexts:['page'],
    })

    chrome.contextMenus.onClicked.addListener(()=>{
        console.log('click')
    })
})

function aa(info,tab){
    console.log(info)
    console.log(tab)
    console.log('ccc')
}