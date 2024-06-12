(function(){
  console.log('window')
  console.log(window)
  console.log('window.top')
  console.log(window.top)

  function createLoadingDiv(){
    let loadingEl = w.document.createElement('div');
    let loadingText = w.document.createElement('span');
   loadingText.innerText = "Loading..."
             loadingEl.insertAdjacentElement('afterbegin', loadingText)
             loadingEl.style.position = "absolute"
             loadingEl.style.height = "100%"
             loadingEl.style.width = "100%"
             loadingEl.style.top = "0"
             loadingEl.style.left = "0"
   loadingEl.style.zIndex = "500"
             loadingEl.style.backdropFilter = "blur(10px)"
             loadingEl.style.display = "flex"
             loadingEl.style.justifyContent = "center"
             loadingEl.style.alignItems = "center"
             loadingText.style.fontSize = "5rem"
    return loadingEl;
  }

  function init(w) {
   
   function observeMain() {
     const targetNode = w.document.querySelector("body");
     const config = {
       attributes: false,
       attributeOldValue: false,
       childList: true,
       subtree: true,
     };
     const callback = (mutationList, observer) => {
       for (const mutation of mutationList) {
        // console.log(mutation)
         let isAdditiveMutation = !!mutation.addedNodes.length
         if (!isAdditiveMutation) {
           continue
           }
           
           let addedNode = mutation.addedNodes[0];
           if (addedNode.classList && addedNode.classList.contains("dialog-text-post-editor")) {	
           
           //  addedNode.insertAdjacentElement('afterbegin', loadingEl)
             
          
             let title = addedNode.querySelector('.title-text');
             let bodyBlock = addedNode.querySelector('.body-block');
             let firstTab = bodyBlock.childNodes[0];
             let coachTab = bodyBlock.querySelector('.dialog-tab-coach');
             coachTab.classList.remove('hidden')
             coachTab.style.left = "0";
             coachTab.style.zIndex= "300";
            // coachTab.style.color = "#3e3e3e";
            // coachTab.style.borderBottomColor = "#3e3e3e";
             firstTab.classList.add('hidden');
        //      let label = w.document.querySelector('.tabbed-header-container [data-tab]')
        //    let activeClass = label.classList[1]
        //    labelParent = label.parentNode;
           
        //  //let labelParent = addedNode.parentNode;
        //      console.log(labelParent);
        //      let i = 0;
             
        //      for (el of labelParent.childNodes) {
        //    console.log(el)
        //        if (i == 0) {
        //          //el.classList.remove(activeClass);
        //        }
        //        else if (el.innerText.toLocaleLowerCase()== "coach") {
        //         el.click();
        //           el.innerText = "Coach Details"
        //        }
        //        i++
        //      }
             
         //   let richText = addedNode.querySelector(".richText");
         //   if (richText) markdownPre(richText);
           }
         // console.log(mutation)
         
       if (mutation?.target?.classList.contains('tabbed-header-container')) {
           console.log(mutation)
           let label = w.document.querySelector('.tabbed-header-container [data-tab]')
           let activeClass = label.classList[1]
           labelParent = label.parentNode;
           
         //let labelParent = addedNode.parentNode;
             console.log(labelParent);
             let i = 0;
             
             for (el of labelParent.childNodes) {
           console.log(el)
               if (i == 0) {
                 //el.classList.remove(activeClass);
               }
               else if (el.innerText.toLocaleLowerCase()== "coach") {
                el.click();
                el.innerText = "Coach Details"
               }
               i++
             }
           loadingEl.remove();
       }
       }
         // if (mutation.target.className == "memos") {
         //   observeMemosLoad()
         //   observeMemoEdit()
         //   // And now we don't need this observer anymore.
         //   mainObserver.disconnect()
         // }
       }
   // }
     const mainObserver = new MutationObserver(callback);
     mainObserver.observe(targetNode, config);
   }
   observeMain();
 }

  init(window.top)
})()