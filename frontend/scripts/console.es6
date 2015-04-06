let c = window.console;
let boundConsole = {};
for (let methodName in c) {
  let method = c[methodName];
  if (typeof method === 'function') {
    try {
      boundConsole[methodName] = method.bind(c);
    } catch (e) {}
  }
}

module.exports = boundConsole;