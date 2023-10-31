let target = {
  message: 'Hello, this is a target object',
};

let handler = {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'Property not found';
    }
  },
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // Outputs: "Hello, this is a target object"
console.log(proxy.someProperty); // Outputs: "Property not found"
