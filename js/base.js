// add Search Engine Url here, The order must be the same as <a> tag
function addSearchEngineUrls(){
    let SearchEngineUrls = [""]
    SearchEngineUrls[0] = "https://duckduckgo.com/?t=ffab&q="
    SearchEngineUrls[1] = "https://www.bing.com/search?q="
    SearchEngineUrls[2] = "https://www.google.com/search?q="
    SearchEngineUrls[3] = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="
    SearchEngineUrls[4] = "https://www.zhihu.com/search?type=content&q="
    SearchEngineUrls[5] = "https://search.bilibili.com/all?keyword="
    SearchEngineUrls[6] = "https://www.youtube.com/results?search_query="
    SearchEngineUrls[7] = "https://en.wikipedia.org/w/index.php?search="
    SearchEngineUrls[8] = "https://www.reddit.com/search/?q="
    SearchEngineUrls[9] = "https://wiki.archlinux.org/index.php?search="
    return SearchEngineUrls
}


function setSearchEngine(text){
    document.getElementById("textInput").value = text + " "
}

function searchEngineLength() {
    length = document.getElementsByClassName("searchEngineLists").length
    return length
}

const numberOfClassesOfSearchEngineList = searchEngineLength()

function createTheSearchEngineMap(){
    const length = numberOfClassesOfSearchEngineList
    const SearchEngineUrls = addSearchEngineUrls()
    let searchEngines = new Map()
    for (let i = 0; i < length ;i++){
        let data = document.getElementsByClassName("searchEngineLists")
        let hrefValue = data[i].attributes.href.value.toString()
        searchEngines.set(hrefValue, SearchEngineUrls[i])
    }
    return searchEngines
}

function replaceSpaceToPlus(string){
    let returnStr = string.replaceAll(" ","+")
    returnStr.toString()
    return returnStr
}

function openNewTab(){
    const theMap = createTheSearchEngineMap()
    let searchText = document.getElementById("textInput").value
    let enteredText = searchText.split(" ")
    const url = theMap.get(enteredText[0])
    let perData = [""]
    let j = 0
    for (i = 1 ; i < enteredText.length ; i++){
        perData[j] = enteredText[i] 
        j++
    }
    let perfectData = ""
    for (i = 0 ; i < perData.length ; i++){
        perfectData = perfectData + "+" + perData[i]
    }
    window.open(url + perfectData)
}

function hiddenOrdisplayElement(){
    const status = document.getElementsByClassName("selectSearchEngineMenu")
    let statusDisply = status[0].style.display
    if (statusDisply == "" || statusDisply == undefined || statusDisply == "empty string" || statusDisply == "none"){
        status[0].style.display = "flex"
    }else{
        status[0].style.display = "none"
    }
}