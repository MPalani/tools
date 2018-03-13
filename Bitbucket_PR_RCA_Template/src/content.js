(function (chrome) {
  let prCreateButton = document.getElementById("show-create-pr-button");
  prCreateButton.addEventListener("click", ()=>{
    setTimeout(() => {
      let descField = document.getElementById("pull-request-description");
      descField.oninput = () => {
        descField.style.cssText = 'height: auto';
        const scrollHeightVal = descField.scrollHeight;
        descField.style.cssText = 'height:' + scrollHeightVal + 'px';
        document.getElementsByClassName("expandingText")[0].style.cssText= "position: relative; height:" + scrollHeightVal + "px";
      };
      descField.value = `Problem Description:
      ================
      
      Solution Provided:
      ==============
      
      API Changes:
      ===========
      
      Model Changes:
      =============
      
      Migration/Package-Upgrade support:
      ============================
      
      UT details/TIMS link:
      ================`;

      const scrollHeightVal = descField.scrollHeight;
      descField.style.cssText = 'height:' + scrollHeightVal + 'px';
      descField.blur();
      document.getElementsByClassName("expandingText")[0].style.cssText= "position: relative; height:" + scrollHeightVal + "px";
    }, 200);
  }, false);
}(chrome));