export function binarySearch(array: number[], target: number): number{
    let l: number = 0;
    let r: number = array.length - 1;

    while (l <= r){
        let mid: number = Math.floor((l + r) / 2);
        if (array[mid] === target){
            return mid;
        }
        if (array[mid] < target){
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}