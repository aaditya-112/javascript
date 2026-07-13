// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
function MergeSortArray(nums1, m, nums2, n){
    let pointer1= 0;
    let pointer2 = 0;
    while(pointer2<nums2.length){
        if(nums2[pointer2]===nums1[pointer1]){
            nums1.splice(pointer1,0,nums2[pointer2])
            pointer2 ++;
        }
        if(nums1[pointer1]<nums2[pointer2]){
            pointer1++;
        }
    }
}