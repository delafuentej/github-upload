
const axios = require('axios');

const args=process.argv.slice(2)

let app_id = '88a938d5';
let app_key =  '3adfb16b97d472e6229aa9986cc5f6a0';
let language = "en-gb";
let word_id = args[0];

if(args.length===0){
    console.log("Please introduce a word")
}

if(args.length===1){

    axios.get(`https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word_id}`, {
        headers: {
        'app_id': app_id,
        'app_key': app_key
        }
    })
    .then((resp) => {
        const dataObj=resp.data;
       // console.log(dataObj)
        let word=dataObj.results[0].lexicalEntries[0].entries[0].senses[0].subsenses;
        let type=dataObj.results[0].lexicalEntries[0].lexicalCategory.text;
        
        console.log(`${word_id} ${type}`);
        
        let counter=0;
        for(el of word){
            counter+=1;
            console.log(`${counter}. ${el.shortDefinitions[0]}`)
        }
        
    })
    .catch((err)=>{
        console.log(err)
    });


}
