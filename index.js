
// 1.
let fullNames = document.querySelector("#fullName")

fullNames.textContent = `Hey, I'm ${datas.fullname}`


// 2.
let profils = document.querySelector("#profil")
profils.textContent = datas.profil

// 3.
let paragraphe = document.querySelector("#description")
paragraphe.textContent = `${datas.description}`
// 4.
let image = document.querySelector("#picture")
image.src = datas.picture

// 5.
let condition = document.querySelectorAll(".socials")

for (let ul = 0; ul < condition.length; ul++) {
    for (let k = 0; k < datas.socials.length; k++) {

        condition[ul].innerHTML += `<li>
    <a href="${datas.socials[k].url}"><img src="${datas.socials[k].link}" alt="${datas.socials[k].name}"></a>
  </li>`

    }

}


// 6.
let work = document.querySelector("#works")

for (let m = 0; m < datas.works.length; m++) {
  let technos = datas.works[m].technology;
  work.innerHTML += `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card">
    <img class="card-img-top" src="${datas.works[m].preview}" alt="datasWorksName">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${datas.works[m].name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
          ${
            technos.map(tech => 
              `<li><span class="card-link">${tech}</span></li>`
            ).join('')
          }
      </ul>
      <div class="row w-100">
        <div class="d-flex justify-content-center">
          <a href="${datas.works[m].url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
        </div>
      </div>
    </div>
  </div>
</div>`
  
}
// 7.
let experience = document.querySelector("#experiences")
for (let l = 0; l < datas.experiences.length; l++) {
  let duo = datas.experiences[l].technology
  experience.innerHTML += `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card h-100">
    <img class="card-img-top" src="${datas.experiences[l].url}" alt="datasExperiencessName">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[l].name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
        
      ${
        duo.map(tech =>  `
          <li>
             <span class="card-link">${tech}</span>
           </li>`
        ).join('')
      }
      </ul>
    </div>
  </div>
</div>`
  
}



// 8.
let email = document.querySelector("#mail")
console.log(email)

email.textContent = "datas-email"