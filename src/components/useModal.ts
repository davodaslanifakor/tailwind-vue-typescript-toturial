import {readonly, ref} from 'vue'
const visible = ref(false)
export function useModal(){
    return {
        visible: readonly(visible),
        hideModal:()=> visible.value = false,
        showModal:()=> visible.value = true
    }
}