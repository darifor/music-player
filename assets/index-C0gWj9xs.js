(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const r=[{title:"Flying Free",author:"John Doe",src:"./audio/song1.mp3",img:"./img/cover1.png"},{title:"Down Under",author:"Alex Smith",src:"./audio/song2.mp3",img:"./img/cover2.png"},{title:"That's All",author:"Lucy Pevensie",src:"./audio/song3.mp3",img:"./img/cover3.png"},{title:"Telephone Line",author:"Alicia Keys",src:"./audio/song4.mp3",img:"./img/cover4.png"}];let i=0,t=new Audio(r[i].src);document.getElementById("prevButton").addEventListener("click",p);document.getElementById("playButton").addEventListener("click",g);document.getElementById("nextButton").addEventListener("click",m);t.addEventListener("timeupdate",f);t.addEventListener("loadedmetadata",function(){document.getElementById("progressBar").value=0,document.getElementById("currentTime").textContent=d(0),document.getElementById("duration").textContent=d(t.duration||0)});function g(){t.paused?(t.play(),document.getElementById("playButton").innerHTML='<i class="fa-solid fa-pause"></i>'):(t.pause(),document.getElementById("playButton").innerHTML='<i class="fa-solid fa-play"></i>')}function m(){i=(i+1)%r.length,l(i)}function p(){i=(i-1+r.length)%r.length,l(i)}function l(n){t.src=r[n].src,document.getElementById("title").textContent=r[n].title,document.getElementById("author").textContent=r[n].author,document.getElementById("cover").src=r[n].img,document.getElementById("cover").alt=r[n].author,document.getElementById("playButton").innerHTML='<i class="fa-solid fa-pause"></i>',t.play()}function f(){const n=document.getElementById("progressBar");n.value=t.currentTime/t.duration*100,document.getElementById("currentTime").textContent=d(t.currentTime),document.getElementById("duration").textContent=d(t.duration)}function d(n){const u=Math.floor(n/60),c=Math.floor(n%60);return`${u}:${c<10?"0"+c:c}`}document.getElementById("progressBar").addEventListener("input",function(){t.currentTime=this.value/100*t.duration});l(i);document.getElementById("playButton").innerHTML='<i class="fa-solid fa-play"></i>';t.addEventListener("ended",m);
