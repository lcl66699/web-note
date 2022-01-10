import {
    once
} from 'lodash';
import Add from './add.js';
import Multiply from './multiply.js';


const onceAdd = once(Add);
const addRes = onceAdd(1, 3);
const mulRes = Multiply(2, 4);


console.log(addRes);
console.log(mulRes);