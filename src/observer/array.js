// 拿到数组的原型上的方法
let oldArrayProtoMethods = Array.prototype;

export let arrayMethods = Object.create(oldArrayProtoMethods);

let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice'
];

methods.forEach(methods =>{
    arrayMethods[methods] = function(...args){
     const result = oldArrayProtoMethods[methods].apply(this,args);
        let inserted,
            ob = this.__ob__;   
        switch(methods){
            case 'puah':
            case 'unshift':
                inserted = args;
                break;
            case "splice":
                inserted = args.slice(2);
            default:
                break;
        }
        if(inserted){
            ob.observeArray(inserted);
        }
        return result
    }
})