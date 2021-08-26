import {readonly, ref, shallowRef} from 'vue'
const visible = ref(false)
const component = shallowRef()
export function useModal(){
    return {
        component,
        visible: readonly(visible),
        hideModal:()=> visible.value = false,
        showModal:()=> visible.value = true
    }
}