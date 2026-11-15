document.addEventListener('DOMContentLoaded',function(){
  var mb=document.getElementById('menu-btn'),mn=document.getElementById('mobile-nav');
  if(mb){mb.addEventListener('click',function(){var closed=mn.classList.toggle('hidden');mb.setAttribute('aria-expanded',String(!closed));});}
  var fb=document.querySelectorAll('.filter-btn'),cards=document.querySelectorAll('.project-card');
  fb.forEach(function(b){b.addEventListener('click',function(){
    fb.forEach(function(x){x.classList.remove('active');});b.classList.add('active');
    var f=b.dataset.filter;cards.forEach(function(c){c.classList.toggle('hidden',f!=='all'&&c.dataset.category!==f);});
  });});
  document.querySelectorAll('.faq-btn').forEach(function(b){b.addEventListener('click',function(){
    var c=b.nextElementSibling,open=c.classList.contains('hidden');
    document.querySelectorAll('.faq-content').forEach(function(x){x.classList.add('hidden');});
    document.querySelectorAll('.faq-btn').forEach(function(x){x.setAttribute('aria-expanded','false');});
    if(open){c.classList.remove('hidden');b.setAttribute('aria-expanded','true');}
  });});
  var ta=document.getElementById('project_summary'),cc=document.getElementById('char-count');
  if(ta){ta.addEventListener('input',function(){cc.textContent=ta.value.length+' / 1000';});}
  var form=document.getElementById('project-rfp-form');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();var s=document.getElementById('submit-btn');s.disabled=true;s.textContent='İletiliyor...';
    setTimeout(function(){s.textContent='İletildi';document.getElementById('form-success-banner').classList.remove('hidden');form.reset();cc.textContent='0 / 1000';},900);
  });}
});
