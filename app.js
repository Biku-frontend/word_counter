const textArea = document.getElementById("textarea");
// console.log(textArea);

textArea.addEventListener("input", function(){
    const text = this.value;
    // console.log(text);

    // characters Count
    const characters = text.length;

    document.getElementById("characters-count").innerHTML = characters;
    // console.log(characters);


    // Text Trim=>
   const textTrim = text.trim();
//    console.log(textTrim)


    // Word Count
    const words = text.split(" ");

    // cleanList 
    // pass anonymous func. to use "filter"
    // return not equal blank (!= ")
    
    const cleanList = words.filter(function(e){
        return e != "";
    })
    // console.log(cleanList);
    // console.log(words);
  
    document.getElementById("word-count").innerHTML = cleanList.length
})