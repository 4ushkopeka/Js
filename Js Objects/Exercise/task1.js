function employees(names){
    let emps = {};
for (const name of names) {
    emps[name] = name.length;
}
for (const key in emps) {
    console.log(`Name: ${key} -- Personal Number: ${emps[key]}`);
}
}