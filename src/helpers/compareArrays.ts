export const compareArrays = (arr1:string[],arr2:string[]) => {
    if(arr1.length !== arr2.length) return false;

    for(let i = 0;i < arr1.length;i++) {
        if(!arr2.includes(arr1[i])) return false;
    }

    return true;
}