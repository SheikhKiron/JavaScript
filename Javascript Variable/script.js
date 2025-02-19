/*ভেরিয়েবল ডিক্লারেশনের নিয়ম

ভেরিয়েবল তৈরির কিছু গুরুত্বপূর্ণ নিয়ম রয়েছে:

✅ ভেরিয়েবল নাম case-sensitive (বড় হাতের এবং ছোট হাতের অক্ষর আলাদা)।
✅ ভেরিয়েবল নামের মাঝে স্পেস রাখা যাবে না।
✅ কোনো সংরক্ষিত (reserved) শব্দ যেমন if, const ভেরিয়েবল নামে ব্যবহার করা যাবে না।
✅ camelCase ব্যবহার করা হয়, যেমন sellingPrice বা costPrice।
✅ সংখ্যা (number) দিয়ে শুরু করা যাবে না।
✅ _ (আন্ডারস্কোর) এবং $ (ডলার চিহ্ন) ব্যবহার করা যাবে, তবে - (হাইফেন) ব্যবহার করা যাবে না।

ভুল উদাহরণ (invalid names)

let 123name = "John"; // ভুল, সংখ্যা দিয়ে শুরু করা যাবে না।
let my-name = "John"; // ভুল, হাইফেন ব্যবহার করা যাবে না।
let let = "Something"; // ভুল, সংরক্ষিত শব্দ ব্যবহার করা যাবে না।*/


/*ভেরিয়েবল ডিক্লারেশনের তিনটি উপায়*/

/*জাভাস্ক্রিপ্টে ভেরিয়েবল তৈরি করতে তিনটি কীওয়ার্ড ব্যবহার করা হয়:
1️⃣ var - পুরোনো পদ্ধতি

✅ পুনরায় ঘোষণা (re-declare) করা যায়।
✅ পুনরায় মান (value) পরিবর্তন করা যায়।
✅ গ্লোবাল স্কোপড অথবা ফাংশন স্কোপড হয়।
✅ Hoisted হয় (প্রথমেই মেমোরিতে জায়গা পায়)।
❌ ব্লক স্কোপড নয়, যা সমস্যা তৈরি করতে পারে।

var x = 10;
var x = 20; // পুনরায় ঘোষণা করা সম্ভব
x = "Bangladesh"; // মান পরিবর্তন করা সম্ভব
{
  var y = 30;
}
console.log(y); // 30 (ব্লকের বাইরে থেকেও পাওয়া যাবে)

⚠️ সমস্যা: var ব্লকের ভিতরে থাকলেও বাইরের স্কোপে চলে আসে, যা অনেক সময় সমস্যা সৃষ্টি করে।*/

var x = 60;
var x = 70;
x = "Kiron";
console.log(x);

{
  var y = 44;
}
console.log(y);

/*2️⃣ let - আধুনিক পদ্ধতি

❌ পুনরায় ঘোষণা করা যায় না।
✅ পুনরায় মান পরিবর্তন করা যায়।
✅ ব্লক স্কোপড (Block Scoped)।
❌ Hoisting হলেও এটি ব্যবহার করার আগে ReferenceError দেয়।

let a = 10;
a = 15; // মান পরিবর্তন করা যাবে
{
  let b = 20;
  console.log(b); // 20 (ব্লকের ভিতরে ব্যবহার করা যাবে)
}
// console.log(b); // ReferenceError: b is not defined

⚠️ let শুধুমাত্র তার ব্লকের ভিতরেই পাওয়া যাবে, বাইরে নয়।*/

let a = 100;
a = 233;
console.log(a);

{
  let b = 50;
 console.log(b);
}


/*3️⃣ const - পরিবর্তন করা যায় না

❌ পুনরায় ঘোষণা করা যায় না।
❌ মান পরিবর্তন করা যায় না।
✅ ব্লক স্কোপড (Block Scoped)।
❌ Hoisting হলেও এটি ব্যবহার করার আগে ReferenceError দেয়।

const pi = 3.1416;
// pi = 3.14; // ❌ TypeError: Assignment to constant variable

{
  const c = 50;
  console.log(c); // 50
}
// console.log(c); // ❌ ReferenceError: c is not defined

⚠️ const দিয়ে যদি কোনো অবজেক্ট (Object) বা অ্যারে (Array) তৈরি করা হয়, তবে তার প্রপার্টি পরিবর্তন করা সম্ভব, কিন্তু পুরো অবজেক্ট বা অ্যারেটি নতুনভাবে অ্যাসাইন করা যাবে না।

const person = {
  name: "Ali",
  age: 30
};

person.age = 32; // 👍 সম্ভব, কারণ আমরা প্রপার্টি পরিবর্তন করছি
person.country = "Bangladesh"; // 👍 সম্ভব, নতুন প্রপার্টি যোগ করা যাচ্ছে

// person = { name: "John" }; // ❌ সম্ভব নয়, কারণ পুরো অবজেক্ট পরিবর্তন করা যাবে না।

console.log(person);*/


const pi = 3.1416;
console.log(pi);

const person = {
  name:'Sheikh Kiron',
  age:21,
};
person.country = "Bangladesh";
person.age = '25';
console.log(person);

/*Scope (স্কোপ) বুঝুন

স্কোপ নির্ধারণ করে কোন ভেরিয়েবল কোথায় পাওয়া যাবে।
🔹 Global Scope (গ্লোবাল স্কোপ)

যদি কোনো ভেরিয়েবল ব্লকের বাইরে ডিক্লেয়ার করা হয়, তবে সেটি গ্লোবাল স্কোপড হয়ে যায় এবং পুরো স্ক্রিপ্টের যেকোনো জায়গা থেকে ব্যবহার করা যায়।

var country = "Bangladesh";

function showCountry() {
  console.log(country); // Bangladesh (গ্লোবাল স্কোপড)
}

showCountry();
console.log(country); // Bangladesh*/

var country = "India"
{
  console.log(country);
}
//console.log(country);


/*🔹 Block Scope (ব্লক স্কোপ)

let ও const ব্লকের ভিতর সীমাবদ্ধ থাকে এবং বাইরে থেকে এক্সেস করা যায় না।

{
  let fruit = "Mango";
  const price = 50;
  console.log(fruit); // Mango
}

// console.log(fruit); // ❌ ReferenceError: fruit is not defined*/


{
  let e = 50;
  console.log(e);
}

let e = 40;

console.log(e);
 
/*🔹 Function Scope (ফাংশন স্কোপ)

যদি কোনো ভেরিয়েবল var দিয়ে ফাংশনের ভিতরে ডিক্লেয়ার করা হয়, তবে এটি শুধুমাত্র সেই ফাংশনের মধ্যেই থাকবে।

function myFunction() {
  var car = "Toyota";
  console.log(car); // Toyota
}

// console.log(car); // ❌ ReferenceError: car is not defined*/