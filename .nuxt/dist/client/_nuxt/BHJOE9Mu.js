import{A as c,_ as q,m as N,r as m,p as U,n as V,c as i,a as s,T as h,U as z,v as a,V as n,x as d,d as v,W as x,F as X,q as S,o as r,t as A}from"./B4E3WV-G.js";import{s as M}from"./8foywVBM.js";const D=c("/img/logobiere.png"),P=c("/img/logosoda.png"),w=[{id:1,nom:"Abobo",zone:"nord"},{id:2,nom:"Adjamé",zone:"centre"},{id:3,nom:"Attécoubé",zone:"centre"},{id:4,nom:"Cocody",zone:"est"},{id:5,nom:"Koumassi",zone:"sud"},{id:6,nom:"Marcory",zone:"sud"},{id:7,nom:"Plateau",zone:"centre"},{id:8,nom:"Port-Bouët",zone:"sud"},{id:9,nom:"Treichville",zone:"centre"},{id:10,nom:"Yopougon",zone:"ouest"}],I={quartiers:w},E={class:"section"},F={class:"container"},L={class:"columns"},T={class:"column"},R={class:"p-4"},j={class:"columns"},k={class:"column is-4"},B={class:"image"},C=["src"],G={class:"field m-2"},$={class:"file"},J={class:"file-label"},O={class:"column is-8"},W={class:"field m-2"},Y={class:"control"},H={class:"field m-2"},K={class:"control"},Q={class:"field m-2"},Z={class:"control"},ee={class:"field m-2"},se={class:"control gender-group"},te={class:"radio mr-4"},le={class:"radio mr-4"},oe={class:"field m-2"},ae={class:"control"},ie={class:"field m-2"},ne={class:"control"},de={class:"select is-fullwidth"},re=["value"],ue={class:"field m-2"},me={class:"control"},pe={class:"radio mr-4"},ve={class:"radio"},ce=2*1024*1024,fe={__name:"inscription",setup(be){const f=async()=>{const{data:o,error:e}=await M.from("users").insert([{first_name:t.value.firstName,last_name:t.value.lastName,email:t.value.email,phone:t.value.phone,quartier:t.value.quartier,gender:t.value.gender,photo:t.value.photo,team:t.value.team}]).select();if((e==null?void 0:e.code)==="23505"){alert("Vous êtes déjà inscrit dans notre base de données");return}o&&b.push(`/choix-boisson/${o[0].id}`)},b=N(),u=m(null),_=m(I.quartiers),t=m({firstName:"",lastName:"",email:"",phone:"",quartier:"",gender:"",photo:null,team1:!1,team2:!1});U(()=>{const o=localStorage.getItem("formData");o&&(t.value=JSON.parse(o))}),V(()=>`${t.value.firstName} ${t.value.lastName}`);const g=["image/jpeg","image/png"],y=o=>{const e=o.target.files[0];if(!e)return;if(!g.includes(e.type)){alert("Format invalide. Utilisez uniquement JPG ou PNG"),o.target.value="";return}if(e.size>ce){alert("Image trop volumineuse. Maximum 2Mo"),o.target.value="";return}const l=new FileReader;l.onload=p=>{u.value=p.target.result,t.value.photo=p.target.result},l.readAsDataURL(e)};return(o,e)=>(r(),i("section",E,[s("div",F,[s("div",L,[s("div",T,[s("div",R,[s("form",{onSubmit:h(f,["prevent"]),class:"box"},[s("div",j,[s("div",k,[s("figure",B,[u.value?(r(),i("img",{key:0,id:"blenheim",src:u.value,alt:"Photo de profil"},null,8,C)):z("",!0)]),s("div",G,[e[10]||(e[10]=s("label",{class:"label"},"Photo",-1)),s("div",$,[s("label",J,[s("input",{class:"file-input",type:"file",onChange:y,accept:"image/*",capture:"user"},null,32),e[9]||(e[9]=s("span",{class:"file-cta"},[s("span",{class:"file-label"},"Choisir une photo")],-1))])])])]),s("div",O,[s("div",W,[e[11]||(e[11]=s("label",{class:"label"},"Prénom",-1)),s("div",Y,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>t.value.firstName=l),required:""},null,512),[[n,t.value.firstName]])])]),s("div",H,[e[12]||(e[12]=s("label",{class:"label"},"Nom",-1)),s("div",K,[a(s("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>t.value.lastName=l),required:""},null,512),[[n,t.value.lastName]])])]),s("div",Q,[e[13]||(e[13]=s("label",{class:"label"},"Email",-1)),s("div",Z,[a(s("input",{class:"input",type:"email","onUpdate:modelValue":e[2]||(e[2]=l=>t.value.email=l),required:""},null,512),[[n,t.value.email]])])]),s("div",ee,[e[16]||(e[16]=s("label",{class:"label"},"Genre",-1)),s("div",se,[s("label",te,[a(s("input",{type:"radio","onUpdate:modelValue":e[3]||(e[3]=l=>t.value.gender=l),value:"homme"},null,512),[[d,t.value.gender]]),e[14]||(e[14]=v(" Homme "))]),s("label",le,[a(s("input",{type:"radio","onUpdate:modelValue":e[4]||(e[4]=l=>t.value.gender=l),value:"femme"},null,512),[[d,t.value.gender]]),e[15]||(e[15]=v(" Femme "))])])]),s("div",oe,[e[17]||(e[17]=s("label",{class:"label"},"Téléphone",-1)),s("div",ae,[a(s("input",{class:"input",type:"tel","onUpdate:modelValue":e[5]||(e[5]=l=>t.value.phone=l),required:"",pattern:"[0-9]{10}",placeholder:"XX XX XX XX XX"},null,512),[[n,t.value.phone]])])]),s("div",ie,[e[19]||(e[19]=s("label",{class:"label"},"Quartier d'Abidjan",-1)),s("div",ne,[s("div",de,[a(s("select",{"onUpdate:modelValue":e[6]||(e[6]=l=>t.value.quartier=l),required:""},[e[18]||(e[18]=s("option",{value:""},"Sélectionnez un quartier",-1)),(r(!0),i(X,null,S(_.value,l=>(r(),i("option",{key:l.id,value:l.nom},A(l.nom),9,re))),128))],512),[[x,t.value.quartier]])])])]),s("div",ue,[e[22]||(e[22]=s("label",{class:"label"},"Équipe",-1)),s("div",me,[s("label",pe,[a(s("input",{type:"radio","onUpdate:modelValue":e[7]||(e[7]=l=>t.value.team=l),value:"biere"},null,512),[[d,t.value.team]]),e[20]||(e[20]=s("img",{src:D,alt:""},null,-1))]),s("label",ve,[a(s("input",{type:"radio","onUpdate:modelValue":e[8]||(e[8]=l=>t.value.team=l),value:"soda"},null,512),[[d,t.value.team]]),e[21]||(e[21]=s("img",{src:P,alt:""},null,-1))])])]),e[23]||(e[23]=s("div",{class:"field m-2 mt-5"},[s("div",{class:"control"},[s("button",{class:"button is-fullwidth",type:"submit"}," S'inscrire ")])],-1))])])],32)])])])])]))}},ye=q(fe,[["__scopeId","data-v-1f819828"]]);export{ye as default};