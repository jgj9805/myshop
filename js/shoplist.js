fetch('./data/shoplist.json')
.then((res)=>res.json())
.then((res)=>{ 
        const rs = res.shoplist;
        let div =" "
        for(let i = 0; i < rs.length; i++){
            let color =""
            for(let j = 0 ; j < res.shoplist[i].color.length ; j++){
                color += `<span class="'+ ${res.shoplist[i].color[j]} +'"></span>`
            }    
            let news = ""
            for(let d=0; d < rs[i].news.length; d++){
                news += `<span>${rs[i].news[d]}</span>`
            }
            div +=
                `<div class="col-lg-3 my-5">
                <div class="card">
                    <a href="#">
                        <img src="${rs[i].img}" class="img-fluid" alt="${rs[i].img}">
                    </a>
                    <div class="card-body">
                        <ul class="pd-list">
                            <li>
                               ${color}
                            </li>
                            <li class="pd-title">
                                <h1>${rs[i].title}</h1>
                            </li>
                            <li>
                                <del>${rs[i].delprice}</del>
                                <br>
                                <strong>${rs[i].saleprice}</strong>
                            </li>
                            <li>
                                <p>${rs[i].content}</p>
                            </li>
                            <li class="last">
                                ${news}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
        }

        document.getElementById("row").innerHTML = div
    })
.catch((err)=> console.log(err));