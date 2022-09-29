let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let log = function () {
  console.log(...arguments);
};

export { $, $$, log };
