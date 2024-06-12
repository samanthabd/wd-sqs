(function(){
  console.log('window')
  console.log(window)
  console.log('window.top')
  console.log(window.top)

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
          console.log(mutation)
          let isAdditiveMutation = !!mutation.addedNodes.length
          if (!isAdditiveMutation) {
            continue
          }

          // let addedNode = mutation.addedNodes[0];

          // if (addedNode.classList.contains("memo")) {
          //   let richText = addedNode.querySelector(".richText");
          //   if (richText) markdownPre(richText);
          // }
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