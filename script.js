function fazerGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

const listInfo = (animes) =>{
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    let director = document.createElement("li");
    let producer = document.createElement("li");
    let release_date = document.createElement("li");
    let running_time = document.createElement("li");
    let rt_score = document.createElement("li");

    div.classList.add("info");

    director.innerHTML = "Director: " + animes.director;
    producer.innerHTML = "Producer: " + animes.producer;
    release_date.innerHTML = "Release date: " + animes.release_date;
    running_time.innerHTML = "Running time: " + animes.running_time;
    rt_score.innerHTML = "Score: " + animes.rt_score;

    ul.appendChild(director);
    ul.appendChild(producer);
    ul.appendChild(release_date);
    ul.appendChild(running_time);
    ul.appendChild(rt_score);

    div.appendChild(ul);

    return div;
}
function sinopse (animes){
    let div = document.createElement("div");
    let sinopse = document.createElement("p");
    div.classList.add("sinopse");
    sinopse.innerHTML = "Description: " + animes.description;
    div.appendChild(sinopse);
    return div;
}

function img (animes){
    let divImage = document.createElement("div");
    let imagem = document.createElement("img");
    divImage.classList.add("image");
    imagem.setAttribute('width',"400px")
    imagem.innerHTML = imagem.setAttribute('src',animes.movie_banner )
    divImage.appendChild(imagem);
    return divImage;
}
function criartag(animes){
    console.log(animes)
    let div = document.createElement("div");
    let div_title = document.createElement("div");
    div.classList.add("conteudo");
    div_title.classList.add("titles");
    
    let titulo = document.createElement("h2")
    let titulo_original = document.createElement("h3")

    titulo.innerHTML = animes.title;
    titulo_original.innerHTML = "original title: " + animes.original_title;

    div_title.appendChild(titulo);
    div_title.appendChild(titulo_original);
    div.appendChild(div_title);
    div.appendChild(img(animes));
    div.appendChild(sinopse(animes));
    div.appendChild(listInfo(animes))
    
    return div;
}

function main(){
    let data = fazerGet("https://ghibliapi.herokuapp.com/films");
    let animes = JSON.parse(data);
    let conteudo = document.getElementById("conteudos");

    animes.forEach(element =>{
        let tag = criartag(element);
        conteudo.appendChild(tag);
    })
}

main()

