JavaScript-এর Data Types বাংলা ব্যাখ্যা

JavaScript-এ মোট ৮ ধরনের ডাটা টাইপ রয়েছে—

1️⃣ String
2️⃣ Number
3️⃣ BigInt
4️⃣ Boolean
5️⃣ Undefined
6️⃣ Null
7️⃣ Symbol (এটা নিয়ে আলাদা আলোচনা করা হবে 😊)
8️⃣ Object
✅ 1. String (স্ট্রিং)

👉 String হলো text (লেখা) ধারণ করার জন্য ব্যবহৃত ডাটা টাইপ।
👉 এটি single quotes (''), double quotes (""), বা backticks (``) ব্যবহার করে লেখা যায়।
উদাহরণ:

let firstName = 'Ali';
firstName = 'Shovo'; 

// Single quote বা double quote ব্যবহার করা যায়
let fullName = "My Name is 'Ali'"; 

// Backticks ব্যবহার করে ভেরিয়েবল যোগ করা যায়
let finalName = `My Name is ${firstName}`;
console.log(finalName); // Output: My Name is Shovo

❌ ভুল কোড:

let finalName = My Name is ${firstName};

✔ সঠিক কোড:

let finalName = `My Name is ${firstName}`;

👉 Backticks (``) ব্যবহার না করলে, JavaScript এই কোডকে error হিসেবে দেখাবে।
✅ 2. Number (সংখ্যা)

👉 JavaScript-এ number শুধুমাত্র এক ধরনের হয়, সেটা integer (পূর্ণসংখ্যা) বা decimal (দশমিক সংখ্যা) হতে পারে।
উদাহরণ:

let age = 30;     // পূর্ণসংখ্যা (Integer)
let ageNew = 30.5; // দশমিক সংখ্যা (Float)

👉 JavaScript-এ সংখ্যা ও স্ট্রিং একসাথে যোগ করলে স্ট্রিং হিসেবে গণনা হয়!

let age2 = finalName + 5 + 10;
console.log(age2); 
// Output: "My Name is Shovo510" (কারণ finalName একটি স্ট্রিং)

❌ ভুল:

let calculation = age + age2 + firstName + age + age2;

✔ সঠিক উপায়:

let calculation = age + (5 + 10); // প্রথমে সংখ্যাগুলোর যোগফল হিসাব করা হবে।
console.log(calculation); 

✅ 3. BigInt (বড় সংখ্যা)

👉 BigInt ব্যবহার করা হয় খুব বড় সংখ্যা সংরক্ষণ করতে।
👉 এটি "n" যুক্ত করে অথবা BigInt() ফাংশন ব্যবহার করে লেখা হয়।
উদাহরণ:

let numberBig = 9n; // সরাসরি "n" যুক্ত করে BigInt
let numberBig2 = BigInt(age); // সাধারণ সংখ্যাকে BigInt-এ রূপান্তর
console.log(numberBig2); // Output: 30n

❌ ভুল:

let result = numberBig + age; // BigInt অন্য ডাটা টাইপের সাথে যোগ করা যাবে না।

✔ সঠিক উপায়:

let result = numberBig + BigInt(age);

✅ 4. Boolean (বুলিয়ান)

👉 Boolean শুধুমাত্র দুটি মান নিতে পারে:
✔ true (সত্য)
❌ false (মিথ্যা)
উদাহরণ:

let ifAdult = false; // এটি মিথ্যা মান ধরে নিচ্ছে
console.log(ifAdult); // Output: false

✅ 5. Undefined (অপরিবর্তিত মান)

👉 কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু মান দেওয়া হয়নি, তখন এটি undefined হবে।

let something;
console.log(something); // Output: undefined

✅ 6. Null (শূন্য মান)

👉 Null হলো একটি ইচ্ছাকৃতভাবে সেট করা "শূন্য" মান।
👉 এটি undefined থেকে আলাদা কারণ এটি প্রোগ্রামার নিজেই সেট করে।

let someInfo = null;
console.log(someInfo); // Output: null

✅ 7. Arrays (অ্যারে)

👉 JavaScript-এ অ্যারে একটি multiple values ধারণ করতে পারে এবং স্কয়ার ব্র্যাকেট [] ব্যবহার করা হয়।
উদাহরণ:

let fruits = ['Apple', 'Lemon', 'Pear', 'Oranges', 32, true, undefined, null];

fruits[4] = 'Mango'; // অ্যারের ৪ নম্বর index-এ Mango সেট করা হলো।
console.log(fruits);

❌ ভুল:

let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges', 32, true.undefined, null];

✔ সঠিক উপায়:

let fruits = ['Apple', 'Lemon', 'Pear', 'Oranges', 32, true, undefined, null];

👉 true.undefined হলো সিনট্যাক্স ভুল!
✅ 8. Object (অবজেক্ট)

👉 Object হলো key-value pair ধারণ করতে পারে এবং curly braces {} ব্যবহার করা হয়।
উদাহরণ:

let student = {
  fullName: 'Ali Hossain',
  age: 32,
  dateOfBirth: 1992,
};

console.log(student); 
// Output: { fullName: 'Ali Hossain', age: 32, dateOfBirth: 1992 }

console.log(typeof student); 
// Output: object

👉 typeof অপারেটর ব্যবহার করলে, এটি object বলে দেখাবে।
✅ সংক্ষেপে JavaScript-এর Data Types
Data Type	উদাহরণ
String	"Hello World"
Number	25, 3.14
BigInt	9007199254740991n
Boolean	true, false
Undefined	let x; (কোনো মান নেই)
Null	let y = null;
Array	['Apple', 25, true]
Object	{name: "Ali", age: 25}




✅ BigInt কিভাবে কাজ করে?
১️⃣ BigInt তৈরি করার দুইটি উপায়

// 1. "n" ব্যবহার করে BigInt তৈরি করা
let bigNumber1 = 9007199254740991n;
console.log(bigNumber1); // Output: 9007199254740991n

// 2. BigInt() ফাংশন ব্যবহার করে তৈরি করা
let bigNumber2 = BigInt(9007199254740991);
console.log(bigNumber2); // Output: 9007199254740991n

✅ BigInt এবং সাধারণ সংখ্যা (Number) এর মধ্যে পার্থক্য

সাধারণ সংখ্যা (Number):

let num = 9007199254740991; // সর্বোচ্চ নির্ভুল সংখ্যা
console.log(num + 1); // Output: 9007199254740992 (এখনও সঠিক)

console.log(num + 2); 
// Output: 9007199254740992 (ভুল মান, কারণ নির্ভুলতা হারিয়েছে!)

👉 এখানে দেখা যাচ্ছে, বড় সংখ্যা ব্যবহারের সময় ভুল গণনা হচ্ছে!

BigInt ব্যবহার করলে:

let bigNum = 9007199254740991n;
console.log(bigNum + 2n); // Output: 9007199254740993n (সঠিক মান!)

👉 BigInt ব্যবহারের ফলে কোনো নির্ভুলতা হারায়নি।
❌ BigInt এবং সাধারণ সংখ্যা একসাথে ব্যবহার করা যায় না!

BigInt এবং সাধারণ Number একসাথে যোগ, বিয়োগ, গুণ, ভাগ ইত্যাদি করা যাবে না।

let num1 = 10; // সাধারণ সংখ্যা
let num2 = 20n; // BigInt সংখ্যা

console.log(num1 + num2); // ❌ Error: Cannot mix BigInt and other types

✅ সমাধান:
👉 সাধারণ Number কে BigInt এ রূপান্তর করতে হবে।

console.log(BigInt(num1) + num2); // ✅ Output: 30n

✅ BigInt কোথায় ব্যবহার করা হয়?

BigInt সাধারণত নিচের ক্ষেত্রে ব্যবহৃত হয়—

🔹 অনেক বড় সংখ্যা গাণিতিক গণনার ক্ষেত্রে (যেমন: ব্যাংকিং, ক্রিপ্টোগ্রাফি, বিজ্ঞান ও পরিসংখ্যান বিশ্লেষণ)।
🔹 মিলিসেকেন্ডে সময় গণনার ক্ষেত্রে (Timestamp Calculation)
🔹 অনেক বড় আইডি (ID) বা সিরিয়াল নাম্বার ব্যবহারের ক্ষেত্রে

let hugeID = BigInt("123456789123456789123456789");
console.log(hugeID); // Output: 123456789123456789123456789n

✅ BigInt এর সাথে বিভিন্ন অপারেশন

BigInt দিয়ে সাধারণ সংখ্যার মতো যোগ, বিয়োগ, গুণ, ভাগ ইত্যাদি করা যায়, তবে সবসময় BigInt টাইপেই থাকতে হবে।

let num1 = 50n;
let num2 = 20n;

console.log(num1 + num2); // ✅ Output: 70n
console.log(num1 - num2); // ✅ Output: 30n
console.log(num1 * num2); // ✅ Output: 1000n
console.log(num1 / num2); // ✅ Output: 2n (ভগ্নাংশ বাদ হয়ে যায়!)
console.log(num1 % num2); // ✅ Output: 10n

👉 ভাগফল (/) এর ক্ষেত্রে দশমিক সংখ্যা দেখাবে না, শুধু পূর্ণসংখ্যা দেখাবে!

console.log(15n / 4n); // Output: 3n (3.75 দেখাবে না, বরং পূর্ণসংখ্যা 3 দেখাবে)

✅ BigInt এর সীমাবদ্ধতা

🔸 BigInt দশমিক (floating point) সংখ্যা রাখতে পারে না।

let decimalBigInt = 10.5n; // ❌ Error

🔸 BigInt ও অন্যান্য সংখ্যা একসাথে ব্যবহার করা যাবে না।

console.log(10n + 5); // ❌ Error

🔸 BigInt এবং JSON একসাথে কাজ করে না।

let obj = { value: 123456789123456789n };
JSON.stringify(obj); // ❌ Error: Cannot serialize BigInt

🎯 সংক্ষেপে
বিষয়	সাধারণ সংখ্যা (Number)	BigInt
সর্বোচ্চ সীমা	2^53 - 1 (9007199254740991)	অসীম (যত বড় দরকার)
নির্ভুলতা	নষ্ট হতে পারে	সম্পূর্ণ নির্ভুল
দশমিক সংখ্যা	✅ সমর্থিত	❌ সমর্থিত নয়
একসাথে ব্যবহার	✅ করা যায়	❌ করতে গেলে Error
🎯 শেষ কথা

👉 যখন ছোট সংখ্যা (১ বিলিয়নের নিচে) ব্যবহার করতে হবে, তখন সাধারণ Number টাইপ ব্যবহার করাই ভালো।
👉 খুব বড় সংখ্যা (যেমন ট্রানজেকশন ID, হিসাবরক্ষণ, timestamp ইত্যাদি) ব্যবহার করতে হলে BigInt ব্যবহার করতে হবে।