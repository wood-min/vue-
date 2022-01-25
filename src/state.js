import { observe } from "./observer/index";
import { proxy } from "./util";

export function initState(vm){ //初始化数据 vm.$options
    const options = vm.$options;
    if(options.props){
        initProps(vm);
    }
    if(options.methods){
        initMethods(vm);
    }
    if(options.data){
        initData(vm);
    }
    if(options.computed){
        initComputed(vm)
    }
    if(options.watch){
        initWatch(vm);
    }

}
function initProps(vm){};
function initMethods(vm){};
function initData(vm){
    let data = vm.$options.data;
    vm._data = data = (typeof data == 'function')?data.call(vm):data;
    for (let key in data) {
        proxy
        (vm,'_data',key)
    }
    observe(data);
};
function initComputed(vm){};
function Watch(vm){};
