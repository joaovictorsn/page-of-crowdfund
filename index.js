var modal = document.querySelector('#modal-text');

var modal_02 = document.querySelector('#modal_02');

var btnSelector = document.querySelectorAll('.btn-js');

var btnClose = document.querySelector('#btn-close');

var btnGoIt = document.querySelector('#btn-Go-It');

var clickSelectorPoint = document.querySelectorAll('.select-option');

var btnContinue = document.querySelectorAll('.btn-continue');

var input = document.getElementsByName('input');

var choiceValue02 = document.querySelector('#choiceValue75');
var choiceValue01 = document.querySelector('#choiceValue25');
var choiceValue0 = document.querySelector('#choiceValue');

function addModalDisplayBlock(){
  modal.style.display = "block";
}

function addModal02DisplayBlock(){
  modal_02.style.display = "block";
  closeModal();
}

function closeModal02(){
  modal_02.style.display ='none';
  choiceValue01.style.display = 'none';
  choiceValue02.style.display = 'none';
  choiceValue0.style.display = 'none';

}

function closeModal(){
  modal.style.display ='none';
}

function selectorPoint02(){
  choiceValue02.style.display = 'block';
  choiceValue01.style.display = 'none';
  choiceValue0.style.display = 'none';
}

function selectorPoint01(){
  choiceValue01.style.display = 'block';
  choiceValue0.style.display = 'none';
  choiceValue02.style.display = 'none';
}

function selectorPoint0(){
  choiceValue0.style.display = 'block';
  choiceValue01.style.display = 'none';
  choiceValue02.style.display = 'none';
}

clickSelectorPoint[0].addEventListener('click',()=>{
  selectorPoint0();

})
clickSelectorPoint[1].addEventListener('click',()=>{
  selectorPoint01();
 
})
clickSelectorPoint[2].addEventListener('click',()=>{
  selectorPoint02();
  
})

btnSelector.forEach((btnSelect) => {
  btnSelect.addEventListener('click',()=>{
    addModalDisplayBlock();
  })
})
btnContinue.forEach((btnContinue) => {
  btnContinue.addEventListener('click',()=>{
    closeModal02();
  })
})

window.addEventListener('click', (e)=>{
  if(e.target == modal){
    closeModal();
  }
})
window.addEventListener('click', (e)=>{
  if(e.target == modal_02){
    closeModal02();
  }
})

btnClose.addEventListener('click',closeModal02);
btnGoIt.addEventListener('click',addModal02DisplayBlock);