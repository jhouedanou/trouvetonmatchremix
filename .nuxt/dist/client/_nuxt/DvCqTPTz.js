import{y as p,r as d,p as v,n as f,c as i,a as s,F as g,q as k,s as u,o as n,v as x,x as y,z as B,d as C,t as D}from"./B4E3WV-G.js";import{s as _}from"./8foywVBM.js";const b={class:"section"},w={class:"container"},R={class:"box"},V={class:"columns is-multiline"},q={class:"card"},z={class:"card-image"},F={class:"image"},M=["src","alt"],N={class:"card-content"},T={class:"radio"},E=["value","onChange"],$={__name:"[id]",setup(I){const c=p().params.id,o=d(null),r=d(null);v(async()=>{const{data:a}=await _.from("users").select("team").eq("id",c).single();a&&(r.value=a.team)});const m=f(()=>r.value==="biere"?bieres:sodas),h=async a=>{const{data:e}=await _.from("user_drinks").insert([{user_id:c,drink_choice:a}]).select();e&&router.push("/confirmation")};return(a,e)=>(n(),i("section",b,[s("div",w,[s("div",R,[e[1]||(e[1]=s("h2",{class:"title"},"Choisissez votre boisson",-1)),s("div",V,[(n(!0),i(g,null,k(u(m),t=>(n(),i("div",{key:t.id,class:"column is-3"},[s("div",q,[s("div",z,[s("figure",F,[s("img",{src:t.image,alt:t.nom},null,8,M)])]),s("div",N,[s("label",T,[x(s("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=l=>B(o)?o.value=l:null),value:t.id,onChange:l=>h(t.id)},null,40,E),[[y,u(o)]]),C(" "+D(t.nom),1)])])])]))),128))])])])]))}};export{$ as default};