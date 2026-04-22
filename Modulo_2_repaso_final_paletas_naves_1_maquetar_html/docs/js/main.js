const o=document.querySelector(".js__paletesUl");let s=[];function a(e){let l="";for(let t=0;t<e.colors.length;t++)l+=`<li class="color" style="background-color:#${e.colors[t]}"></li>`;return` <li class="paletteCard">
            <h3>${e.name}</h3>
            <ul class="colors">
${l}
            </ul>
          </li>`}function r(){let e="";for(const l of s)e+=a(l);o.innerHTML=e}fetch("https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json").then(e=>e.json()).then(e=>{console.log(e.palettes),s=e.palettes,r()});
//# sourceMappingURL=main.js.map
