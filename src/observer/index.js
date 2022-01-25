import { defineProperty } from "../util";
import { arrayMethods } from "./array";

export function observe(data){
    if(typeof data !== 'object' || data == null || data.__ob__){
        return
    }
    new Observe(data)
}
class Observe{
    constructor(value){
        defineProperty(value,'__ob__',this)
        if(Array.isArray(value)){ 
            value.__proto__ = arrayMethods;
            this.observeArray(value);
        }else{
            this.walk(value);
        }

    }
    walk(data){
        for (const key in data) {
           defineReactive(data,key,data[key]);
        }
    }
    observeArray(value){
        value.forEach(element => {
            observe(element);
        });
    }
}

function defineReactive(data,key,value){
    observe(value);
    Object.defineProperty(data,key,{
        get(){
            console.log("获取值");
            return value
        },
        set(newvalue){
            if(newvalue === value) return;
            console.log("设置值");
            observe(newvalue);
            value = newvalue;
        }
    })
}