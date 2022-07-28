console.log("Let's get this party started!");

const $gifArea = $('#gif');

const searchForm = document.querySelector('#searchform');
const $searchInput = $('#term');
//using Jquery will aid us in appending gif
//appending gif on button click
searchForm.addEventListener('submit', async function(e){
    e.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val('');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params: {
        q: searchTerm,
        api_key: "nDlPxQTt76UIXt1CFNOxbk7qbPKrTf2s"
    }})
    addGif(res.data);

})

//adding gif function
async function addGif(res){
    let numOfResult = res.data.length;
    if(numOfResult){
        let Idx = Math.floor(Math.random() * numOfResult);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
          src: res.data[Idx].images.original.url,
          class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
}
}

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    $gifArea.empty();
})