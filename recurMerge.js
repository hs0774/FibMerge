function fib(number){
    let fibArr=[0,1];
    if(number>2){
        for(let i=2;i<number;i++){
            let fibnum=fibArr[i-1]+fibArr[i-2];
            fibArr.push(fibnum);
        }
    }
    return fibArr;
}

function fibsrec(num){
    if (num ==0){
        return [];
    }
    else if (num==1)
        return [0];
    else if (num==2)
        return [0,1];
    else {
        let arr = fibsrec(num-1);
        let add = arr[arr.length-1]+arr[arr.length-2];
        arr.push(add);
        return arr;

    }    
}

function merge(a,low,mid,high){

    let x=[]; //temp array 
    let left = low; //1
    let right= mid+1; //2
    while (left<=mid && right <=high){
        if(a[left] <= a[right]){
            x.push(a[left]);
            left++; 
        }
        else {
            x.push(a[right]);
            right++;
        }
    }
    while(left <= mid){
        x.push(a[left]);
        left++;
    }
    while(right <= high){
        x.push(a[right]);
        right++;
    }
    for (let i = 0; i < x.length; i++) {
        a[low + i] = x[i];
      }  //copies values from x arr back to original a 
}

function mergeSort(a,low,high){
   
    if (low >=high){
        return;
    }
    let mid = Math.floor((low+high)/2);
    mergeSort(a,low,mid);
    mergeSort(a,mid+1,high);
    merge(a,low,mid,high);

}
const q1 = fib(8);
const q2 = fibsrec(8);
console.log(q1);
console.log(q2);
let arr = [3,1,8,35,56,2,5,0,7];
let low=0;
let high= arr.length-1;
mergeSort(arr, low, high);
console.log(arr);//0,1,2,3,5,7,8,35,56

