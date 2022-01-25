export function proxy(vm,data,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[data][key]
        },
        set(nval){
            console.log("拦截设置值");
            vm[data][key] = nval;
        }
    })
}

export function defineProperty(target,key,value){
    Object.defineProperty(value,key,{
        enumerable:false,
        configurable:false,
        value
    })
}