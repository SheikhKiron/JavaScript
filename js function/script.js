১. কোড-চালিত (Code-Driven) ফাংশন কল

এ ধরনের ফাংশন সরাসরি স্ক্রিপ্টের অন্য জায়গা থেকে ডাকা হয় এবং সাধারণত হিসাব-নিকাশ, ডাটা ম্যানিপুলেশন ও লজিক এক্সিকিউশনের জন্য ব্যবহৃত হয়।

function myFunction(fullName, age, dateOfBirth = 1991) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
  );
}
myFunction('Ali', 30, 1995);
myFunction('Shovo', 35, true);

কী হচ্ছে এখানে?

    myFunction() নামে একটি ফাংশন তৈরি করা হয়েছে, যা তিনটি প্যারামিটার নিচ্ছে— fullName, age, এবং dateOfBirth (যার ডিফল্ট মান 1991)।
    ফাংশনটি console.log দিয়ে একটি বার্তা প্রিন্ট করছে।
    myFunction('Ali', 30, 1995); - এখানে Ali, 30, 1995 প্যারামিটার হিসেবে পাঠানো হয়েছে।
    myFunction('Shovo', 35, true); - এখানে true পাঠানো হয়েছে, যা dateOfBirth-এ বসবে এবং অপ্রত্যাশিত আউটপুট দিতে পারে।

২. ইভেন্ট-চালিত (Event-Driven) ফাংশন কল

ফাংশন তখনই চলে, যখন কোনো নির্দিষ্ট ইভেন্ট ঘটে, যেমন ক্লিক, টাইপিং বা সাবমিশন।

function isSubscribed() {
  console.log('Subcribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

কী হচ্ছে এখানে?

    isSubscribed() ফাংশন তৈরি করা হয়েছে, যা "Subscribed" প্রিন্ট করবে।
    document.getElementById('btn') - HTML-এ id="btn" থাকা কোনো বাটনকে ধরে এনেছে।
    .addEventListener('click', isSubscribed); - যখন বাটনে ক্লিক করা হবে, তখন isSubscribed() ফাংশন চালু হবে।

৩. স্বয়ংক্রিয়ভাবে চলমান (Self-Invoking) ফাংশন

এই ধরনের ফাংশন লেখা মাত্রই চালু হয়ে যায়, একে Immediately Invoked Function Expression (IIFE) বলে।

(function (message) {
  console.log('I am self-Invokeing Function', message);
})('Hello');

কী হচ্ছে এখানে?

    এটি একটি Self-Invoking Function, যা (function() {})(); এই ফরম্যাটে লেখা হয়।
    ফাংশনটি একবারই চলে এবং কোনো পরিবর্তন ছাড়াই এক্সিকিউট হয়।

৪. ফাংশন এক্সপ্রেশন (Function Expression)

ফাংশনকে ভেরিয়েবলে রেখে এক্সপ্রেশন হিসেবে ব্যবহার করা যায়।

let maths = function (x, y) {
  console.log('Testing if I am working or not');
  return x * y;
};
console.log(maths(3, 4));
console.log(maths(4, 4));
console.log(maths(4, 5));

কী হচ্ছে এখানে?

    maths নামে একটি ফাংশন এক্সপ্রেশন তৈরি করা হয়েছে।
    console.log(maths(3, 4)); - ফাংশনটি কল করা হয়েছে এবং গুণফল রিটার্ন করেছে।

৫. লোকাল ভেরিয়েবল (Local Variables)

ফাংশনের ভিতরে ডিক্লেয়ার করা ভেরিয়েবল শুধুমাত্র সেই ফাংশনের মধ্যেই ব্যবহার করা যায়।

function newFunc() {
  let firstName = 'Ali';
  console.log(firstName);
}
newFunc();

কী হচ্ছে এখানে?

    firstName ভেরিয়েবল শুধুমাত্র newFunc() ফাংশনের মধ্যে কাজ করবে।
    ফাংশনের বাইরে এক্সেস করা যাবে না।

৬. অ্যানোনিমাস (Anonymous) ফাংশন

যে ফাংশনের কোনো নাম নেই, তাকে Anonymous Function বলে।

let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumbers);

কী হচ্ছে এখানে?

    map() মেথড ব্যবহার করে প্রতিটি সংখ্যা স্কয়ার করা হয়েছে।
    এখানে function (number) { return number * number; } - এটি Anonymous Function, কারণ এর কোনো নাম নেই।

৭. অ্যারো ফাংশন (Arrow Functions)

অ্যারো ফাংশন হলো সংক্ষিপ্ত এবং সহজভাবে লেখার জন্য ব্যবহার করা হয়।

let add = (x, y) => x + y;
console.log(add(5, 6));

কী হচ্ছে এখানে?

    function(x, y) { return x + y; } - কে সংক্ষিপ্ত করে => অ্যারো ফাংশন ব্যবহার করা হয়েছে।
    console.log(add(5, 6)); - আউটপুট হবে 11।

৮. নেস্টেড ফাংশন (Nested Functions)

ফাংশনের ভিতরে আরেকটি ফাংশন থাকলে, তাকে Nested Function বলে।

function greet(firstName) {
  function sayHello() {
    alert('Hello ' + firstName);
  }
  return sayHello();
}
greet('Shovo');

কী হচ্ছে এখানে?

    greet() ফাংশনের মধ্যে sayHello() নামে আরেকটি ফাংশন আছে।
    greet('Shovo'); - কল করলে sayHello() ফাংশন alert দেখাবে "Hello Shovo"।

এবার তুমি বুঝতে পেরেছো, JavaScript ফাংশন কীভাবে কাজ করে। যদি আরও কোনো জিনিস বুঝতে সমস্যা হয়, আমাকে জানাও! 🚀





//? 2nd part

অবশ্যই! আমি আরও বিশদভাবে ব্যাখ্যা করছি, যাতে তুমি JavaScript ফাংশন সম্পর্কে আরও গভীরভাবে বুঝতে পারো।
JavaScript ফাংশন: সম্পূর্ণ বিশ্লেষণ

JavaScript ফাংশন হলো কোডের পুনঃব্যবহারযোগ্য ব্লক যা নির্দিষ্ট একটি কাজ সম্পন্ন করে। ফাংশন ডিফাইন করা যায় এবং যেকোনো সময় কল করা যায়, যা কোডের কার্যকারিতা ও পুনঃব্যবহারযোগ্যতা বাড়ায়।
১. ফাংশন কীভাবে কাজ করে?

ফাংশন সাধারণত তিনটি ধাপে কাজ করে:

1️⃣ ফাংশন ডিক্লারেশন (Function Declaration): ফাংশন তৈরি করা হয়।
2️⃣ ফাংশন এক্সিকিউশন (Function Execution): ফাংশনকে কল করা হয়।
3️⃣ ফাংশন রিটার্ন (Function Return - যদি থাকে): ফাংশন কিছু মান রিটার্ন করতে পারে।
২. ফাংশন ডিফাইন ও কল করার নিয়ম

ফাংশন তৈরি করতে আমরা function কিওয়ার্ড ব্যবহার করি।

function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Kiron'); // আউটপুট: Hello, Kiron!

কী হচ্ছে এখানে?

    greet(name) ফাংশন ডিক্লেয়ার করা হয়েছে, যেখানে name প্যারামিটার হিসেবে কাজ করছে।
    console.log() দিয়ে Hello, Kiron! প্রিন্ট করা হচ্ছে।
    greet('Kiron'); - এইভাবে কল করলে ফাংশন এক্সিকিউট হয়।

৩. প্যারামিটার ও আর্গুমেন্ট (Parameters & Arguments)

ফাংশনের মধ্যে আমরা প্যারামিটার ডিক্লেয়ার করতে পারি এবং কল করার সময় আর্গুমেন্ট পাঠাতে পারি।

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10)); // আউটপুট: 15

কী হচ্ছে এখানে?

    a, b হলো প্যারামিটার, যেগুলো ফাংশনের মধ্যে ডাটা গ্রহণ করে।
    sum(5, 10); - এখানে 5 এবং 10 হলো আর্গুমেন্ট, যা প্যারামিটার a ও b তে যায়।
    return a + b; - ফাংশন a ও b এর যোগফল রিটার্ন করছে।

৪. ডিফল্ট প্যারামিটার (Default Parameters)

যদি কোনো আর্গুমেন্ট না পাঠানো হয়, তাহলে ডিফল্ট মান সেট করা যায়।

function greet(name = 'Guest') {
  console.log('Hello, ' + name + '!');
}
greet(); // আউটপুট: Hello, Guest!
greet('Sheikh'); // আউটপুট: Hello, Sheikh!

কী হচ্ছে এখানে?

    name = 'Guest' এর মানে হলো যদি name না দেওয়া হয়, তাহলে ডিফল্ট "Guest" ব্যবহার করবে।

৫. ফাংশন এক্সপ্রেশন (Function Expression)

ফাংশনকে ভেরিয়েবলে রেখে এক্সপ্রেশন হিসেবে সংরক্ষণ করা যায়।

let multiply = function (x, y) {
  return x * y;
};
console.log(multiply(4, 5)); // আউটপুট: 20

কী হচ্ছে এখানে?

    function (x, y) { return x * y; } ফাংশনটিকে multiply ভেরিয়েবলে রাখা হয়েছে।
    এটি তখনই চলে যখন multiply(4, 5); কল করা হয়।

৬. অ্যারো ফাংশন (Arrow Functions)

ES6 থেকে অ্যারো ফাংশন এসেছে, যা আরও ছোট ও সহজ।

let square = (num) => num * num;
console.log(square(6)); // আউটপুট: 36

কী হচ্ছে এখানে?

    function(num) { return num * num; } - এই লম্বা লেখা ছোট করে => ব্যবহার করে সংক্ষেপে লেখা হয়েছে।

অন্য আরেকটি উদাহরণ:

let add = (a, b) => a + b;
console.log(add(10, 15)); // আউটপুট: 25

৭. নেস্টেড ফাংশন (Nested Functions)

ফাংশনের মধ্যে আরেকটি ফাংশন থাকলে তাকে Nested Function বলে।

function outerFunction(outerVariable) {
  function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  }
  innerFunction('Inside');
}

outerFunction('Outside');
// আউটপুট: Outer: Outside, Inner: Inside

কী হচ্ছে এখানে?

    outerFunction() এর ভিতরে innerFunction() রয়েছে।
    innerFunction() শুধুমাত্র outerFunction() এর মধ্যেই কাজ করবে।

৮. রিটার্ন ও ভ্যালু (Return & Value)

ফাংশন থেকে মান return করা হয়, যা অন্য ভেরিয়েবলে রাখা বা সরাসরি ব্যবহার করা যায়।

function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(10, 20);
console.log(result); // আউটপুট: 30

কী হচ্ছে এখানে?

    return a + b; - এটি যোগফল রিটার্ন করছে।
    let result = addNumbers(10, 20); - ফাংশনের ফলাফল result ভেরিয়েবলে সংরক্ষিত হচ্ছে।

৯. ইভেন্ট-ড্রিভেন ফাংশন (Event-Driven Functions)

যখন কোনো ইভেন্ট ঘটে, তখন ফাংশন ট্রিগার হয়।

document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});

কী হচ্ছে এখানে?

    যখন id="myButton" থাকা বাটনে ক্লিক করা হবে, তখন alert() দেখাবে।

১০. সেল্ফ-ইনভোকিং ফাংশন (Self-Invoking Functions - IIFE)

এ ধরনের ফাংশন লিখার সাথে সাথে এক্সিকিউট হয়।

(function () {
  console.log('I am an IIFE!');
})();

কী হচ্ছে এখানে?

    ফাংশনটি লেখা মাত্রই চলে যাচ্ছে, আলাদাভাবে কল করতে হচ্ছে না।

সংক্ষেপে ফাংশনের ধরন ও ব্যবহার
ফাংশন টাইপ	উদাহরণ	কাজ
নরমাল ফাংশন	function add(a, b) { return a + b; }	সাধারণ ফাংশন, যেটা বারবার ব্যবহার করা যায়
ডিফল্ট প্যারামিটার	function greet(name='Guest')	প্যারামিটার না দিলে ডিফল্ট মান নেয়
ফাংশন এক্সপ্রেশন	let multiply = function(x, y) { return x * y; }	ভেরিয়েবলে ফাংশন সংরক্ষণ
অ্যানোনিমাস ফাংশন	setTimeout(function() { console.log('Hi!'); }, 1000);	নাম ছাড়া ফাংশন, সাধারণত কলব্যাক হিসেবে ব্যবহৃত
অ্যারো ফাংশন	let sum = (a, b) => a + b;	সংক্ষেপে লেখা ফাংশন
নেস্টেড ফাংশন	function outer() { function inner() {} }	ফাংশনের ভিতরে ফাংশন
IIFE (Self-Invoking)	(function(){ console.log('Hello'); })();	লেখা মাত্রই চলে

এবার তুমি সম্পূর্ণরূপে JavaScript ফাংশন সম্পর্কে বুঝতে পারবে! 🎯 আরও জানতে চাইলে বলো! 🚀




// ! return part

return JavaScript ফাংশনের একটি গুরুত্বপূর্ণ অংশ, যা ফাংশনের বাইরে একটি মান পাঠাতে ব্যবহৃত হয়।
যদি return ব্যবহার না করা হয়, তাহলে ফাংশন শুধু এক্সিকিউট হবে, কিন্তু কোনো মান রিটার্ন করবে না।
return কিভাবে কাজ করে?

ফাংশনের ভিতরে return ব্যবহার করা হলে, ফাংশন সেটি ফিরিয়ে দেয় এবং সেই মানটি পরে অন্য জায়গায় ব্যবহার করা যায়।

function add(a, b) {
  return a + b;
}

let result = add(5, 10);
console.log(result); // আউটপুট: 15

এখানে কী হচ্ছে?

1️⃣ add(5, 10) ফাংশনকে কল করা হলো।
2️⃣ ফাংশনের ভিতরে return a + b; রয়েছে।
3️⃣ return মানে হচ্ছে 5 + 10, যা 15 হবে এবং সেই মান result এ সংরক্ষিত হয়েছে।
4️⃣ শেষে console.log(result); দিলে 15 প্রিন্ট হবে।
return ছাড়া ও return সহ ফাংশনের পার্থক্য
return ছাড়া ফাংশন (No Return Function)

function greet(name) {
  console.log('Hello, ' + name + '!');
}
let result = greet('Kiron');
console.log(result); // আউটপুট: Hello, Kiron! এবং result = undefined

কী সমস্যা হলো?

    এখানে console.log() ফাংশনের মধ্যে আছে, তাই এটি সরাসরি Hello, Kiron! প্রিন্ট করেছে।
    কিন্তু ফাংশন কোনো মান রিটার্ন করেনি, তাই result = undefined।

return সহ ফাংশন (With Return Function)

function greet(name) {
  return 'Hello, ' + name + '!';
}
let result = greet('Kiron');
console.log(result); // আউটপুট: Hello, Kiron!

কী হচ্ছে এখানে?

    return দিয়ে ফাংশন একটি মান ফেরত দিচ্ছে, যা result ভেরিয়েবলে সংরক্ষণ হয়েছে।
    console.log(result); - এর মাধ্যমে আমরা ফাংশন থেকে রিটার্ন করা মানটি ব্যবহার করতে পারছি।

কেন return ব্যবহার করা হয়?

1️⃣ ফাংশন থেকে মান বের করে আনতে (Return Value to Use it Later)
2️⃣ ফাংশনকে আরও গতিশীল করতে (Make Functions More Reusable)
3️⃣ কোডকে ক্লিন ও সংগঠিত রাখতে (Keep Code Clean & Organized)
4️⃣ return দিলে ফাংশন এক্সিকিউশন সাথে সাথে থেমে যায় (Stops Execution Immediately After Return)
আরও কিছু return উদাহরণ
১. গাণিতিক অপারেশন

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // আউটপুট: 20

    এখানে multiply(4, 5) 4 * 5 রিটার্ন করছে, যা 20 হয়।

২. কন্ডিশনের উপর ভিত্তি করে রিটার্ন

function isEven(number) {
  if (number % 2 === 0) {
    return 'Even Number';
  }
  return 'Odd Number';
}

console.log(isEven(10)); // আউটপুট: Even Number
console.log(isEven(7)); // আউটপুট: Odd Number

    এখানে ফাংশন যদি জোড় সংখ্যা পায় তাহলে "Even Number" রিটার্ন করবে, নয়তো "Odd Number"।

৩. return দিলে ফাংশন থেমে যায়

function checkNumber(num) {
  if (num > 0) {
    return 'Positive Number';
  }
  console.log('This will never execute');
  return 'Negative Number';
}

console.log(checkNumber(5)); // আউটপুট: Positive Number

    এখানে return এর পরের কোড কখনোই এক্সিকিউট হবে না, কারণ return পাওয়া মাত্রই ফাংশন থেমে যায়।

সংক্ষেপে return কিভাবে কাজ করে?
কাজ	return ছাড়া	return সহ
মান ফেরত দেওয়া	❌ (কিছুই ফেরত দেয় না)	✅ (একটি মান ফেরত দেয়)
পুনরায় ব্যবহারযোগ্যতা	সীমিত	বেশি
চেইনিং (Chaining)	❌ সম্ভব নয়	✅ সম্ভব
কোডের কার্যকারিতা	কম	বেশি
শেষ কথা

✅ যদি তুমি শুধু console.log() দিয়ে কিছু দেখাতে চাও, তবে return লাগবে না।
✅ কিন্তু যদি কোনো ফাংশনকে অন্য কোথাও ব্যবহার করতে চাও, তবে return লাগবেই।
✅ return পাওয়া মাত্রই ফাংশন থেমে যায় এবং পরবর্তী কোনো কোড চলে না।