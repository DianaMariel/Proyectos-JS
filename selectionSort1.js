function SelecSort(array,x,y){
  if(x>=y){
      return;
  }
  let m = x + parseInt((y-x)/2);
  SelecSort(array,x,m);
  SelecSort(array,m+1,y);
  Merge(array,x,m,y);    
}

function Merge(array,x,m,y){
  let n1 = m-x+1;
  let n2 = y-m;

  let leAr = new Array(n1);
  let riAr = new Array(n2);

  for(let i = 0; i<n1; i++){
    leAr[i] = array[x+i]
  }
  for(let j = 0; j<n2; j++){
    riAr[j] = array[m+j+1]
  }

  let i = 0;
  let j = 0;
  let k = x;

  while(i<n1 && j<n2){
      if(leAr[i]<=riAr[j]){
          array[k]=leAr[i];
          i++;
      }
      else{
          array[k]=riAr[j];
          j++;
      }
      k++;
  }
  while(i<n1){
      array[k] = leAr[i]
      i++
      k++
  }
  while(j<n2){
      array[k]=riAr[j]
      j++
      k++
  }
}

let arr = [12, 11, 13, 5, 6, 7]
console.log(arr)
SelecSort(arr,0,arr.length-1)
console.log(arr)